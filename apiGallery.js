export async function getGalleryImages() {
    const res = await fetch("/api/galleries")
    if (!res.ok) {
        throw {
            message: "Failed to fetch gallery images", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.galleries
}

