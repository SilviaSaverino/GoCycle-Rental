export async function getGalleryImages() {
    const res = await fetch("/api/galleries")
    const data = await res.json()
    return data.galleries
}

