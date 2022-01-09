import React from 'react'
//import { categories } from "../data";
import { mobile } from "../responsive";
import CategoriesItem from "./CategoriesItems";
import styled from "styled-components";
import  { useState,useEffect  } from'react';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;
const Categories = () => {
  const [categories,setCategories] =useState([]);

  useEffect(()=>{
     const data =fetchCategories();
     data.then((v)=>{
       setCategories(v);
     }).catch(e => console.log(e));
  },[]);

  const fetchCategories = async () => {
    const res = await fetch(`http://localhost:5000/categories`)
    const data = await res.json()
    return data
  }

  return (
    <Container>{
      categories.map(item =>(
        <CategoriesItem item={item} key={item.id}/>
      ))
    }</Container>
  )
}

export default Categories
