'use client'
import axios from "axios"

async function deleteFunc(id, type) {
    try {
        await axios({
            method: "delete",
            url: `http://localhost:8080/${type}/${id}`,
          })
          console.log("test")
    } catch(err) {
        console.log(err)
    }
}

export default function DeleteButton({name, id, typeData}) {
    return ( <button onClick={() => deleteFunc(id, typeData) } className="button">{name}</button> )
}