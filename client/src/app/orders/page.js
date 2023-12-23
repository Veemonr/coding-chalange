'use server'
import OrderListTitle from "../comps/OrderListTitle"
import DeleteButton from "../comps/DeleteButton"
import ButtonEdit from "../comps/ButtonEdit" 
import { changeDateLocal } from "../../../helpers/helpers"

async function getData() {
    const res = await fetch("http://localhost:8080/orders", { 
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

export default async function page() {
    const orders = await getData()
    console.log(orders)

    return (
        <>
            <OrderListTitle />
            <div className="card_place">
                {orders.map(order =>
                    <div key={order.id}> 
                        {console.log(order.image)}
                        <h1>Order No {order.id}</h1>
                        <h3>Order Date = {changeDateLocal(order.order_date)}</h3>
                        <h3>Pickup Date = {changeDateLocal(order.pickup_date)}</h3>
                        <h3>Dropoff Date = {changeDateLocal(order.dropoff_date)}</h3>
                        <h3>Pickup Location = {order.pickup_location}</h3>
                        <h3>Dropoff Location = {order.dropoff_location}</h3>
                        <h3>Car Name = {order.Car.car_name}</h3>
                        <DeleteButton name="Delete" typeData="orders" id={order.id} />
                        <ButtonEdit id={order.id} typeData="orders" name="Edit" />
                    </div>
                )}
            </div>
        </>
    )
}
