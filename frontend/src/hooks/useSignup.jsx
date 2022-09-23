import React from 'react'
import axios from 'axios'
import { useState } from 'react'
export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const signup = async (username, email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await axios.post('http://localhost:8080/auth/register',
            JSON.stringify(
                {
                    username,
                    email,
                    password
                }),
            { headers: { 'Content-Type': "application/json" } })
        if (response) {
            console.log(response)
            setIsLoading(false)
            setError(response.error)
        }
        if (!response.ok) {
            setIsLoading(false)
            setError(response.data.message)
        }
    }
    return { signup, isLoading, error }
}
