import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function NewApartment() {
  const navigate = useNavigate();
  const [apartment, setApartment] = useState({
    title: '',
    img: '',
    pricePerDay: 0
  })
  //const [error, setError] = useState(null);

  const handleChange = (e) => {
    setApartment(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title: apartment.title,
      img: apartment.img,
      pricePerDay: parseInt(apartment.pricePerDay)
    }
    // if (!apartment.title || !apartment.img || !apartment.pricePerDay) {
    //   setError('Please fill all the fields before submitting')
    // } 
    try {
      const response = await axios.post('https://ironbnb-m3.herokuapp.com/apartments', body);
      navigate(`/apartments/${response.data._id}`)
      // navigate('/');
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h2>New apartment information</h2>
      <form onSubmit={handleSubmit}>
        <label>Apartment's title</label>
        <input type="text" name="title" value={apartment.title} onChange={handleChange} required />
        <label>Apartment's image</label>
        <input type="text" name="img" value={apartment.img} onChange={handleChange} required />
        <label>Apartment's price per day</label>
        <input type="number" name="pricePerDay" value={apartment.pricePerDay} onChange={handleChange} required />
        <button type="submit">Create new apartment</button>
      </form>
    </div>
  )
}
