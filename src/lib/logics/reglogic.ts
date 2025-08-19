import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { auth, db, googleProvider } from "../firebase";

export const HandleRegisteration = async (formdata: any) => {
  const { username, name, email, password, phone, dob, gender, address, wallet, devType, bio, techStacks, twitter, github, projects } = formdata;

  try {
    const userCresidentials = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCresidentials.user;

    // setting user details to db
    await setDoc(doc(db, 'user', user.uid), {
      username, name, email, phone, dob, gender, address, wallet, devType, bio, techStacks, twitter, github, projects
    })
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
        password,
        phone,
        dob,
        gender,
        address,
        wallet,
        devType,
        bio,
        techStacks,
        twitter,
        github,
        projects,
      } = formdata;

      // Prepare payload
      const userData = {
        username: username || user.displayName?.split(" ")[0] || "",
        name: name || user.displayName || "",
        email: email || user.email || "",
        password: password || "", // optional: may not store plain password
        phone: phone || "",
        dob: dob || "",
        gender: gender || "",
        address: address || "",
        wallet: wallet || "",
        devType: devType || "",
        bio: bio || "",
        techStacks: techStacks || [],
        twitter: twitter || "",
        github: github || "",
        projects: projects || [],
        photoURL: user.photoURL || "",
      };

      // If user does not exist yet, create record
      if (!userSnap.exists()) {
        await setDoc(userRef, userData);
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
    await sendPasswordResetEmail(auth, resetEmail);
    toast.success("Reset Email sent.");
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
