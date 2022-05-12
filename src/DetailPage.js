import { useState, useEffect } from 'react';
import { getRestaurantById, updateRestaurant } from './services/fetch-utils';
import { useHistory, useRouteMatch, useParams } from 'react-router-dom';

export default function DetailPage() {
  const [restaurant, setRestaurant] = useState({});
  const match = useRouteMatch();
  const { push } = useHistory();
  const [Name, setName] = useState('');
  const [Genre, setGenre] = useState('');
  const [Price, setPrice] = useState('');
  const [Size, setSize] = useState('');
  const [Atmosphere, setAtmosphere] = useState('');
  const { id } = useParams();
  useEffect(() => {
    async function fetch() {
      const restaurantResponse = await getRestaurantById(match.params.id);
      setRestaurant(restaurantResponse);
    }
    fetch();
  }, [match]);

  async function handleSubmit(e) {
    e.preventDefault();
    await updateRestaurant({
      Name,
      Genre,
      Price,
      Size,
      Atmosphere,
      params: id
    });

    push('/restaurants');
  }

  return (
    <div className='create'>
      <h1>{restaurant.Name}</h1>
      <h2>A {restaurant.Genre} Restaurant with a {restaurant.Size} dining area</h2>
      <h3>With menu items in the {restaurant.Price} price range</h3>
      <h3>Boasting a pleasant {restaurant.Atmosphere} dining mood</h3>


      <form onSubmit={handleSubmit}>
        <h2>Update restaurant</h2>
        <label>
            Restaurant Name
          <input required name='name' onChange={e => setName(e.target.value)}/>
        </label>
        <label>
            Restaurant Genre
          <select required onChange={e => setGenre(e.target.value)}>
            <option>American</option>
            <option>Mexican</option>
            <option>Chinese</option>
            <option>Thai</option>
            <option>Japanese</option>
            <option>Indian</option>
            <option>Soul</option>
          </select>
        </label>
        <label>
          <input required name='price' onChange={e => setPrice(e.target.value)}/>
        </label>
        <label>
            Restaurant Seating Size (ex: large, small, spacious etc)
          <input required name='size' onChange={e => setSize(e.target.value)}/>
        </label>
        <label>
          <input required name='Atmosphere' onChange={e => setAtmosphere(e.target.value)}/>
        </label>
        <button>Create Restaurant</button>
      </form>
    </div>
  );
}