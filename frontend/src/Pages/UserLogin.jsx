import React, {useState,useEffect} from 'react';

import {Box,TextField,Container,Button, Typography} from '@mui/material';
import {Link,useNavigate} from "react-router-dom";
import {useUser}from '../UserContext'

export default function UserLogin()
{ const {user,login}=useUser();
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
      if(user !== null)
      {
        console.log(user);
        navigate('/Userpage');
      }
    },[user,navigate]);
    
    function handleChange()
    {
     if(username===""||password==="")
      console.log("Please fill the required fields");
     else if(password.length < 8)
      console.log("Password should be minimum of 8 characters");
    else{
    
      const userData={username:username,password:password};
      console.log(userData);
      login(userData);
        } 
    }
   
   return(
    
    <Container
    maxWidth="sm"
    sx={{

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: "80vh",
      transform: 'translateY(10vh)',
      
    }}
    
    >
        <Box sx={{
            p: 4,
            width: '100%',
            maxWidth: 300,
            maxHeight:700,
            textAlign: 'center',
          
            bgcolor:'#f5f5f5',
          
           }}>
            <Typography variant="h4" >
                User Login
            </Typography>
         <TextField
          id="filled-password-input"
          label="Username"
          type="username"
          autoComplete="current-password"
          variant="filled"
          value={username}
          onChange={(e)=>setusername(e.target.value)}
          fullWidth
          
          sx={{mt:4,mb:4}}
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          fullWidth
          sx={{mb:4}}

        />
        
             <Button onClick={handleChange} type="submit" variant="contained" color="primary" size="large"sx={{ mb:4 ,height:50,width:200}}>
              Login
            </Button>
            <Box sx={{mb:2}} >
              <span>Don't have an account? <Link to="/UserReg">Register</Link></span>
            </Box>
            <Box >
              <span> <Link to="/OrgLogin">Login as Organization</Link></span>
            </Box>
        </Box>
       
        </Container>

    )
    
}