import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { auth, db, googleProvider } from "../firebase";

export const HandleRegisteration = async (formdata: any) => {
  const {
    username,
    name,
    email,
    password,
    phone,
    dob,
    gender,
    address,
    wallet,
    balance,
    transactions,
    tipsReceived,
    tippers,
    devType,
    bio,
    techStacks,
    twitter,
    github,
    projects,
    status,
    notifications
  } = formdata;

  try {
    const userCresidentials = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCresidentials.user;

    // Add a default welcome notification
    const initialNotifications: Notification[] = [
      {
        type: "welcome",
        message: `Welcome ${name || username}! Your account has been successfully created, Kindly set up your Profile.`,
        seen: false,
        timestamp: new Date(),
      },
      ...(notifications || []),
    ];

    // setting user details to db
    await setDoc(doc(db, 'user', user.uid), {
      username,
      name,
      email,
      phone,
      dob,
      gender,
      address,
      wallet,
      balance,
      transactions,
      tipsReceived,
      tippers,
      devType,
      bio,
      techStacks,
      twitter,
      github,
      projects,
      status,
      notifications: initialNotifications,
      createdAt: new Date()
    });

    toast.success("User Registered Successfully");
    return user;

  } catch (error) {
    console.error('Registeration Failed:', error);
    toast.error("User Registeration Failed !!");
    throw error;
  }
}



export const HandleLogin = async (formDataLogin: any) => {
  const { email, password } = formDataLogin;

  try {
    await signInWithEmailAndPassword(auth, email, password)
    toast.success("Login Successfully");
  } catch (error) {
    console.error('Login Failed:', error);
    toast.error("Login Failed(Invalid email or Password)");
    throw error;
  }
}


export const HandleGoogleAuthentication = async (formdata: any) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    if (user) {
      const userRef = doc(db, "user", user.uid);
      const userSnap = await getDoc(userRef);

      // Extract your fields from formdata
      const {
        username,
        name,
        email,
        phone,
        dob,
        gender,
        address,
        wallet,
        balance,
        transactions,
        tipsReceived,
        tippers,
        devType,
        bio,
        techStacks,
        twitter,
        github,
        projects,
        status,
        notifications,
      } = formdata;

      // Prepare payload
      const userData = {
        username: username || user.displayName?.split(" ")[0] || "",
        name: name || user.displayName || "",
        email: email || user.email || "",
        phone: phone || "",
        dob: dob || "",
        gender: gender || "",
        address: address || "",
        wallet: wallet || [],
        balance: balance || 0,
        transactions: transactions || [],
        tipsReceived: tipsReceived || 0,
        tippers: tippers || [],
        devType: devType || "",
        bio: bio || "",
        techStacks: techStacks || [],
        twitter: twitter || "",
        github: github || "",
        projects: projects || [],
        status: status || "offline",
        notifications: notifications || [],
        photoURL: user.photoURL || "",
        createdAt: new Date()
      };

      // If user does not exist yet, create record with welcome notification
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          ...userData,
          notifications: [
            {
              type: "welcome",
              message: "Welcome! Your account has been successfully created. Kindly set up your Profile.",
              seen: false,
              timestamp: new Date(),
            },
          ],
        });
      } else {
        // Merge to update missing fields
        await setDoc(userRef, userData, { merge: true });
      }
    }

    toast.success("Signed in with Google");
    return user;
  } catch (error) {
    console.error("Google Sign-in Failed:", error);
    toast.error("Google Sign-in Failed!");
    throw error;
  }
};



export const ResetPassword = async (resetEmail: string) => {
  try {
    // Send reset email
    await sendPasswordResetEmail(auth, resetEmail);
    toast.success("Reset Email sent.");

    // Find the user by email in Firestore
    const userQuery = await getDocs(
      collection(db, "user")
    );

    userQuery.forEach(async (docSnap) => {
      const userData = docSnap.data();
      if (userData.email === resetEmail) {
        // Add a notification about password reset
        await updateDoc(doc(db, "user", docSnap.id), {
          notifications: arrayUnion({
            type: "password_reset",
            message: "A Password reset email was requested.",
            seen: false,
            timestamp: new Date()
          }),
        });
      }
    });
  } catch (error: any) {
    console.error("Reset Email Failed:", error);

    let errorMessage = "Failed to send reset email.";
    if (error.code === "auth/invalid-email") {
      errorMessage = "Invalid email address.";
    }
    toast.error(errorMessage);
    throw error;
  }
};
