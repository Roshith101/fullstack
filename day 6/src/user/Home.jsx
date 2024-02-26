/* eslint-disable react/no-unescaped-entities */
import '../../assets/css/Home.css'
import Event_Home from '../../assets/images/home_event.jpeg';
import Home_Wedding from '../../assets/images/home_wedding.jpg'

const Home = () => {
  return (
    <div className='home_box'>
    <div className='box1'>
    <div className='desc'>
    <h1>Welcome to EventHub: Your Ultimate Event Planning Platform</h1>
    <p>Are you ready to transform your events from ordinary to extraordinary? Look no further than EventHub, 
    your one-stop destination for seamless event planning. 
    Whether you're organizing a corporate conference, a wedding, a birthday bash, 
    or a community fundraiser, EventHub has you covered.</p>
    <button type='submit'>SIGNUP FOR FREE</button>
    </div>
    <div className="image">
    <img src={Event_Home}/>
    </div>
    </div>
    <div className='box1'>
    <div className='desc'>
    <h1>Wedding Planner</h1>
    <p>we specialize in crafting dream weddings that exceed expectations and leave lasting memories. 
        With our team of experienced wedding planners, 
        we're dedicated to turning your vision into reality and 
        ensuring every detail of your special day is perfect.</p>
    <button type='submit'>WEDDING EVENT</button>
    </div>
    <div className="image">
    <img src={Home_Wedding}/>
    </div>
    </div>
    </div>
  );
};



export default Home;
