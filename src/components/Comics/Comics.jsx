import React, { useCallback, useState } from 'react'
import { useEffect } from 'react';
import api from '../../services/api';
import './Comics.css'

const Comics = () => {

  const [comics, setComics] = useState([])

  useEffect(() => {
    api
      .get('comics')
      .then(response => { setComics(response.data.data.results) })
      .catch(err => console.log('Log erro', err))
  }, [])

  const handleMore = useCallback(async () => {
    try {
      const offset = comics.length
      const response = await api.get('comics', {
        params: {
          offset: offset,
        },
      })

      setComics([...comics, ...response.data.data.results])

    } catch (err) {
      console.log(err)
    }
  }, [comics])


  return (
    <div>
      <h1>Comics</h1>
      <div className='container-items'>
        {comics.map(comic => {
          return (
            <div className='item img__wrap' key={comic.id}>
              <img className='item-image' src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} alt={comic.title} />
              <div className='img__description'>
                <p>{comic.title}</p>
                <p className='featured--description'>{comic.description}</p>
                <button>QUERO ESSE</button>
              </div>
            </div>)
        })}
      </div>
      <button onClick={handleMore}>Load more</button>
    </div>
  )
}

export default Comics