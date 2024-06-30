import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './History.css';
import axios from 'axios';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/history', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setHistory(res.data);
    };

    fetchHistory();
  }, []);

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
      <div className='wrapperh'>
        <table>
          <thead>
            <tr>
              <th>Filename</th>
              <th>Result</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index}>
                <td>{entry.filename}</td>
                <td>{entry.result}</td>
                <td>{entry.date}</td>
                <td>{entry.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
