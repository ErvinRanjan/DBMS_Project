import { Box, TextField, Typography, Button, FormControlLabel, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

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

//TODO : call the postjobs api
function PostJobs() {
    const [minQual, setMinQual] = useState([]);
    const [preQual, setPreQual] = useState([]);
    const [resp, setResp] = useState([]);
    const latestMinQual = useRef('');
    const latestPreQual = useRef('');
    const latestResp = useRef('');
    const editorRef = useRef('');
    const title = useRef('');
    const locations = useRef([]);
    const skills = useRef([]);
    const exp = useRef(0);
    const deg = useRef(0);
    const deadline = useRef('');


    return <Box padding='1em' display='flex' flexDirection='column' gap='1em'>
        <Box>
            <Typography>Job Title</Typography>
            <TextField variant='filled' label='Job Title e.g. Executive Software Engineer' fullWidth onChange={(e) => title.current = e.currentTarget.value} />
        </Box>
        <Box>
            <Typography>Location</Typography>
            <TextField variant='filled' label='Locations e.g. Bangalore' fullWidth onChange={(e) => locations.current = e.currentTarget.value.split(/[\s,.]/).filter(s => s.length > 0 && /[a-zA-Z]+/.test(s)).map(s => s.toLowerCase())} />
        </Box>
        <Box>
            <Typography>Required experience</Typography>
            <Box>
                <FormControlLabel label="Intern" control={<Checkbox />} onChange={() => { exp.current = Math.max(exp.current, 1); }} />
                <FormControlLabel label="Early" control={<Checkbox />} onChange={() => { exp.current = Math.max(exp.current, 2); }} />
            </Box>
            <Box>
                <FormControlLabel label="Mid" control={<Checkbox />} onChange={() => { exp.current = Math.max(exp.current, 3); }} />
                <FormControlLabel label="Advanced" control={<Checkbox />} onChange={() => { exp.current = Math.max(exp.current, 4); }} />
            </Box>
            <Box>
                <FormControlLabel label="Director+" control={<Checkbox />} onChange={() => { exp.current = Math.max(exp.current, 5); }} />
            </Box>
        </Box>
        <Box>
            <Typography>Required degree</Typography>
            <Box>
                <FormControlLabel label="Pursuing Degree" control={<Checkbox />} onChange={() => { deg.current = Math.max(deg.current, 1); }} />
                <FormControlLabel label="Associate" control={<Checkbox />} onChange={() => { deg.current = Math.max(deg.current, 2); }} />
            </Box>
            <Box>
                <FormControlLabel label="Bachelors" control={<Checkbox />} onChange={() => { deg.current = Math.max(deg.current, 3); }} />
                <FormControlLabel label="Masters" control={<Checkbox />} onChange={() => { deg.current = Math.max(deg.current, 4); }} />
            </Box>
            <Box>
                <FormControlLabel label="Ph.D." control={<Checkbox />} onChange={() => { deg.current = Math.max(deg.current, 5); }} />
            </Box>
        </Box>
        <Box>
            <Typography>Required Skills</Typography>
            <TextField variant='filled' label='Skills e.g. C++' fullWidth onChange={(e) => skills.current = e.currentTarget.value.split(/[\s,.]/).filter(s => s.length > 0 && /[a-zA-Z]+/.test(s)).toLowerCase()} />
        </Box>
        <Box>
            <Typography>Minimum qualifications</Typography>
            <Box display='flex' flexDirection='column' gap='1em'>
                {
                    minQual.map((s, index) => <Box display='flex'>
                        <TextField variant='filled' label='Job Requirements e.g. Must be proficient in SpringBoot' defaultValue={s} key={index} fullWidth onChange={(e) => {
                            minQual[index] = e.currentTarget.value;
                        }} />
                        <Button onClick={() => {
                            const newMinQual = [...minQual];
                            if (index !== 0)
                                newMinQual.splice(index, index);
                            else
                                newMinQual.shift();
                            setMinQual(newMinQual);
                        }}>
                            <RemoveIcon />
                        </Button>
                    </Box>)
                }
                <Box display='flex' >
                    <TextField id='latestMinQual' variant='filled' label='Job Requirements e.g. Must be proficient in SpringBoot' fullWidth onChange={(e) => {
                        latestMinQual.current = e.currentTarget.value;
                    }} />
                    <Button onClick={() => {
                        const el = document.getElementById('latestMinQual');
                        if (el.value === '' || /\s+/.test(el ? el.value : ' ')) return;
                        setMinQual([...minQual, el.value]);
                        el.value = '';
                        latestMinQual.current = '';
                    }}>
                        <AddIcon />
                    </Button>
                </Box>
            </Box>
        </Box>
        <Box>
            <Typography>Preferred qualifications</Typography>
            <Box display='flex' flexDirection='column' gap='1em'>
                {
                    preQual.map((s, index) => <Box display='flex'>
                        <TextField variant='filled' label='Job Requirements e.g. Must be proficient in SpringBoot' defaultValue={s} key={index} fullWidth onChange={(e) => {
                            preQual[index] = e.currentTarget.value;
                        }} />
                        <Button onClick={() => {
                            const newPreQual = [...preQual];
                            if (index !== 0)
                                newPreQual.splice(index, index);
                            else
                                newPreQual.shift();
                            setPreQual(newPreQual);
                        }}>
                            <RemoveIcon />
                        </Button>
                    </Box>)
                }
                <Box display='flex' >
                    <TextField id='latestPreQual' variant='filled' label='Job Requirements e.g. Must be proficient in SpringBoot' fullWidth onChange={(e) => {
                        latestPreQual.current = e.currentTarget.value;
                    }} />
                    <Button onClick={() => {
                        const el = document.getElementById('latestPreQual');
                        if (el.value === '' || /\s+/.test(el ? el.value : ' ')) return;
                        setPreQual([...preQual, el.value]);
                        el.value = '';
                        latestPreQual.current = '';
                    }}>
                        <AddIcon />
                    </Button>
                </Box>
            </Box>
        </Box>
        <Box>
            <Typography>About</Typography>
            <Box>
                <Editor
                    apiKey="ppmi922fx73zh309ek4x6ki3y0lepz2c370ajbkkheoocsfe"
                    onEditorChange={(newValue, editor) => { editorRef.current = editor.getContent(); }}
                    onInit={(evt, editor) => (editorRef.current = editor.getContent())}
                    initialValue="<p>Start creating something amazing...</p>"
                    init={{
                        height: 500,
                        menubar: true,
                        plugins: [
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste code help wordcount",
                        ],
                        toolbar:
                            "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
                    }}
                />
            </Box>
        </Box>
        <Box>
            <Typography>Responsibilities</Typography>
            <Box display='flex' flexDirection='column' gap='1em'>
                {
                    resp.map((s, index) => <Box display='flex'>
                        <TextField variant='filled' label='Job Requirements e.g. Must be proficient in SpringBoot' defaultValue={s} key={index} fullWidth onChange={(e) => {
                            resp[index] = e.currentTarget.value;
                        }} />
                        <Button onClick={() => {
                            const newResp = [...resp];
                            if (index !== 0)
                                newResp.splice(index, index);
                            else
                                newResp.shift();
                            setResp(newResp);
                        }}>
                            <RemoveIcon />
                        </Button>
                    </Box>)
                }
                <Box display='flex' >
                    <TextField id='latestResp' variant='filled' label='Job Requirements e.g. Must be proficient in SpringBoot' fullWidth onChange={(e) => {
                        latestResp.current = e.currentTarget.value;
                    }} />
                    <Button onClick={() => {
                        const el = document.getElementById('latestResp');
                        if (el.value === '' || /\s+/.test(el ? el.value : ' ')) return;
                        setResp([...resp, el.value]);
                        el.value = '';
                        latestResp.current = '';
                    }}>
                        <AddIcon />
                    </Button>
                </Box>
            </Box>
            <Box>
                <Typography>Apply Before</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker onChange={(value) => deadline.current = value.format('yyyy-mm-dd')} />
                    </DemoContainer>
                </LocalizationProvider>
            </Box>
        </Box>
        <Box>
            <Button variant='contained' onClick={async () => {
                const finalMinQual = [...minQual];
                const finalPreQual = [...preQual];
                const finalResp = [...resp];
                if (!(latestMinQual === '' || /\s+/.test(latestMinQual))) {
                    finalMinQual.push(latestMinQual);
                }
                if (!(latestPreQual === '' || /\s+/.test(latestPreQual))) {
                    finalPreQual.push(latestPreQual);
                }
                if (!(latestResp === '' || /\s+/.test(latestResp))) {
                    finalPreQual.push(latestResp);
                }
                const job = {
                    title: title,
                    about: editorRef.current,
                    companyImg: 'imgurl',
                    companyName: 'google',
                    requiredExperience: exp.current,
                    requiredDegree: deg.current,
                    dateOfPost: dayjs().format('yyyy-mm-dd'),
                    deadline: deadline.current,
                    location: locations.current,
                    minQual: finalMinQual,
                    preQual: finalPreQual,
                    requiredSkills: skills.current,
                    responsibilities: finalResp
                };
            }}>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/jobs'>Apply</Link>
            </Button>
        </Box>
    </Box>
}

export default PostJobs;