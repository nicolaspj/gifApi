import { fireEvent, render , screen} from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Prueba AddCategory', () => { 
    test('debe de cambiar el valor de la caja de texto ', () => { 
        
        
    
        render( <AddCategory  onNewCategory = {() => {}}/>)
        const envio = screen.getByRole('textbox');
       
        fireEvent.input( envio , { target: {value : 'lo'} })
        expect( envio.value ).toBe('lo')
        //screen.debug();
    })

    
 })

