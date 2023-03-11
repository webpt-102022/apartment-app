import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [apartments, setApartments] = useState([]);

  const getApartments = async () => {
    try {
      const response = await axios.get('https://ironbnb-m3.herokuapp.com/apartments');
      setApartments(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getApartments();
  }, []);

  return (
    <div>
      <h1>Apartments</h1>
      {apartments.map(elem => {
        return (
          <div key={elem._id}>
            <h2>{elem.title}</h2>
            <Link to={`/apartments/${elem._id}`}>See apartment</Link>
          </div>
        )
      })}
    </div>
  )
}
