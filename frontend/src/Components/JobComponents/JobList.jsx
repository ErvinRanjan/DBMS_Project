import { useState } from 'react';
import JobCard from './JobCard';
import { Box } from '@mui/material'

function JobList() {
    const sampleJobs = [
        {
            title: 'Job',
            location: 'Kerala',
            requiredSkills: ['C++', 'Java'],
            jobDescription: '# markdown string',
            companyImg: 'imgurl',
            companyName: 'someName',
        }, {
            title: 'Job',
            location: 'Kerala',
            requiredSkills: ['C++', 'Java'],
            jobDescription: '# markdown string',
            companyImg: 'imgurl',
            companyName: 'someName',
        },
        {
            title: 'Job',
            location: 'Kerala',
            requiredSkills: ['C++', 'Java'],
            jobDescription: '# markdown string',
            companyImg: 'imgurl',
            companyName: 'someName',
        },
        {
            title: 'Job',
            location: 'Kerala',
            requiredSkills: ['C++', 'Java'],
            jobDescription: '# markdown string',
            companyImg: 'imgurl',
            companyName: 'someName',
        }
    ]
    const [jobs, setJobs] = useState(sampleJobs);
    return <Box>
        {
            jobs.map((job, index) => <JobCard info={job} key={index} />)
        }
    </Box>
}

export default JobList;