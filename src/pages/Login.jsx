import styled from "styled-components";
import {mobile} from "../responsive";
import  { useState,useEffect  } from'react';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [userName,setUserName] =useState('');
  const [password,setPassword] =useState('');

  const userLogIn =(e) =>{
    e.preventDefault();
    if(userName ==='' || password ===''){
      alert("Fields can't be empty");
    }else {
      const result =fetchUser();
      result.then(function(v){
        const userPassword =v[0].password;
        if (userPassword !== password) {
          alert(`${userName} password is incorrect!`);
        }else {
          // route the user
          alert(`Hi ${userName}! `);
        }
            })
    }
  }

  // Fetch
 const fetchUser = async () => {
   const res = await fetch(`http://localhost:5000/users?userName=${userName}`)
   const data = await res.json()
   return data
 }


  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={userLogIn}>
          <Input placeholder="username" value={userName}
          onChange={(e) => setUserName(e.target.value)}/>
          <Input type="password" placeholder="password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
