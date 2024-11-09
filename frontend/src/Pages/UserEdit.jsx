import React from 'react';
import { Container,Box, Dialog,DialogActions,DialogContent,DialogTitle,Typography,TextField,Button,Stack,IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {LocalizationProvider,DesktopDatePicker} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {useUser} from '../UserContext';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
export default function UserEdit()
{
    const [skills,setskills]=useState([]);
    const [skill,setskill]=useState("");
    const [open, setOpen] = useState(false);
    const [startDate, setStartDate] = useState(dayjs('2022-04-17'));
    const [endDate, setEndDate] = useState(dayjs('2022-04-17'));
    const [opened,setOpened]=useState(false);
    const {user}=useUser();
   const navigate=useNavigate();
    const handleClickOpened = () => {
        setOpened(true);
      };
      const handleClosed = () => {
        setOpened(false);
      };

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
 function handleChange(event)
{
    const {name,value}=event.target;
    if(name==="skill")
    {
      setskill(value);
    }
   
}
    
function addSkill()
{
    if(skill==="")
        return;
setskills((prevSkills)=>[...prevSkills,skill]);
setskill("");
}
    return(
        <Container
        maxWidth="sm"
        sx={{
    
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: "100vh",
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
                <Typography variant="h4" sx={{mb:4}}>
                  Edit User Profile
                </Typography>
                <Typography  align="left" sx={{mb:1}}>
                    First Name
                </Typography>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           fullWidth
                           sx={{mb:2}}
                           onChange={(e)=>{
                            if (user) {
                              user.firstName = e.target.value; 
                            }
                           }}
                         defaultValue={user?.firstName || ""}
                />
                 <Typography align="left" sx={{mb:1}}>
                    Middle Name
                </Typography>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           fullWidth
                           sx={{mb:2}}
                           onChange={(e)=>{
                            if(user)
                              user.middleName=e.target.value
                            }}
                            defaultValue={user?.middleName || ""}
                />
                 <Typography align="left" sx={{mb:1}}>
                     Last Name
                </Typography>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           fullWidth
                           sx={{mb:2}}
                           onChange={(e) => {
                            const updatedLastName = e.target.value;
                            setUser((prevUser) => ({
                              ...prevUser,  // Preserve previous user data
                              lastName: updatedLastName,  // Update only the lastName
                            }));
                          }}
                />
                <Typography align="left" sx={{mb:1}}>
                    About
                </Typography>
                <TextField
                 id="outlined-textarea"
                 multiline
                 fullWidth
                 sx={{mb:3}}
                />
                <Box>
                <Typography align="left" sx={{mb:1}}>
                    Skills
                </Typography>
                <Stack direction="row" spacing={4}>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           name="skill"
                           onChange={handleChange}
                           fullWidth
                           sx={{mb:2}}
                />
                <Button size="small" variant="outlined" color="primary" onClick={addSkill}>Add</Button>
                </Stack>
                <ul>
                {
                
                      skills.map(string =><><Stack direction="row" spacing={5}><li style={{ fontSize: '2em' ,color:"black"}}>
                            {string}
                        </li> 
                        <IconButton aria-label="delete" size="medium">
                        <DeleteIcon fontSize='medium'/>
                      </IconButton>
                      
                    
                      </Stack>
                      </>
                      )
                }
                </ul>
        
    <Stack direction="row" spacing={19} sx={{mb:2}}>
        <Typography align='left'>
         Experience
        </Typography>
        <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Experience</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            required
            margin="dense"
            name="role"
            label="Role"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            required
            margin="dense"
            name="Company"
            label="Company/Organisation"
            fullWidth
            variant="standard"
            sx={{mb:2}}
          />
           
           <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" spacing={2}>
                <DesktopDatePicker
                    label="Start date"
                    value={startDate}
                   onChange={(newValue) => setStartDate(newValue)}
                />
                <Typography variant="h5">
                    -
                </Typography>
                <DesktopDatePicker
                    label="End date"
                    value={endDate}
                   onChange={(newValue) => setEndDate(newValue)}
                />
            </Stack>
        </LocalizationProvider>
        <TextField
            autoFocus
            required
            margin="dense"
            name="Location"
            label="Location"
            fullWidth
            variant="standard"
            sx={{mb:2}}
          />
          <Typography>
            Descirption (Optional)
          </Typography>
          <TextField
                 id="outlined-textarea"
                 multiline
                 fullWidth
                 sx={{mb:3}}
                />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
      </React.Fragment>
        
        </Stack> 
               
        <Stack direction="row" spacing={20}>
        <Typography align='left'>
         Education
        </Typography>
        <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpened}>
        +
      </Button>
      <Dialog
        open={opened}
        onClose={handleClosed}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClosed();
          },
        }}
      >
        <DialogTitle>Add Education</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            required
            margin="dense"
            name="School"
            label="University/School"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            required
            margin="dense"
            name="Degree"
            label="Degree"
            fullWidth
            variant="standard"
            
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="Study"
            label="Field of study"
            fullWidth
            variant="standard"
            sx={{mb:2}}
          />
           
           <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" spacing={2}>
                <DesktopDatePicker
                    label="Start date"
                    value={startDate}
                   onChange={(newValue) => setStartDate(newValue)}
                />
                <Typography variant="h5">
                    -
                </Typography>
                <DesktopDatePicker
                    label="End date"
                    value={endDate}
                   onChange={(newValue) => setEndDate(newValue)}
                />
            </Stack>
        </LocalizationProvider>
        <TextField
            autoFocus
            required
            margin="dense"
            name="Grade"
            label="Grade"
            fullWidth
            variant="standard"
            sx={{mb:2}}
          />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosed}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
      </React.Fragment>
        </Stack> 
               
                
                
               
        </Box>
            
            <Button type="submit" onClick={(e)=>navigate('/Userpage')} variant="contained" color="primary" size="large"sx={{ mb:4 ,height:50,width:200}}>
              Save changes
            </Button>
            
        
                
        </Box>
      </Container>
    );
    
}