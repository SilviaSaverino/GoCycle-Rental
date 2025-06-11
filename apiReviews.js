export async function getReviews() {
    const res = await fetch("/api/reviews")
    if (!res.ok) {
        throw {
            message: "Failed to fetch reviews data", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.reviews
}

