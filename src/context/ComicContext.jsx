import { useCallback, useEffect, useState, createContext } from 'react'
import api from '../services/api';

export const ComicContext = createContext({});

export const ComicProvider = ({children}) => {

    const [comics, setComics] = useState([])

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


//codes

    return (
        <ComicContext.Provider value={{ comics, handleMore }}>
            {children}
        </ComicContext.Provider>
    )
}