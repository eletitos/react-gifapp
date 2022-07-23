import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";


//esto es un componente. 
const GifGrid = ( {category} ) => {   

    const{ images, isLoading } = useFetchGifs( category );
    

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
