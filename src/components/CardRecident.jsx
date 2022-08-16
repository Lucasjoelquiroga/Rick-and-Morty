import React from 'react'

import useFetch from '../hooks/useFetch'

const CardRecident = ({url}) => {

  const resident  = useFetch(url)

 

  return (
    <article className='card'>
        <header className='card-header'>
            <img src={resident?.image} alt={`image of ${resident?.name}`} />

            <div className='circle'>
                <div className='circle-rojo'>🔴</div>

            <span>{resident?.status}</span>
            </div>
        </header>
        <div className='card-contents'>
            <h2 className='card-name'>{resident?.name}</h2>
            <hr />
            <ul className='card-atributo'>
                <li  className='card-description'><span className='span'>Species:</span>{resident?.species}</li>
                <li className='card-description'><span className='span'>Origin:</span>{resident?.origin.name}</li>
                <li className='card-description'><span className='span'>Eppisodes where appear:</span>{resident?.episode.length}</li>
            </ul>
        </div>

    </article>
  )
}

export default CardRecident