import React ,{useState,useEffect}from 'react';
import { Container, Typography,Stack,Paper,Avatar,IconButton,Toolbar,AppBar,Box,Popover,Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit'
import {Link,useNavigate} from "react-router-dom";
import Grid from '@mui/material/Grid2';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import { useUser } from '../UserContext';

export default function UserPage()
{
    const [anchorEl, setAnchorEl] = useState(null);
    const {user,login,logout}=useUser();
    const navigate=useNavigate();
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      console.log(login);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
   
    useEffect(() => {
        if (user === null) {
            navigate('/UserLogin');
        }
    }, [user, navigate]);
    

   return(
    <>
    <Container sx={{minWidth:700}}>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky" sx={{
        width: '100%',
          top: 0, 
        zIndex: 1000, 
      }}>
        
      <Toolbar variant="dense" sx={{justifyContent:"space-between"}}>
      <Stack direction="row" alignItems="center">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3} sx={{ mr: 2 }}> 
            <EmailIcon />
            <WorkIcon />
            <Avatar sx={{ bgcolor: "blue"}}onClick={handleClick}>KJ</Avatar>
            <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        > 
          <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
          <Avatar sx={{ bgcolor: "blue"}}>KJ</Avatar>
          <Button a href="/UserEdit">Edit Profile</Button>
          <Button onClick={logout} >Logout</Button>
          </Stack>
        
        </Popover>
          
          </Stack>
      </Toolbar>
   
    </AppBar>

  </Box>
  </Container>
    <Container
    maxWidth="md"
    sx={{
        display: 'flex',
        flexDirection: 'column', 
        bgcolor: "gray",
        minHeight: "100vh",
        paddingTop: 4, 
        transform:"translateY(5vh)",
    }}
   >
    
    <Grid container  sx={{ bgcolor: "grey", width:'100%' }} rowSpacing={2}>
      
        <Grid item xs={12}>
        <Paper elevation={2} sx={{padding:3,width:'100%',minWidth:700 }}>
            <Stack direction="row" alignItems="center" justifyContent={'space-between'}>
            <Grid item xs={12}>
       <Avatar sx={{ bgcolor: "blue",minHeight:100,minWidth:100}}>KJ</Avatar>
       </Grid>
                <Typography variant="h5">
                    {
                        <div>
                        { user?.firstName + " " || ""}
                        { user?.middleName + " " || ""}
                        { user?.lastName + " " || ""}
                        </div>
                    }
                </Typography>
                <Link to='/UserEdit'>
                    <EditIcon />
                </Link>
            </Stack>
            </Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper sx={{padding:3,width:'100%',minWidth:700} }>
           
           <Typography variant="h5">
            About
           </Typography>
           <Typography sx={{padding:2}}>
            Nil
           </Typography>
        </Paper>
        
        </Grid>
        <Grid item xs={12}>
        <Paper sx={{padding:3,width:'100%',minWidth:700} }>
           
           <Typography variant="h5" >
            Experience
           </Typography>
           <Typography sx={{padding:2}}>
            Nil
           </Typography>
        </Paper>
        
        </Grid>
        <Grid item xs={12}>
        <Paper sx={{padding:3,width:'100%',minWidth:700} }>
           
           <Typography variant="h5" >
            Education
           </Typography>
           <Typography sx={{padding:2}}>
            Nothing here
           </Typography>
        </Paper>
        
        </Grid>
        <Grid item xs={12}>
        <Paper sx={{padding:3,width:'100%',minWidth:700} }>
           
           <Typography variant="h5">
            Skills
           </Typography>
           <Typography sx={{padding:2}}>
            Nothing here
           </Typography>
        </Paper>
        
        </Grid>
    </Grid>
    
   
</Container>
</>
   );
}