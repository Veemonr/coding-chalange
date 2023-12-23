'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import axios from "axios"
import CarsSelection from "@/app/comps/CarsSelection"

export default function page() {
    const initialInput = {
        car_id: "",
        order_date: "",
        pickup_date: "",
        dropoff_date: "",
        pickup_location: "",
        dropoff_location: "",
    }
    const router = useRouter()
    const [ inputForm, setInputForm ] = useState(initialInput)
    const [ carsData, setCarsData ] = useState([])
    function inputFormHandler(event, dataType) {
        const dataChange = event.target.value
        setInputForm((inputForm) => {
            return { ...inputForm, [dataType]: dataChange}
        })
    }

    async function fetchCars() {
        try {
            const { data } = await axios("http://localhost:8080/cars")
            setCarsData(data)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchCars()
    }, [])

    async function submitForm() {
        try {
            event.preventDefault()
            console.log(inputForm)
            await axios({
                method: 'post',
                url: 'http://localhost:8080/orders',
                data: inputForm
              })
            router.push("/orders")

        } catch(err) {
            console.log(err)
        }
    }

    
    return (
        <>
        <h1> Add Order</h1>
        <form className="form" onSubmit={submitForm}>
          <label>Order Date</label>
          <input onChange={(event) => inputFormHandler(event, "order_date")} value={inputForm.order_date} type="date" className="form-control" id="exampleInputEmail1" />
          <label>Pickup Date</label>
          <input onChange={(event) => inputFormHandler(event, "pickup_date")} value={inputForm.pickup_date} type="date" className="form-control" />
          <label>Dropoff Date</label>
          <input onChange={(event) => inputFormHandler(event, "dropoff_date")} value={inputForm.dropoff_date} type="date" className="form-control" />
          <label>Pickup Location</label>
          <input onChange={(event) => inputFormHandler(event, "pickup_location")} value={inputForm.pickup_location} type="text" className="form-control" />
          <label>Dropoff Location</label>
          <input onChange={(event) => inputFormHandler(event, "dropoff_location")} value={inputForm.dropoff_location} type="text" className="form-control" />
          <label>Select Car</label>
          <select onChange={(event) => inputFormHandler(event, "car_id")} value={inputForm.car_id}>
            <option disabled value="">Select Car</option>
            {carsData.map(car => <option key={car.id} value={car.id}>{car.car_name}</option>)}
          </select>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </>
    )
}