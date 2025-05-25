export async function getBicycles() {
    const res = await fetch("/api/bicycles")
    const data = await res.json()
    return data.bicycles
}

