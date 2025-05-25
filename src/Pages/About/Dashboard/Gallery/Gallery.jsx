import React from "react"
import "./Gallery.css"
import { getGalleryImages } from "../../../../../apiGallery.js"

export default function Gallery() {
    const divCount = 10
    const [galleryImg, setGalleryImg] = React.useState([])
    const [loadingGalleryImg, setLoadingGalleryImg] = React.useState(false)

    React.useEffect(() => {
        async function fetchGalleryImages() {
            setLoadingGalleryImg(true)
            const data = await getGalleryImages()
            setGalleryImg(data)
            setLoadingGalleryImg(false)
        }
        fetchGalleryImages()
    }, [])

    const gallery = galleryImg.map(gallery => (
        <img src={gallery.imageUrl} alt={gallery.name} />
    ))

    if (loadingGalleryImg) {
        return <p className="loadingMessage">Loading gallery...</p>;
    }

    return (
        <>
            {galleryImg.length > 0 && (
                <>
                    {/* - galleryImg.slice(0, divCount) takes the first 10 images from galleryImg 
            (if there are that many) and returns a new array containing just those images.

            - .map() iterates over that new array and creates a new <div> for each image.

            - Each <div> has a unique key (based on the index i), and a dynamically generated class name 
            (div1, div2, etc.), which is used in your CSS for styling the layout.
            
            - Inside each <div>, an <img> tag is created with the src pointing to the imageUrl of the 
            gallery item and alt text set to the name of the item. */}
                    <div className="parent">
                        {galleryImg.slice(0, divCount).map((gallery, i) => (
                            <div key={i} className={`div${i + 1}`}>
                                <img className="gallery-img" src={gallery.imageUrl} alt={gallery.name} />
                            </div>
                        ))}
                    </div>
                    <button className="gallery-btn">Load more...</button>
                </>
            )}
        </>

    )
}   