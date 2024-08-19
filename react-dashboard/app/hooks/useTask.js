'use client'
import React, {useState, useEffect} from "react"

export function useTask () {
    const [taskCount, setTaskCount] = useState(0)

    return{taskCount, setTaskCount}
}