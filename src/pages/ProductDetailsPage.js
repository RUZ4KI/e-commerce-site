import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [errors, setErrors] = useState(null)
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(resp => resp.json())
        .then(resp => {
            setIsLoaded(true)
            setProduct(resp)
        },
            error => {
                setIsLoaded(true)
                setErrors(error)
            }
        )
    },[id])
    
    if (errors) {
        return <div>Error: {errors.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    }

  return (
      <div>
          <h1>Product Page</h1>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{width: '50%'}}>
              <img src={product.image} alt="" style={{height: '400px',width: '400px', padding: '10px'}} />
              </div>  
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',width: '50%'}}>
                  <div style={{ fontSize: '24px' }}>{product?.title}</div>
                  <div style={{ fontSize: '14px', marginBottom: '14px' }}>{`Rating : ${product?.rating?.rate}`}</div>
                  <div style={{ fontSize: '20px',marginBottom: '14px' }}>{product?.description}</div>
                  <div style={{fontSize: '28px'}}>{`Price: ${product?.price}`}</div>
              </div>
          </div>
      </div>
  )
}
