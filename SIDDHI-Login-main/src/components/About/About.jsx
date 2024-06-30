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
        <h1>About Us</h1>
        <p>Welcome to our Alzheimer's Detection Interface. This innovative tool has been developed by a dedicated team of students with the aim of providing a simple and effective way to screen for Alzheimer's disease using EEG recordings.</p>

        <h2>Our Mission</h2>
        <p>Our mission is to leverage technology to aid in the early detection of Alzheimer's disease, making it accessible and convenient for healthcare providers and patients alike. By utilizing advanced machine learning algorithms, we strive to deliver accurate and reliable results.</p>

        <h2>How It Works</h2>
        <p>The Alzheimer's Detection Interface is designed to be user-friendly and efficient. Here's how it works:</p>
        <ul>
            <li><span class="underline">Upload an EEG Recording</span>: Simply upload an EEG recording of the patient in '.set' format.</li>
            <li><span class="underline">Get Results</span>: Once the EEG recording is uploaded, our system analyzes the data and determines if the patient is positive or negative for Alzheimer's disease. Along with the result, we provide confidence scores to indicate the reliability of the detection.</li>
            <li><span class="underline">View History</span>: You can view the history of all uploaded recordings. This includes the name of the file, the result, and the timestamp of when the analysis was performed. This feature allows for easy tracking and record-keeping.</li>
        </ul>
        </div>
        </div>
    )
}

export default About;
