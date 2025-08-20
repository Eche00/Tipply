import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

// Fetching projects
export const useDevProjectDatas = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsersWithProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "user"));
        const allProjects: any[] = [];

        querySnapshot.forEach((doc) => {
          const userData = doc.data();

          if (userData.projects && userData.projects.length > 0) {
            userData.projects.forEach((project: any) => {
              allProjects.push({
                ...project,
                username: userData.username || "unknown",
                name: userData.name || "Anonymous",
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
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchUsersWithProjects();
  }, []);

  return { projects, searchTerm, setSearchTerm };
};
