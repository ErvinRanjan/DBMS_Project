import { Box, Typography, styled, Divider } from '@mui/material';
import googleLogo from '../../assets/google_logo.jpg'

function ConnectionCard({ connection, message }) {
    const Image = styled('img')({
        width: '20%',
    });

    return <Box>
        <Box display='flex' padding='1em'>
            <Image src={googleLogo} />
            <Box marginLeft='1em '>
                <Typography>{connection.firstName + " " + connection.middleName + " " + connection.lastName}</Typography>
                <Typography fontSize='0.8em' color='gray'>{message.messageBody}</Typography>
            </Box>
        </Box>
        <Divider sx={{ bgcolor: 'black' }} />
    </Box>
}

export default ConnectionCard;