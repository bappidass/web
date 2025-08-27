import { useState } from 'react'
import axios from './api/axios.ts'


function App() {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const data : any = await axios.get('/get-products')

      setProducts(data)

    } catch (error) {
      console.error("Error fetching products:", error)
    }
  }

 const handleFetchProducts = () => {
    fetchProducts()
 }




  return (
    <>
    <h2>APPLICATION </h2>
    <div>
      <button onClick={handleFetchProducts}>Fetch Products</button>
    </div>
    <div>
      <h1>Product List</h1>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {products.map((product: any) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>

    </>
  )
}

export default App
