import { Empty } from 'antd'
import { getAllProduct } from '@/controller/products'
import ProductList from '@/components/products/productList'
import ProductMenu from '@/components/products/productMenu'

const Products = async () => {
  const productList = await getAllProduct()

  /* 외부 API 연동이 필요할 시 */
  /*   const staticData = await fetch('http://localhost:3000/api/product', {
    cache: 'no-store',
    headers: { 'content-type': 'application/json' },
  })

  const jsonData = await staticData.json()
  console.log('jsonData ===>', jsonData) */
  
  if (!productList || productList.length < 1) {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <ProductMenu />
          <Empty />
        </div>
      </>
    )
  }

  return (
    <>
      <h1>Product List</h1>
      <div style={{ display: 'flex' }}>
        <ProductMenu />
        <ProductList productList={productList} />
      </div>
    </>
  )
}

export default Products
