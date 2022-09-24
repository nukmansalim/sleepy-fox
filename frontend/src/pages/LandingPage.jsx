import React from 'react'
import TheNavbar from '../components/TheNavbar'
import { useState, useEffect } from 'react'
import TheHero from ".././components/TheHero"
import axios from "axios"
import ArticleList from '../components/ArticleList'
function LandingPage() {
    const [UserData, setUserData] = useState(null)
    const token = localStorage.getItem("auth")

    useEffect(() => {
        if (token) {
            axios.post("http://localhost:8080/auth/getme",
                {
                    auth: token
                }
            ).then(response => setUserData(response.data.UserData))
        }
    }, [])





    return (
        <>
            <TheNavbar user={UserData} />
            <TheHero />
            <ArticleList />
        </>
    )
}

export default LandingPage