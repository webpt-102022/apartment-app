import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function ApartmentDetail() {
  const { apartmentId } = useParams();
  const [apartment, setApartment] = useState({});

  const getApartment = async () => {
    try {
      const response = await axios.get(`https://ironbnb-m3.herokuapp.com/apartments/${apartmentId}`);
      setApartment(response.data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getApartment();
  }, [])

  return (
    <div>
      <h1>{apartment.title}</h1>
      <p>Price per day: {apartment.pricePerDay} $</p>
      <img width="200px" src={apartment.img} alt={apartment.title} />
    </div>
  )
}
