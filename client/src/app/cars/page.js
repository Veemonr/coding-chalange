'use server'
import CarListTitle from "../comps/CarListTitle"
import DeleteButton from "../comps/DeleteButton"
import ButtonEdit from "../comps/ButtonEdit" 
import { formatUSD } from "../../../helpers/helpers"

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

export default async function page() {
    const cars = await getData()

    return (
        <>
            <CarListTitle />
            <div className="card_place">
                {cars.map(car =>
                    <div key={car.id}> 
                        {console.log(car.image)}
                        <h1 key={car.id}>{car.car_name}</h1>
                        <img 
                            src={car.image}
                            width={400}
                            height={400}
                            alt={"Image of Car " + car.car_name} 
                        />
                        <h3>Day Rate = {formatUSD.format(car.day_rate)}</h3>
                        <h3>Month Rate = {formatUSD.format(car.month_rate)}</h3>
                        <DeleteButton typeData="cars" name="Delete" id={car.id} />
                        <ButtonEdit typeData="cars" id={car.id} name="Edit" />
                    </div>
                )}
            </div>
        </>
    )
}
