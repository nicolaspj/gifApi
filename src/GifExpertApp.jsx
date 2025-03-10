import  { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ '' ])//inicializamos useState como arreglo
    
    const onAddCategory = (newCategory ) => {
        //console.log(newCategory)

        if( categories.includes(newCategory) )return; //para que no se reingrese el mismo valor 
        setCategories( [  newCategory, ...categories] )
        //ingresamos un nuevo valor (categoria) al array
    }

    return (
    <>
    {/* titulo */}
    <h1>ExpertApp</h1>
    {/* input */}
    <AddCategory 
        onNewCategory = { onAddCategory }
    />
    {/* listado de gif */}
 
    { 
        categories.map( (category) => (
             (
                <GifGrid 
                key= { category }
                category = { category }
                 />
            )
        ) ) 
    }
        

       
        
    </>
  )
}
