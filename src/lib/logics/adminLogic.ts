import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  // deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { auth, db } from "../../lib/firebase";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";



export const adminLogics = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [showUsersModal, setShowUsersModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const navigate = useNavigate()


  // ===== 1️ USER =====

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userDocRef = doc(db, "user", authUser.uid)
        const userDoc = await getDoc(userDocRef)
        const currentUser = userDoc.data()
        if (currentUser?.role != "admin") {
          navigate("/dashboard/home");

        }

      }
    })
    return () => unsubscribe()
  }, []);

  // =====  USERS =====
  useEffect(() => {
    setLoading(true);
    const usersQuery = query(collection(db, "user"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      usersQuery,
      (querySnapshot) => {
        const usersList: any[] = [];
        querySnapshot.forEach((doc) => {
          usersList.push({ id: doc.id, ...doc.data() });
        });
        setUsers(usersList);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // const deleteUser = async (id: string) => {
  //   try {
  //     await deleteDoc(doc(db, "user", id));
  //   } catch (err) {
  //     console.error("Error deleting user:", err);
  //   }
  // };

  // ===== 2️⃣ PROJECTS =====
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "user"),
      (querySnapshot) => {
        const allProjects: any[] = [];

        querySnapshot.forEach((docSnap) => {
          const userData = docSnap.data();

          if (userData.projects && userData.projects.length > 0) {
            userData.projects.forEach((project: any) => {
              allProjects.push({
                ...project,
                id: project.id || `${docSnap.id}-${Math.random()}`,
                userId: docSnap.id,
                username: userData.username || "Guest",
                name: userData.name || "Guest",
                profileImg: userData.profileImg || "/profile.webp",
              });
            });
          }
        });

        allProjects.sort((a, b) => {
          const timeA = typeof a.createdAt === "number" ? a.createdAt : 0;
          const timeB = typeof b.createdAt === "number" ? b.createdAt : 0;
          return timeB - timeA;
        });

        setProjects(allProjects);
      },
      (error) => {
        console.error("Error fetching projects:", error);
      }
    );

    return () => unsubscribe();
  }, []);
  ;

  const deleteProject = async (userId: string, projectCreatedAt: number) => {
    try {
      const userRef = doc(db, "user", userId);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        toast.error("User not found");
        return;
      }

      const userData = userSnap.data();

      if (userData?.projects) {
        const updatedProjects = userData.projects.filter(
          (p: any) => p.createdAt !== projectCreatedAt
        );

        await updateDoc(userRef, { projects: updatedProjects });
        toast.success("Project deleted successfully");
      } else {
        toast.error("No projects found");
      }
    } catch (err) {
      console.error("Error deleting project:", err);
      toast.error("Failed to delete project");
    }
  };


  // ===== 3️⃣ TOTALS =====
  const totalUsers = users.length;
  const totalProjects = projects.length;
  const totalMoney = users.reduce((sum, u) => sum + (u.walletBalance || 0), 0);



  return { users, setUsers, projects, setProjects, loading, setLoading, showUsersModal, setShowUsersModal, showProjectsModal, setShowProjectsModal, deleteProject, totalUsers, totalProjects, totalMoney }
}