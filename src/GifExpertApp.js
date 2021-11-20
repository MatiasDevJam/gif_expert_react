import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ( defaultCategories = [] ) => {

    const [categories, setCategories] = useState( defaultCategories );

    /* // función para agregar un nuevo elemento
    const HandlerAdd = () => {
        // setCategories([ 'Casa', ...categories]);
        setCategories( cats => [...cats, 'Casa']);
    } */



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />

            <hr />

            <ol>
                {
                    // le pasamos la categoria que viene de GifGrid
                    categories.map( category =>(
                        <GifGrid 
                            key={ category }
                            category={ category } />
                    ) )
                }
            </ol>

        </>)
}

export default GifExpertApp