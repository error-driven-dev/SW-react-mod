import React from "react"
// CONDITIONAL RENDERING
export const Greeting = () => {
  let isMorning = new Date().getHours > 12
  console.log(new Date())
  let greetingElem = isMorning ? <h1>Good Morning</h1> : <h1>Good Evening</h1>
  return <div>{greetingElem}</div>
}
