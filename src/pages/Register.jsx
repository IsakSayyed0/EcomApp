import styled from "styled-components";
import { mobile } from "../responsive";
import  { useState,useEffect  } from'react';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [name,setName] =useState('');
  const [lastName,setLastName] =useState('');
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const [confirmPassword,setConfirmPassword] =useState('');
  const [userName,setUserName] =useState('');

 const registerUser =(e) =>{
       e.preventDefault();
       if (name ==='' || userName ==='' || lastName ==='' || email ==='' || password ==='' || confirmPassword ==='' ) {
         alert("Fields can't be empty");
       }else if (!userNameCheck()) {
         alert("Username is already present!")
       }
       else {
         if (password !==confirmPassword) {
           alert("Password and ConfirmPassword does not match");
         }else {
           const newUser ={
             "name":name,
             "lastName":lastName,
             "userName":userName,
             "password":password,
             "email":email,
             "role":"user"
           }
           addUser(newUser);
           console.log(newUser);
         }
       }
 }

 const userNameCheck =()=>{
     let length =-1;
     const data =fetchUserName();
     data.then(function(v) {
         length =v.length;
        console.log(length);
     });
     const isPresent =(length >0) ? true:false
     return isPresent;
 }

 const addUser = async (user) => {
   const res = await fetch('http://localhost:5000/users', {
     method: 'POST',
     headers: {
       'Content-type': 'application/json',
     },
     body: JSON.stringify(user),
   })

 }

 // Fetch
const fetchUserName = async () => {
  const res = await fetch(`http://localhost:5000/users?userName=${userName}`)
  const data = await res.json()
  return data;
}



  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={registerUser}>
          <Input placeholder="name"   value={name}
          onChange={(e) => setName(e.target.value)} />
          <Input placeholder="last name" value={lastName}
          onChange={(e) => setLastName(e.target.value)} />
          <Input placeholder="username" value={userName}
          onChange={(e) => setUserName(e.target.value)} />
          <Input type='email' placeholder="email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          <Input type="password" placeholder="confirm password" value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
