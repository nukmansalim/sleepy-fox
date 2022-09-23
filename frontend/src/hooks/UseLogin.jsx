import { useState } from "react";
import axios from "axios";

export const UseLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const login = async (username, email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await axios.post('http://localhost:8080/auth/login', {
            username,
            email,
            password
        }, {
            headers: { "Content-Type": "application/json" }
        })
        if (response) {
            console.log(response)
            setIsLoading(false)
        }
    }

    return { login, error, isLoading }
}