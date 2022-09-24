import { useState } from "react";

export const useLogout = () => {
    function logout(data) {
        localStorage.removeItem(data)
        window.location.reload()
    }

    return { logout }
}