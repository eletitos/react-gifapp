import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


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
            <ul>
                {images.map(({id, title}) =>(
                    <li key={id}>{title}</li>
                ))}
            </ul>    
        </>
    );
}

export default GifGrid;
