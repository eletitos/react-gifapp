import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs.js', () => {
    
    test('Debe retornar un array de gifs', async() => {
        
        const gifs = await getGifs('elena');
        console.log(typeof gifs);

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })

    });

});