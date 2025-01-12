import { useEffect, useState } from "react";
import { getImages } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
  
    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const imagesMap= async () =>{
        const imageValues = await getImages(category);
        setimages(imageValues);
        setisLoading(false);
    }

    useEffect(()=>{
        imagesMap();
    },[])

    return {
        images: images,
        isLoading: isLoading
    }
}
