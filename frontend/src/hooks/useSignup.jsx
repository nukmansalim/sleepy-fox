import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function useSignup() {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const signup = async (username, email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await axios.post('http://localhost:8080/auth/login',
            JSON.stringify(
                {
                    username,
                    email,
                    password
                }),
            { headers: { 'Content-Type': "application/json" } })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            console.log(json.data)
            setIsLoading(false)
            setError(null)
        }
    }
    return { signup, isLoading, error }
}

export default useSignup