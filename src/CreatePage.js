import { useState } from 'react';
import { createRestaurant } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const { push } = useHistory();
  const [Name, setName] = useState('');
  const [Genre, setGenre] = useState('');
  const [Price, setPrice] = useState('');
  const [Size, setSize] = useState('');
  const [Atmosphere, setAtmosphere] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    await createRestaurant({
      Name,
      Genre,
      Price,
      Size,
      Atmosphere,
    });

    push('/restaurants');
  }

  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <h2>Add restaurant</h2>
        <label>
            Restaurant Name
          <input required name='Name' onChange={e => setName(e.target.value)}/>
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
            Restaurant Price
          <input required name='Price' onChange={e => setPrice(e.target.value)}/>
        </label>
        <label>
            Restaurant Seating Size (ex: large, small, spacious etc)
          <input required name='Size' onChange={e => setSize(e.target.value)}/>
        </label>
        <label>
            Dining Mood
          <input required name='Atmosphere' onChange={e => setAtmosphere(e.target.value)}/>
        </label>
        <button>Create Restaurant</button>
      </form>
    </div>
  );
}