import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
export const useToken = (jwtToken) => {
    const Navigate = useNavigate()
    useEffect(() => {
        const token = window.localStorage.getItem(jwtToken)
        if (!token) {
            Navigate("/login")
        }
    }, [])


} 