import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../firebase";

export const previewLogic = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userDocRef = doc(db, "user", authUser.uid)
        const userDoc = await getDoc(userDocRef)
        const currentUser = userDoc.data()
        if (currentUser?.username === username) {
          navigate("/dashboard/profile");

        }

      }
    })
    return () => unsubscribe()
  }, [username])

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        if (!username) return;

        const q = query(collection(db, "user"), where("username", "==", username));
        const querySnapshot = await getDocs(q);


        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const data = userDoc.data();

          setUser({
            id: userDoc.id,
            ...data,
          });

        } else {
          console.log("No user found with this username.");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  return { user, loading }
}