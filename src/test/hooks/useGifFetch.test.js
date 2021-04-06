import { useGifFetch } from '../../hooks/useGifFetch';

import { renderHook } from '@testing-library/react-hooks';

describe('Test to useGifFetch customHook', () => {
    
    test('should get data of category - useGifFetch', () => {
        
        const category = 'Messi';

        const { result } = renderHook( () => useGifFetch( category ));
         
        const { data, loading } = result.current;

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
        
    });
   
    test('should return img and loading in true',  async() => {
        
        const category = 'Messi';

        const { result, waitForNextUpdate } = renderHook( () => useGifFetch( category ));

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toEqual(10);
        expect( loading ).toBe(false);

    });
    
});
