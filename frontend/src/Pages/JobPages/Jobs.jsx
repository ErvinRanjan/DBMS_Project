import { Box, Button, Drawer, Divider } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import JobCard from '../../Components/JobComponents/JobCard.jsx'
import { useState, useRef, useEffect } from 'react';
import JobDesc from './JobDesc';
import JobFilter from '../../Components/JobComponents/JobFilter.jsx';
import axios from 'axios';

const sampleJobDesc = {
    jobId: '1',
    title: 'Job',
    location: ['Kerala'],
    requiredSkills: ['C++', 'Java'],
    jobDescription: {
        minimumQualifications: ['a', 'b'],
        preferredQualifications: ['a', 'b'],
        about: '<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>',
        responsibilities: ['a', 'b']
    },
    companyImg: 'imgurl',
    companyName: 'someName',
    requiredExperience: 1,
    reqDegree: 1,
    dateOfPost: new Date('2024-10-31'),
    deadline: new Date('2024-10-31')
};


const sampleJobs = [sampleJobDesc]

const jobsEndpoint = '';

function Jobs() {
    const [drawer, setDrawer] = useState(false);
    const jobDesc = useRef(sampleJobDesc);
    const [drawer2, setDrawer2] = useState(false);
    const [jobs, setJobs] = useState(sampleJobs);

    document.body.style.backgroundColor = '#f8f4ec';

    useEffect(async () => {
        const res = await axios.get(jobsEndpoint);
        const data = res.data;
        setJobs(data);
    }, []);

    const jobFilter = (
        <JobFilter setDrawer={setDrawer} width='100vw' />
    );

    const jobDesc2 = (
        <JobDesc job={jobDesc.current} setDrawer2={setDrawer2} outline='none' />
    );

    return <Box bgcolor='#f8f4ec'>
        <Drawer open={drawer}>
            {jobFilter}
        </Drawer>
        <Drawer open={drawer2}>
            {jobDesc2}
        </Drawer>
        <Box sx={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '7em',
            width: '75%',
        }}>
            <Box bgcolor={'white'} padding={'1em'} display={{ xs: 'block', sm: 'none' }} marginBottom='1em' outline='1px solid black' borderRadius='10%'>
                <Button sx={{ color: 'black' }} onClick={() => { setDrawer(true); }}>
                    <FilterListIcon />
                </Button>
            </Box>
            <Box display='flex' width='100%' gap='1em'>
                <JobFilter setDrawer={setDrawer} setJobs={setJobs} jobs={jobs} width='100%'
                    display={{ xs: 'none', sm: 'block' }}
                    outline='1px solid black' />
                <Box width='100%' minHeight='400px'>
                    {
                        jobs.map((job, index) => <JobCard info={job} key={index} jobDesc={jobDesc} setDrawer2={setDrawer2} />)
                    }
                </Box>
            </Box>
        </Box>
    </Box>
}

export default Jobs;