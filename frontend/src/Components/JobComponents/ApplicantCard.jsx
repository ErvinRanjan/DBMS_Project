import { Box, Typography, Divider } from '@mui/material';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import BarChartIcon from '@mui/icons-material/BarChart';
import SchoolIcon from '@mui/icons-material/School';

/*
 applicantId: '1',
        name: 'Name',
        skills: ['C++', 'Java'],
        experience: {
            intern: false,
            early: false,
            mid: false,
            advanced: false,
            director: false
        },
        degree: {
            pursuing: false,
            associate: false,
            bachelors: false,
            masters: false,
            phd: false,
        },
        dateApplied: new Date('2024-10-31'),
        resume: 'resumeUrl',
        applicantDescription: 'string'*/

function ApplicantCard({ applicant }) {
    function getExperience() {
        if (applicant.experience.intern) {
            return "Intern";
        } else if (applicant.experience.early) {
            return "Early";
        } else if (applicant.experience.mid) {
            return "Mid";
        } else if (applicant.experience.advanced) {
            return "Advanced";
        } else if (applicant.experience.director) {
            return "Director+";
        }
        return "No experience acquired";
    }

    function getDegree() {
        if (applicant.degree.pursuing) {
            return "Pursuing Degree";
        } else if (applicant.degree.associate) {
            return "Associate";
        } else if (applicant.degree.bachelors) {
            return "Bachelors";
        } else if (applicant.degree.masters) {
            return "Masters";
        } else if (applicant.degree.phd) {
            return "Ph.D.";
        }
        return "No degree acquired";
    }
    return <Box sx={{
        outline: '1px solid gray',
        padding: '1em',
        bgcolor: 'white',
        width: '50%',
        borderRadius: '10%',
    }}>
        <Box display='flex' gap='1em' alignItems='center'>
            <AccountCircleIcon />
            <Typography sx={{ fontSize: '1.25em' }}>{applicant.name}</Typography>
        </Box>
        <Divider sx={{ marginTop: '0.5em', bgcolor: 'black' }} />
        <Box marginTop='1em'>
            <Box display='flex' gap='1em'>
                <BookIcon />
                <Typography>{applicant.skills.join(', ')}</Typography>
            </Box>
            <Box display='flex' gap='1em'>
                <BarChartIcon />
                <Typography>{getExperience()}</Typography>
            </Box>
            <Box display='flex' gap='1em'>
                <SchoolIcon />
                <Typography>{getDegree()}</Typography>
            </Box>
            <Box sx={{ marginTop: '1em', display: 'flex', gap: '1em' }}>
                <Button variant='contained' >View Resume</Button>
                <Button variant='contained' >Connect</Button>
            </Box>
        </Box >
    </Box >
}

export default ApplicantCard;