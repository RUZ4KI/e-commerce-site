import React, {useState,useEffect} from 'react'
import { Card } from './Card'


export const Grid = () => {

    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
     fetch('https://fakestoreapi.com/products?limit=9')
        .then(resp => resp.json())
         .then((json) => {
                 setIsLoaded(true)
                 setData(json)
         },
             error => {
                 setIsLoaded(true)
                 setErrors(error)
             }
         )
    }, [])

    if (errors) {
        return <div>Error: {errors.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    }
    return (
      <div>            
            <h1 style={{marginBottom: '20px'}}>Products</h1>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '400px 400px', gap: '50px'}}>
            {data.map((item) => <Card data={item} key={item.id}/>)}
            </div>
      </div>
  )
}
