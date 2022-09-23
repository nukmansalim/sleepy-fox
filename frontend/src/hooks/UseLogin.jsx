import { useState } from "react";
import axios from "axios";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const login = async (username, email, password) => {
        setIsLoading(false)
        setError(null)

        const response = await axios.post('http://localhost:8080/auth/login', JSON.stringify(
            {
                username,
                email,
                password
            }), {
            headers: { "Content-Type": "application/json" }
        })
        if (response) {
            setError(null)
            setIsLoading(false)
        }
        if (!response.ok) {
            setIsLoading(false)
            setError(response.data.message)
        }
        if (response.data.auth) {
            window.localStorage.setItem("auth", response.data.token)
        }

    }

    return { login, error, isLoading }
}