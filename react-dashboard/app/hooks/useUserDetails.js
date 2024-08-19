'use client'
import { useState, useEffect } from "react";

export function useUserDetails() {
    const [userDetails, setUserDetails] = useState({name: "", email: ""})
    const [isUserName, setIsUserName] = useState(false);

    useEffect(() => {
        const storedName = localStorage.getItem("username")
        const storedEmail = localStorage.getItem("useremail")

        setUserDetails({
          name: storedName || "",
          email: storedEmail || ""
        })

        setIsUserName(!!storedName)
        
    }, []);

    
  const updateUserDetails = (field, value) => {
    setUserDetails(prev => ({...prev, [field] : value}))
  }

  

 

  return { userDetails, isUserName, updateUserDetails};
}

