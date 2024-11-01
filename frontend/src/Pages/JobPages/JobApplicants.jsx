import { useState } from 'react';
import { Box } from '@mui/material';
import ApplicantCard from '../../Components/JobComponents/ApplicantCard';
/*
{
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
        requiredExperience: {
            intern: false,
            early: false,
            mid: false,
            advanced: false,
            director: false
        },
        reqDegree: {
            pursuing: false,
            associate: false,
            bachelors: false,
            masters: false,
            phd: false,
        },
        dateOfPost: new Date('2024-10-31'),
        deadline: new Date('2024-10-31')
    }
*/

function JobApplicants() {
    const [applicants, setApplicants] = useState([{
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
        applicantDescription: 'string'
    }]);

    document.body.style.backgroundColor = '#f8f4ec'

    return <Box display='flex' justifyContent='center' marginTop='7em'>
        {
            applicants.map(((applicant, index) =>
                <ApplicantCard applicant={applicant} key={index} />))
        }
    </Box>
}

export default JobApplicants;