import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useUserInfo } from "./profileLogic";
import { askQwen } from "../../lib/openai/qwen";

export const useChatLogics = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { user } = useUserInfo();

  // 🔹 Real-time listener for messages
  useEffect(() => {
    const q = query(
      collection(db, "generalChat"),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  // 🔹 Handle send message + AI response
  const handleSend = async () => {
    if (!newMessage.trim()) return;

    if (!user) {
      alert("Please log in to chat");
      return;
    }

    // Save user message
    const userMsg = {
      uid: user.uid,
      username: user.username || "Guest",
      name: user.name || "Guest",
      text: newMessage,
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, "generalChat"), userMsg);

    // reset input
    const userInput = newMessage;
    setNewMessage("");

    try {
      // Get AI reply
      const aiText = await askQwen(userInput);

      const aiMsg = {
        uid: "tipply-ai",
        username: "Tipply AI",
        name: "Tipply AI",
        text: aiText,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "generalChat"), aiMsg);
    } catch (err) {
      console.error("AI reply error:", err);
    }
  };

  const filteredMessages = messages.filter(
    (msg) =>
      msg.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { messages, newMessage, setNewMessage, handleSend, setSearchTerm, filteredMessages };
};
