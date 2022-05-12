import { useState, useEffect } from 'react';
import { getRestaurants } from './services/fetch-utils';
import Restaurant from './Restuarant';

export default function ListPage() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    async function fetch() {
      const fetchedRestaurants = await getRestaurants();

      setRestaurants(fetchedRestaurants);
    }
    
    fetch();
  }, []);
  return (
    <div className='list restaurants'>
      { restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant}/>)}
    </div>
  );
}