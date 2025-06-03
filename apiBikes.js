export async function getBicycles() {
    const res = await fetch("/api/bicycles")
    if (!res.ok) {
        throw {
            message: "Failed to fetch bikes", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.bicycles
}

