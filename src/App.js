import logo from "./logo.svg"
import "./App.css"
import { Greeting } from "./components/Greeting"
import { DogList } from "./components/ListExample/DogList"

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Greeting></Greeting>
        <DogList></DogList>
      </header>
    </div>
  )
}

export default App
