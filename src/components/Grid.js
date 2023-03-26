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
            <h1>Products</h1>
            <div>
            {data.map((item) => <Card data={item} key={item.id}/>)}
            </div>
      </div>
  )
}
