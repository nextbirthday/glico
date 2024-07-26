import { Empty } from 'antd'

const Products = async () => {

  /* 외부 API 연동이 필요할 시 */
  const productList = await fetch('http://localhost:3000/api/product', {
    cache: 'no-store',
    headers: { 'content-type': 'application/json' },
  })

  if (!productList) {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <Empty />
        </div>
      </>
    )
  }

  return (
    <>
      <h1>Product List</h1>
      <div style={{ display: 'flex' }}>
       {/*  <ProductMenu />
        <ProductList productList={productList} /> */}
      </div>
    </>
  )
}

export default Products
