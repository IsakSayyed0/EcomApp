import React from 'react'
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoriesItem from "./CategoriesItems";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;
const Categories = () => {
  return (

    <Container>{
      categories.map(item =>(
        <CategoriesItem item={item} key={item.id}/>
      ))
    }</Container>
  )
}

export default Categories