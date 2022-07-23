import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";


//esto es un componente. 
const GifGrid = ( {category} ) => {   

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then((value) => setImages(value))
    }, [])
   
    

    return (
        <>
            <h3> { category  } </h3> 
            <div className="card-grid">
                {images.map((image) =>(
                    <GifItem 
                        key={image.id} 
                        {...image} //Con esto se esparcen las properties
                    />
                ))}
            </div>    
        </>
    );
}

export default GifGrid;
