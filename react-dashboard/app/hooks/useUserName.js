'use client'
import { useState, useEffect } from "react";

export function useUserName() {
    const [userName, setUserName] = useState("");
    const [isUserName, setIsUserName] = useState(false);

    useEffect(() => {
        checkUserName();
    }, []);

    const checkUserName = () => {
        const storedUserName = localStorage.getItem("username");
        console.log("Stored username:", storedUserName);

        if (!storedUserName) {
            console.log("Setting isUserName to false");
            setIsUserName(false);
        } else {
            console.log("Setting isUserName to true");
            setIsUserName(true);
            setUserName(storedUserName);
        }
    };

  const setNewUserName = (newUserName) => {
    setUserName(newUserName)
  };

  const submitInfo = (newUserName) => {
    localStorage.setItem('username', newUserName)
    checkUserName()
  }

 

  return { userName, isUserName, setNewUserName, submitInfo};
}

