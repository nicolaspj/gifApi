import { render, screen } from '@testing-library/react'
import { GiftItem } from '../../src/components/GiftItem'


describe('Test GifItem', () => {
    const title = 'DBZ';
    const url = 'https://damndemo.com.ar/favicon.jpg'


    test('Debe enviar title y url + snapshot', () => {


        const { container } = render(<GiftItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })


    test('debe mostrar la imagen con el URL y el ALT inidicado', () => {
        render(<GiftItem title={title} url={url} />)
        //screen.debug();
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title + "?");


    })

    test('Debe mostrar el titulo en el componente', () => {
        render(<GiftItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy();
    })
})