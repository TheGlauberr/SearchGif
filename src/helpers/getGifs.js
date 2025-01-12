

export const getImages = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=2rjxeaSGjbbJrr1KSOnftrUG5LpyERPd&q=${category}&limit=6`;
    const response = await fetch( url );
    const {data} = await response.json();
    const gifs = data.map(img =>({
        id: img.id,
        title:  img.title,
        url: img.images.downsized_medium.url
    }));
    //console.log(gifs);
    return gifs;
}