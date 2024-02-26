import '../../assets/css/Events.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
const Events = () => {
    return (
        <div className="card-container">
            <div className="card">
                <h2>Birthday Event</h2>
                <p>Plan the perfect birthday celebration for your loved ones.</p>
                <Link to='/eventhub/user/booking'><div className="btn">Book Now</div></Link>
            </div>

            <div className="card">
                <h2>Marriage Event</h2>
                <p>Celebrate your special day with our expert event planning services.</p>
                <a href="#" className="btn">Book Now</a>
            </div>

            <div className="card">
                <h2>Party Event</h2>
                <p>Host an unforgettable party with our event management expertise.</p>
                <a href="#" className="btn">Book Now</a>
            </div>

            <div className="card">
                <h2>House Warming</h2>
                <p>Welcome friends and family to your new home with a memorable housewarming event.</p>
                <a href="#" className="btn">Book Now</a>
            </div>

            <div className="card">
                <h2>Friends Reunion</h2>
                <p>Reconnect and reminisce with old friends at a reunion event organized just for you.</p>
                <a href="#" className="btn">Book Now</a>
            </div>
        </div>
    );
}

export default Events;
