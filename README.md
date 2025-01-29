# GoCycle Rental

Notes:
- Using Mirage to mimic server requests etc https://miragejs.com/docs/getting-started/introduction/


## Gallery page:
- galleryImg.slice(0, divCount) takes the first 10 images from galleryImg (if there are that many) and returns a new array containing just those images.
- .map() iterates over that new array and creates a new <div> for each image.
- Each <div> has a unique key (based on the index i), and a dynamically generated class name (div1, div2, etc.), which is used in your CSS for styling the layout.
- Inside each <div>, an <img> tag is created with the src pointing to the imageUrl of the gallery item and alt text set to the name of the item.

![screenshot of gallery.jsx file](../GoCycle%20Rental/src/assets/img/readme/galleryCode.png)

