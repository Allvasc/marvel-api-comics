import './Comics.css';
import Modalmap from "../Modalmap/Modalmap";
import { useContext } from 'react'
import { ComicContext } from '../../context/ComicContext'

const Comics = () => {

  const {comics, handleMore } = useContext(ComicContext)  

  return (
    <div>
      <h1>Comics</h1>
      <div className='container-items text-center'>
        {comics.map(comic => {
          return (
            <div className='item img__wrap' key={comic.id}>
              <img className='item-image' src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} alt={comic.title} />
              <div className='img__description'>
                <p>{comic.title}</p>
                <p className='featured--description'>{comic.description}</p>
                <Modalmap name={comic.title} className='modal-button'/>
              </div>
            </div>)
        })}
      </div>
      <button className='load-more' onClick={() => handleMore(comics)}>Load more</button>
    </div>
  )
}

export default Comics