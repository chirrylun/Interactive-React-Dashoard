'use client'
import { useState, useEffect } from "react";

export default function useUserName() {
  const [userName, setUserName] = useState("");
  const [isUserName, setIsUserName] = useState(false);

  useEffect(() => {
    checkUserName();
  }, []);

  const checkUserName = () => {
    const storedUserName = localStorage.getItem("username");

    if (!storedUserName) {
      setIsUserName(true);
    } else {
      setIsUserName(true);
      setUserName(storedUserName);
    }
  };

  const setNewUserName = (newUserName) => {
    localStorage.setItem("username", newUserName);
    checkUserName();
  };

  return { userName, isUserName, setNewUserName };
}
