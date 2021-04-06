
import { getGifs } from '../../helpers/getGif';


describe('Test of getGifs Helpers', () => {
    
    test('should get 10 element', async() => {
        
        const category = 'Barcelona';

        const gifs = await getGifs( category );

        expect( gifs.length ).toBe( 10 );
    });

    test('should get 10 element', async () => {
        

        const gifs = await getGifs('');
        
        expect( gifs.length ).toBe( 0 );
    });

    
})

