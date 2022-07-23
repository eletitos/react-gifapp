import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
   
    const [categores, setCategories] = useState(['OnePunch']);
    
    const onNewCategory = (newCategory) => {
        if(categores.includes(newCategory)) return;
        setCategories([newCategory,...categores])
        
    }
    
    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input  */}
            <AddCategory 
                // setCategory={ setCategory } 
                onNewCategory={onNewCategory}
            />

            {/* Listado de Gif */}
            

            {categores.map( ( category ) => 
                (
                    <GifGrid 
                        key={category} 
                        category = {category}
                    />     
                )
            )}
           

        </>

        
    );
}

export default GifExpertApp;
