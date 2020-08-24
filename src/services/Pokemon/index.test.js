import axios from 'axios';
 
import PokemonService, {API }from './';
 
jest.mock('axios');
 
describe('PokemonService', () => {
  it('fetches successfully data from an API', async () => {
    const data = {data: []};
 
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
 
    await expect(PokemonService.find("ale")).resolves.toEqual(data);
 
    expect(axios.get).toHaveBeenCalledWith(
      `${API}?name=ale`,
    );
  });
 
});