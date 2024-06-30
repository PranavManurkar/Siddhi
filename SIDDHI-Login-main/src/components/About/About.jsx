import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="wrapper-top">
            <div className="nselect">
                <ul>
                    <li><Link to="/history">History</Link></li>
                    <li><Link to="/dashboard">Working</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
        <div className='wrapperf'>
            
        </div>
        </div>
    )
}

export default About;