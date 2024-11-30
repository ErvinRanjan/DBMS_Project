import { useState, useRef } from 'react';
import { Box, Button, Drawer } from '@mui/material';
import ApplicantCard from '../../Components/JobComponents/ApplicantCard';
import FilterListIcon from '@mui/icons-material/FilterList';
import ApplicantFilter from '../../Components/JobComponents/ApplicantFilter';

const sampleApplicant = {
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
    status: 0
}

function JobApplicants() {
    const [drawer, setDrawer] = useState(false);
    const [applicants, setApplicants] = useState([sampleApplicant]);

    const accord = (
        <>
            <ApplicantFilter setDrawer={setDrawer} width='100vw' outline='none' />
        </>
    );

    document.body.style.backgroundColor = '#f8f4ec'

    return (
        <Box>
            <Drawer open={drawer}>
                {accord}
            </Drawer>
            <Box display='flex' justifyContent='center' marginTop='7em' width='100%' alignItems='center'>
                <Box display='flex' flexDirection='column' alignItems='center' padding='1em' width='60%'>
                    <Box alignSelf='flex-start' bgcolor='white' padding='0.75em' borderRadius='15%' outline='1px solid gray' marginBottom='1em' display={{ sm: 'flex', md: 'none' }} width='100%'>
                        <Button textDecoration='none' color='black' onClick={() => setDrawer(true)}>
                            <FilterListIcon />
                        </Button>
                    </Box>
                    <Box display='flex' gap='0.8em' width='100%'>
                        <ApplicantFilter setDrawer={setDrawer} width='100%' display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} outline='1px solid black' />
                        <Box width='100%'>
                            {
                                applicants.map(((applicant, index) =>
                                    <ApplicantCard applicant={applicant} key={index} />))
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>);
}

export default JobApplicants;