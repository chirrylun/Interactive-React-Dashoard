import React, { useEffect } from "react";

export function useRefreshList() {
    const {refreshList} = useRefreshList()
    useEffect(()=> {
        refreshList()
    }, [])

    
}

