import { Box, Grid2, Button, Divider, Drawer, Typography, TextField, Checkbox, FormControlLabel } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JobCard from '../../Components/JobComponents/JobCard.jsx'
import { useState, useRef } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import JobDesc from './JobDesc';

function Jobs() {
    const [drawer, setDrawer] = useState(false);
    const jobDesc = useRef({
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
    });
    const [drawer2, setDrawer2] = useState(false);

    const sampleJobs = [
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
    ]
    const [jobs, setJobs] = useState(sampleJobs);

    document.body.style.backgroundColor = '#f8f4ec';


    function resetRefs() {
        locations.current = [];
        skills.current = [];
        companies.current = [];
        exp.current = {
            intern: false,
            early: false,
            mid: false,
            advanced: false,
            director: false
        };
        deg.current = {
            pursuing: false,
            associate: false,
            bachelors: false,
            masters: false,
            phd: false,
        }
    }

    const locations = useRef([]);
    const skills = useRef([]);
    const companies = useRef([]);
    const exp = useRef({
        intern: false,
        early: false,
        mid: false,
        advanced: false,
        director: false
    });
    const deg = useRef({
        pursuing: false,
        associate: false,
        bachelors: false,
        masters: false,
        phd: false,
    });

    const accord = (
        <>
            <Box>
                <Accordion sx={{ width: '100vw' }} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                        Location
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextField label="Preferred locations e.g. Bangalore" variant="filled" fullWidth={true} onChange={(e) => {
                            let value = e.currentTarget.value;
                            locations.current = value.split(/[\s,.]/).filter(s => s.length > 0 && /[a-zA-Z]+/.test(s)).map(s => s.toLowerCase());
                        }} />
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ width: '100vw' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                        Experience
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <Box>
                                <FormControlLabel label="Intern" control={<Checkbox />} onChange={() => { exp.current.intern = !exp.current.intern; }} />
                                <FormControlLabel label="Early" control={<Checkbox />} onChange={() => { exp.current.early = !exp.current.early }} />
                            </Box>
                            <Box>
                                <FormControlLabel label="Mid" control={<Checkbox />} onChange={() => { exp.current.mid = !exp.current.mid }} />
                                <FormControlLabel label="Advanced" control={<Checkbox />} onChange={() => { exp.current.advanced = !exp.current.advanced }} />
                            </Box>
                            <Box>
                                <FormControlLabel label="Director+" control={<Checkbox />} onChange={() => { exp.current.director = !exp.current.director }} />
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ width: '100vw' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                        Skills & qualifications
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextField label="Skills e.g. C++" variant="filled" fullWidth={true} onChange={(e) => {
                            let value = e.currentTarget.value;
                            skills.current = value.split(/[\s,.]/).filter(s => s.length > 0 && /[a-zA-Z]+/.test(s)).toLowerCase();
                        }} />
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ width: '100vw' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                        Degree
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <Box>
                                <FormControlLabel label="Pursuing Degree" control={<Checkbox />} onChange={() => { deg.current.pursuing = !deg.current.pursuing; }} />
                                <FormControlLabel label="Associate" control={<Checkbox />} onChange={() => { deg.current.associate = !deg.current.associate }} />
                            </Box>
                            <Box>
                                <FormControlLabel label="Bachelors" control={<Checkbox />} onChange={() => { deg.current.bachelors = !deg.current.bachelors }} />
                                <FormControlLabel label="Masters" control={<Checkbox />} onChange={() => { deg.current.masters = !deg.current.masters }} />
                            </Box>
                            <Box>
                                <FormControlLabel label="Ph.D." control={<Checkbox />} onChange={() => { deg.current.phd = !deg.current.phd }} />
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ width: '100vw' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                        Organizations
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextField label="Company e.g. Google" variant="filled" fullWidth={true} onChange={(e) => {
                            let value = e.currentTarget.value;
                            companies.current = value.split(/[\s,.]/).filter(s => s.length > 0 && /[a-zA-Z]+/.test(s)).toLowerCase();
                        }} />
                    </AccordionDetails>
                </Accordion>
                {/* <Accordion sx={{ width: '100vw' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '1.25em' }}>
                    Sort by
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <FormControlLabel label="Date" control={<Checkbox />} onChange={() => { deg.current.phd = !deg.current.phd }} />
                    </Box>
                </AccordionDetails>
            </Accordion> */}
                <Box sx={{ marginLeft: '1em', marginTop: '5em' }}>
                    <Button variant='contained' onClick={() => { setDrawer(false); resetRefs(); }}>Filter</Button>
                    <Button variant='contained' onClick={() => { setDrawer(false); resetRefs(); }} sx={{ marginLeft: '1em' }}>Reset</Button>
                </Box>
            </Box>
        </>
    );

    const jd = (
        <JobDesc job={jobDesc.current} setDrawer2={setDrawer2} />
    );

    return <Box bgcolor='#f8f4ec'>
        <Drawer open={drawer}>
            {accord}
        </Drawer>
        <Drawer open={drawer2}>
            {jd}
        </Drawer>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '7em',
        }}>
            {
                // may or may not add a sidebar
                // using grid , just in case
            }
            <Grid2 container spacing={2} sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '60%',
                padding: '0 1em 0 1em'
            }}>
                <Grid2 item size={12}>
                    <Box bgcolor={'white'} padding={'1em'}>
                        <Button sx={{ color: 'black' }} onClick={() => { setDrawer(true); }}>
                            <FilterListIcon />
                        </Button>
                    </Box>
                </Grid2>
                <Grid2 item size={12}>
                    <Box>
                        {
                            jobs.map((job, index) => <JobCard info={job} key={index} jobDesc={jobDesc} setDrawer2={setDrawer2} />)
                        }
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    </Box>
}

export default Jobs;