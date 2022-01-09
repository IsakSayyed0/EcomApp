import React from 'react'
//import { popularProducts } from "../data";
import Product from "./Product";
import styled from "styled-components";
import  { useState,useEffect  } from'react';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {

  const [popularProducts,setProducts] =useState([]);

  useEffect(()=>{
     const data =fetchProducts();
     data.then((v)=>{
       setProducts(v);
     }).catch(e => console.log(e));
  },[]);

  const fetchProducts = async () => {
    const res = await fetch(`http://localhost:5000/products`)
    const data = await res.json()
    return data
  }

  const fetchClickedProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products?id=${id}`)
    const data = await res.json()
    return data
  }

  const productDetails =(id) =>{
     const data =fetchClickedProduct(id);
     data.then((v)=>{
       console.log("HI",v);
     }).catch(e =>console.log(e));
  }




  return (
    <Container>{
      popularProducts.map(item =>(
        <Product item={item} key={item.id} onClick={() => productDetails(item.id)}/>
      ))
    }</Container>
  )
}

export default Products
