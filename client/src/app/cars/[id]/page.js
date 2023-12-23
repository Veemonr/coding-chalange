"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page({ params }) {
  const initialInput = {
    car_name: "",
    day_rate: "",
    month_rate: "",
    image: "",
  };
  const router = useRouter();
  const { id } = params

  const [inputForm, setInputForm] = useState(initialInput);

  function inputFormHandler(event, dataType) {
    const dataChange = event.target.value;
    setInputForm((inputForm) => {
      return { ...inputForm, [dataType]: dataChange };
    });
  }

  async function fetchDataById() {
    try {
      const { data } = await axios(`http://localhost:8080/cars/${id}`)
      setInputForm(data)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchDataById()
  }, [])

  async function submitForm() {
    try {
      event.preventDefault();
      console.log(inputForm);
      await axios({
        method: "put",
        url: `http://localhost:8080/cars/${id}`,
        data: inputForm,
      });
      router.push("/cars");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1> Edit Car</h1>
      <form className="form" onSubmit={submitForm}>
        <label>Car Name</label>
        <input
          onChange={(event) => inputFormHandler(event, "car_name")}
          value={inputForm.car_name}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
        />
        <label>Day Rate</label>
        <input
          onChange={(event) => inputFormHandler(event, "day_rate")}
          value={inputForm.day_rate}
          type="text"
          className="form-control"
        />
        <label>Month rate</label>
        <input
          onChange={(event) => inputFormHandler(event, "month_rate")}
          value={inputForm.month_rate}
          type="text"
          className="form-control"
        />
        <label>Image</label>
        <input
          onChange={(event) => inputFormHandler(event, "image")}
          value={inputForm.image}
          type="text"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
