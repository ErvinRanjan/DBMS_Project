import { Box, Typography, Button, Divider, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import PlaceIcon from '@mui/icons-material/Place';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Parser } from "html-to-react";
import CloseIcon from '@mui/icons-material/Close';

function JobDesc({ job, setDrawer2 }) {
    function getExperience() {
        if (job.requiredExperience.intern) {
            return "Intern";
        } else if (job.requiredExperience.early) {
            return "Early";
        } else if (job.requiredExperience.mid) {
            return "Mid";
        } else if (job.requiredExperience.advanced) {
            return "Advanced";
        } else if (job.requiredExperience.director) {
            return "Director+";
        }
        return "No experience required";
    }

    function getDegree() {
        if (job.reqDegree.pursuing) {
            return "Pursuing Degree";
        } else if (job.reqDegree.associate) {
            return "Associate";
        } else if (job.reqDegree.bachelors) {
            return "Bachelors";
        } else if (job.reqDegree.masters) {
            return "Masters";
        } else if (job.reqDegree.phd) {
            return "Ph.D.";
        }
        return "No Degree required";
    }

    return <Box width={'100vw'} padding={'1em'} display='flex' flexDirection='column' gap={'0.5em'}>
        <Box display='flex' alignItems={'center'} paddingRight={'2em'}>
            <Typography fontSize={'2em'}>{job.title}</Typography>
            <Button sx={{ marginLeft: 'auto' }} onClick={() => setDrawer2(false)}>
                <CloseIcon />
            </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: '1em', width: '50%' }}>
            <Box display={'flex'} gap={'0.25em'}>
                <BusinessIcon />
                <Typography>
                    {job.companyName}
                </Typography>
            </Box>
            <Box display={'flex'} gap={'0.10em'}>
                <PlaceIcon />
                <Typography>
                    {
                        job.location.join(',')
                    }
                </Typography>
            </Box>
            <Box display={'flex'} gap={'0.25em'}>
                <BarChartIcon />
                <Typography>
                    {
                        getExperience()
                    }
                </Typography>
            </Box>
        </Box>
        <Box>
            <Button variant='contained' onClick={() => setDrawer2(false)}>Apply</Button>
        </Box>
        <Divider />
        <Box>
            <Typography >Minimum qualifications</Typography>
            <ul>
                {
                    job.jobDescription.minimumQualifications
                        .map(string => <li style={{ fontSize: '1em' }}>
                            {string}
                        </li>)
                }
            </ul>
        </Box>
        <Divider />
        <Box>
            <Typography>Preferred qualifications</Typography>
            <ul>
                {
                    job.jobDescription.minimumQualifications
                        .map(string => <li style={{ fontSize: '1em' }}>
                            {string}
                        </li>)
                }
            </ul>
        </Box>
        <Divider />
        <Box>
            <Typography>About The job</Typography>
            <Box padding='0.5em'>
                {
                    new Parser().parse(job.jobDescription.about)
                }
            </Box>
        </Box>
        <Divider />
        <Box>
            <Typography>Responsibilities</Typography>
            <ul>
                {
                    job.jobDescription.minimumQualifications
                        .map(string => <li style={{ fontSize: '1em' }}>
                            {string}
                        </li>)
                }
            </ul>
        </Box>
    </Box>
}

export default JobDesc;