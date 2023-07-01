
import './App.css'
import Card from './components/Card'
import  people from "./data/people.js";


function App() {
  
  let names = [];
  people.forEach(item => {
    names.push(<Card item={item}/>);
  });
  return (
    <>
    {names}
    </>
  )
}

export default App
