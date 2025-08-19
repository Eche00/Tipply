// lib/logics/profileLogic.ts
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast"; // import toast
import { signOut } from "firebase/auth";

export const useUserInfo = () => {
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    link: "",
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userDocRef = doc(db, "user", authUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUser({ uid: authUser.uid, ...userDoc.data() });
        } else {
          setUser({ uid: authUser.uid });
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (field: string, value: any) => {
    setUser((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleUpdateUser = async () => {
    if (!user?.uid) return;
    setLoading(true);
    const toastId = toast.loading("Updating profile..."); // show loading toast
    try {
      const userDocRef = doc(db, "user", user.uid);
      await updateDoc(userDocRef, {
        username: user.username,
        name: user.name,
        email: user.email,
        phone: user.phone,
        wallet: user.wallet,
        dob: user.dob,
        gender: user.gender,
        address: user.address,
        devType: user.devType,
        bio: user.bio,
        techStacks: user.techStacks || [],
        projects: user.projects || [],
        github: user.github || "",
        twitter: user.twitter || "",
      });

      toast.success("Profile updated successfully!", { id: toastId });
      setEdit(false);
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Failed to update profile.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  //  Projects 
  const handleChangeProject = (field: string, value: string) => {
    setNewProject((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddProject = async () => {
    if (!newProject.title || !newProject.description || !newProject.link) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Adding project...");

    try {
      // Add timestamp to the new project
      const projectWithTimestamp = {
        ...newProject,
        createdAt: Date.now(), // number timestamp
      };

      // Create a notification about the new project
      const newNotification = {
        type: "project_added",
        message: `New project "${newProject.title}" added!`,
        seen: false,
        timestamp: new Date(), // store as Date object
      };

      const updatedProjects = [...(user?.projects || []), projectWithTimestamp];
      const updatedNotifications = [...(user?.notifications || []), newNotification];

      const userDocRef = doc(db, "user", user.uid);
      await updateDoc(userDocRef, {
        projects: updatedProjects,
        notifications: updatedNotifications
      });

      setUser((prev: any) => ({
        ...prev,
        projects: updatedProjects,
        notifications: updatedNotifications
      }));

      toast.success("Project added!", { id: toastId });
      setShowModal(false);
      setNewProject({ title: "", description: "", link: "" });

    } catch (error) {
      console.error("Error adding project:", error);
      toast.error("Failed to add project.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  //  Notifications 
  const markNotificationsAsSeen = async () => {
    if (user?.uid && user?.notifications?.some((n: any) => !n.seen)) {
      const updatedNotifications = user.notifications.map((n: any) => ({
        ...n,
        seen: true,
      }));

      try {
        const userDocRef = doc(db, "user", user.uid);
        await updateDoc(userDocRef, { notifications: updatedNotifications });

        setUser((prev: any) => ({
          ...prev,
          notifications: updatedNotifications,
        }));
      } catch (error) {
        console.error("Error marking notifications as seen:", error);
      }
    }
  };

  // HANDLE LOG OUT 
  const handleLogOutUser = async () => {
    try {
      await signOut(auth)
      toast.success("Signed out successfully");
    } catch (error) {
      console.error("Logout Failed:", error);
      toast.error("Unable to sign out. Please try again.");
    }
  }

  return {
    user,
    edit,
    setEdit,
    newProject,
    showModal,
    setShowModal,
    loading,
    handleChange,
    handleUpdateUser,
    handleChangeProject,
    handleAddProject,
    handleLogOutUser,
    markNotificationsAsSeen
  };
};
