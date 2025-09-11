import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useUserInfo } from "./profileLogic";
import { askDeepSeek } from "../openai/deepseek";

export const useChatLogics = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { user } = useUserInfo();

  // 🔹 Real-time listener for messages
  useEffect(() => {
    const q = query(collection(db, "generalChat"), orderBy("createdAt", "asc"));

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

    const userMsg = {
      uid: user.uid,
      username: user.username || "Guest",
      name: user.name || "Guest",
      text: newMessage,
      createdAt: serverTimestamp(),
    };

    try {
      // Save user message
      await addDoc(collection(db, "generalChat"), userMsg);

      const userInput = newMessage;
      setNewMessage("");

      // Get AI reply
      const aiText = await askDeepSeek(userInput);

      const aiMsg = {
        uid: "tipply-ai",
        username: "Tipply AI",
        name: "Tipply AI",
        text: aiText,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "generalChat"), aiMsg);
    } catch (err) {
      console.error("Message send error:", err);
    }
  };

  // 🔹 Search filter
  const filteredMessages = messages.filter((msg) => {
    const text = msg.text?.toLowerCase?.() || "";
    const username = msg.username?.toLowerCase?.() || "";
    const name = msg.name?.toLowerCase?.() || "";
    return (
      text.includes(searchTerm.toLowerCase()) ||
      username.includes(searchTerm.toLowerCase()) ||
      name.includes(searchTerm.toLowerCase())
    );
  });

  return {
    messages,
    newMessage,
    setNewMessage,
    handleSend,
    setSearchTerm,
    filteredMessages,
  };
};
