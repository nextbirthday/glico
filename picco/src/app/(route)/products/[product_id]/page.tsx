import { getProduct } from '@/controller/products'
import React from 'react'

const ProductDetail = async ({ params }: { params: { product_id: string } }) => {
  const productList = await getProduct(params.product_id)

  if (!productList) {
    return <></>
  }
  return (
    <>
      <h1 className="text-4xl">Details about product</h1>
      <h2>code: {`${productList.code}`}</h2>
      <h2>name: {`${productList.name}`}</h2>
      <h2>price: {`${productList.price}`}</h2>
      <h2>stock: {`${productList.stock}`}</h2>
    </>
  )
}

export default ProductDetail
