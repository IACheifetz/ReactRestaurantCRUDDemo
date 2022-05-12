import { Link } from 'react-router-dom';

export default function Restaurant({ restaurant }) {
  return (
    <Link to={`/restaurants/${restaurant.id}`}>
      <div className='restaurant'>
        <h3>{restaurant.Name}</h3>
        <p>A {restaurant.Genre} restaurant</p>
        <p>Spending Range: {restaurant.Price}</p>
        <p>Seating Availability: {restaurant.Size}</p>
        <p>Dining Atmosphere: {restaurant.Atmosphere}</p>
      </div>
    </Link>
  );
}