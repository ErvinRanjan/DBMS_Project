import { Box, Divider } from '@mui/material';
import { styled } from '@mui/system'
import googleLogo from '../../assets/google_logo.jpg'
function JobCard({ info }) {
    const CompanyLogo = styled('img')({
        height: '75%',
        marginLeft: '1em'
    })
    return <Box marginBottom={'1em'}>
        <Box sx={{
            display: 'flex',
            paddingTop: '1em',
            height: '100px',
            bgcolor: 'white'
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
        <Divider orientation={'horizontal'} flexItem sx={{ width: '100%', marginLeft: '1em', color: '#e3e2e1' }} />
    </Box>
}

export default JobCard;