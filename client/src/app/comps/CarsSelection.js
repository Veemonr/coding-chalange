// 'use server'
import axios from "axios"

async function getData() {
    const res = await fetch("http://localhost:8080/cars", { 
        cache: "no-store"
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function CarsSelection() {
    const cars = await getData()
    return (
        <>
            {cars.map(car => <select key={car.id} value={car.id}>{car.car_name}</select>)}
        </>
    )
}
