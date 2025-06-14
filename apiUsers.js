export async function getUserInfo() {
    const res = await fetch("/api/user")
    if (!res.ok) {
        throw {
            message: "Failed to fetch user data", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.users
    
}

