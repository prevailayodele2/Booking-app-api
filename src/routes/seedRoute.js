import express from 'express'
import Hotel from '../models/Hotel.js';
import { HotelData } from '../data.js';

const SeedRoute = express.Router()

SeedRoute.get('/', async (req, res) => {
    await Hotel.deleteMany({})
    const  createdHotel = await Hotel.insertMany(HotelData);
    
    res.send({createdHotel})
})

export default SeedRoute