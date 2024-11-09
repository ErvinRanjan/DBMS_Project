import { Box, Divider } from '@mui/material';
import { styled } from '@mui/system'
import googleLogo from '../../assets/google_logo.jpg'

function JobCard({ info, jobDesc, setDrawer2 }) {
    const CompanyLogo = styled('img')({
        height: '75%',
        marginLeft: '1em'
    })
    return <Box marginBottom={'1em'} onClick={() => {
        jobDesc.current = info;
        setDrawer2(true);
    }}>
        <Box sx={{
            display: 'flex',
            paddingTop: '1em',
            height: '100px',
            bgcolor: 'white',
            outline: '1px solid black',
            borderRadius: '10%'
        }}>
            <CompanyLogo src={googleLogo} />
            <Box sx={{
                marginLeft: '1em',
                marginBottom: '1em',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <Box fontSize={'1.25em'}>{info.title}</Box>
                <Box color={'gray'}>{info.companyName}</Box>
                <Box color={'gray'}>{info.location}</Box>
            </Box>
        </Box>
        <Divider orientation={'horizontal'} flexItem sx={{ width: '100%', color: '#e3e2e1' }} />
    </Box>
}

export default JobCard;