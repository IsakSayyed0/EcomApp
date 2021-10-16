import React from 'react';
import styled from 'styled-components';
import {Search,ShoppingCartOutlined} from '@material-ui/icons';
import {Badge} from '@material-ui/core';
const Container =styled.div`
        height:60px;
`

const Wrapper =styled.div`
       padding:10px 20px;
       display:flex;
       justify-content: space-between;
`
const  Left =styled.div`
display:flex;
flex:1;
align-items:center;
`

const Language =styled.span`
font-size:14px;
cursor:pointer;
`

const SearchContainer =styled.div`
border:0.5px solid lightGray;
align-items:center;
display:flex;
margin-left:25px;
padding:5px;
`

const Input =styled.input`
border:none;
`

const Logo =styled.h1`
font-weight:bold;
`

const Center =styled.div`
flex:1;
text-align:center;
`

const Right =styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`
const MenuItem =styled.div`
font-size:14px;
margin-left:25px;
pointer:cursor;
`

const NavBar =() =>{
  return (
    <Container>
    <Wrapper>
    <Left>
      <Language>EN</Language>
      <SearchContainer>
      <Input/>
      <Search style={{fontsize:16,color:"gray"}}/>
      </SearchContainer>
    </Left>
    <Center><Logo>EcomApp.</Logo></Center>
    <Right>
    <MenuItem>Register</MenuItem>
    <MenuItem>SignIn</MenuItem>
    <MenuItem><Badge badgeContent={4} color="primary">
  <ShoppingCartOutlined color="action" />
</Badge>
</MenuItem>
    </Right>
    </Wrapper>
    </Container>
  )
}

export default NavBar;
