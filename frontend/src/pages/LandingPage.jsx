import React from 'react'
import TheNavbar from '../components/TheNavbar'
import { useState } from 'react'
import TheHero from ".././components/TheHero"
import axios from "axios"
import ArticleList from '../components/ArticleList'
function LandingPage() {
    const [UserData, setUserData] = useState(null)
    const token = localStorage.getItem("auth")

    if (token) {
        const getUserData = async () => {
            const response = await axios.post("http://localhost:8080/auth/getme",
                {
                    auth: token
                }
            )
            if (response) {
                setUserData(response.data.UserData)
            }
        }
        getUserData()
    }



    return (
        <>
            <TheNavbar user={UserData} />
            <TheHero />
            <ArticleList />
        </>
    )
}

export default LandingPage