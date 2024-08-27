"use client";
import { useState, useEffect } from "react";
import { useUserCheck } from "./useUserCheck";

export function useUserDetails() {
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  const {isUser} = useUserCheck()

  useEffect(() => {
    refreshDetails;
  }, [isUser]);

  const refreshDetails = () => {
    const storedName = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("useremail");

    setUserDetails({
      name: storedName || "",
      email: storedEmail || "",
    });
  };

  const updateUserDetails = (field, value) => {
    console.log("field", field, "value", value);
    setUserDetails((prev) => ({ ...prev, [field]: value }));
  };

  return { userDetails, updateUserDetails, refreshDetails };
}
