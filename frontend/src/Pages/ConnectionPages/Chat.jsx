import { useState } from 'react';
import { Box, Divider } from '@mui/material';
import MessageCard from '../../Components/ConnectionComponents/MessageCard';
import ConnectionCard from '../../Components/ConnectionComponents/ConnectionCard';

function Chat() {
    const [connections, setConnections] = useState([{
        applicantId: '1',
        firstName: 'John',
        middleName: '',
        lastName: 'Doe',
        skills: ['C++', 'Java'],
        experience: 0,
        degree: 0,
        dateApplied: new Date('2024-10-31'),
        resume: 'resumeUrl',
        applicantDescription: 'string',
        status: 0,
        profilePicture: 'imgurl'
    }]);
    const [connection, setConnection] = useState({
        applicantId: '1',
        firstName: 'John',
        middleName: '',
        lastName: 'Doe',
        skills: ['C++', 'Java'],
        experience: 0,
        degree: 0,
        dateApplied: new Date('2024-10-31'),
        resume: 'resumeUrl',
        applicantDescription: 'string',
        status: 0,
        profilePicture: 'imgurl'
    });
    const [messages, setMessages] = useState([{
        senderId: '2',
        recieverId: '1',
        messageBody: 'Hello',
        createdAt: '5:00am'
    },
    {
        senderId: '2',
        recieverId: '1',
        messageBody: 'Hello',
        createdAt: '5:00am'
    }]);
    const [message, setMessage] = useState(
        {
            senderId: '2',
            recieverId: '1',
            messageBody: 'Hello',
            createdAt: '5:00'
        }
    );
    document.body.style.backgroundColor = '#f8f4ec';

    return <Box display='flex' justifyContent='center' minHeight='90vh'>
        <Box display='flex' marginTop='5em' gap='1em' justifyContent='center'>
            <Box display='flex' flexDirection='column' gap='1em' bgcolor='white' padding='1em' width='40%' outline='1px solid black'>
                {
                    connections.map(connection => <Box>
                        <ConnectionCard connection={connection} message={message} />
                    </Box>
                    )
                }
            </Box>
            <Box display='flex' flexDirection='column' gap='1em' bgcolor='white' padding='1em' width='40%' outline='1px solid black'>
                {
                    messages.map(message => <Box>
                        <MessageCard connection={connection} message={message} />
                    </Box>)
                }
            </Box>
        </Box>
    </Box>
}

export default Chat;