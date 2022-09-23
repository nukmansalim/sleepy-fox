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
            console.log(response)
            setIsLoading(false)
        }
        if (!response.ok) {
            setIsLoading(false)
            setError(response.data.message)
        }
    }

    return { login, error, isLoading }
}