import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import CardRecident from './components/CardRecident'
import LocationInfo from './components/LocationInfo'





function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')
 

  useEffect(() => {
    let numberLocation
if (searchInput === '') {
  numberLocation = Math.floor(Math.random() * (126- 1) + 1) 
} else {
  numberLocation = searchInput
} 
const Url = `https://rickandmortyapi.com/api/location/${numberLocation}`
axios.get(Url)
.then(res => setLocation(res.data) )
.catch(err => console.log(err))
  }, [searchInput])
  
const handleSubmit = e => {
  e.preventDefault()
  setSearchInput(e.target.search.value)
}


 
  





  return (
    <div className="App">
      <div className='div-header'>
   <div className='div-img'>
    <img className='img' src="/image2.png" alt="" />
   </div>
   <form className='form' onSubmit={handleSubmit} autoComplete='off'>
    <input className='input' id='search' type="text" placeholder='type a location id'/>
    <button className='button'>search</button>
   </form>
      </div>

   <LocationInfo location={location}/>
   <div className='card-container'>
    {
      location?.residents.map(url => (
       <CardRecident 
       key={url}
       url={url}
       /> 
      ))
    }
   </div>
   
    </div>
  )
}

export default App
