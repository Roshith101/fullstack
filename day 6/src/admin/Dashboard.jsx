import '../../assets/css/dashboard.css';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div style={{ backgroundColor:'lightgreen'}}>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="stats">
          <div className="  stat">
            <h2>Current Users</h2>
            <p>100</p>
          </div>
          <div className="stat">
            <h2>Orders this week</h2>
            <p>50</p>
          </div>
          <div className="stat">
            <h2>Total revenue</h2>
            <p>50000</p>
          </div>
        </div>
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <br />
          <br />

          <ul>
            <li><Link to=''>User Registered : 189</Link></li>
            <br />
            <li><Link to=''>New order placed : 50 </Link></li>
            <br />
            <li><Link to =''>Product added : 24</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;