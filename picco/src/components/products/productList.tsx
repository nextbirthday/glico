import React from 'react'
import ProductItem from './productItem'
import './productList.css'
import { Empty } from 'antd'
const ProductList = ({ productList }: any) => {
  return <div className="product_grid">{productList.length < 1 ? <Empty /> : productList.map((product: any, index: any) => <ProductItem key={index} {...product} />)}</div>
}

export default ProductList
