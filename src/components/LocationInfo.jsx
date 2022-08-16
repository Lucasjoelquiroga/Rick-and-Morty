import React from 'react'

const LocationInfo = ({location}) => {

console.log(location)


  return (
   <article className='header-location'>
   
    <ul className='ul-location'>
        <li  className='item-location'><span>Name: </span>{location?.name}</li>
        <li  className='item-location'><span>Type: </span>{location?.type}</li>
        <li className='item-location'><span>Dimension: </span>{location?.dimension}</li>
        <li className='item-location'><span>Population: </span>{location?.residents.length}</li>
        
        
    </ul>
   </article>
  )
}

export default LocationInfo