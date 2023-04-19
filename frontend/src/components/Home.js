/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useEffect } from 'react'

import MetaData from './layout/MetaData'
import Product from './product/Products'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'

const Home = () => {

  const dispatch = useDispatch();

  const { loading, products, error, productsCount } = useSelector(state => state.products)

  useEffect(() => {
      dispatch(getProducts());
  }, [dispatch])

  return (
    <Fragment>
        <MetaData title={'Buy Best Products Online'} />
        <h1 id="products_heading">Latest Products</h1>
        <section id="products" className="container mt-5">
            <div className="row">
              {products && products.map( product => (
                <Product key={product._id} product={product}/>
              ))}
            </div>
        </section>
    </Fragment>
  )
}

export default Home