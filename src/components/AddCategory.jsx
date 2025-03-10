import { useState } from "react"

 

export const AddCategory = ({ onNewCategory }) => {
    const [ inputValue , setInputValue ] = useState( 'One' )    

    const onInputChange = ({ target }) => {
        console.log(target.value);
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
         event.preventDefault(); 
         if(inputValue.trim().length <= 1) return; //para que ingrese un caracter y no ingrese vacio 
        // setCategories( categories => [ inputValue , ...categories ] )
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit } >
            <input 
                
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
)
}
