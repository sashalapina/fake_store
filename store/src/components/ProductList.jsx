import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = () => {
      axios
        .get('https://fakestoreapi.com/products')
        .then(function (response) {
          setProducts(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    getData()
  }, [])

  return (
    <>
      {products.map((product) => (
        <>
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.category}</p>
            <img width={200} src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Button>More</Button>
            <Button>Add to cart</Button>
          </div>
        </>
      ))}
    </>
  )
}

export default ProductList

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: '#BF4F74';
  margin: 0 1em;
  padding: 0.25em 1em;
`
