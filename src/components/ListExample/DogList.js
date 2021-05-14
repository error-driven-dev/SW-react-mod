import React from "react"
import { Dog } from "./Dog"
import { dogs } from "../../data/dogData"
import "./DogList.css"

export const DogList = () => {
  return (
    <>
      {dogs.map((dog) => (
        <div className='card'>
          <Dog name={dog.name} age={dog.age}></Dog>
        </div>
      ))}
    </>
  )
}
