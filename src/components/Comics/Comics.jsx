import React, { useCallback, useState } from 'react'
import { useEffect } from 'react';
import api from '../../services/api';
import './Comics.css';
import GoogleMaps from '../GoogleMaps/GoogleMaps';

const Comics = () => {

  const [comics, setComics] = useState([])
  const [modalcontent, setModalContent] = useState([])
  const changeContent = () => {
    setModalContent([comics])
  }

  useEffect(() => {
    api
      .get('comics')
      .then(response => { setComics(response.data.data.results) })
      .catch(err => console.log('Log erro', err))
  }, [])

  const handleMore = useCallback(async () => {
    try {
      const offset = comics.length * 5
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

  console.log(comics)

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
                <button className='modal-button' onClick={changeContent}>QUERO ESSE</button>
              </div>
            </div>)
        })}
      </div>
      <button className='load-more' onClick={() => handleMore(comics)}>Load more</button>

      <div className="modal-container">
        <div className="modal-header">
          <button>X</button>
        </div>
        <div className='modal-content'>
          <GoogleMaps />
        </div>
      </div>
    </div>
  )
}

export default Comics