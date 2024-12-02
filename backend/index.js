import express from 'express';
import dbconnect from './db.js';
import { createJobs } from './schema/jobSchema/jobSchema.js';
import { createLocation } from './schema/jobSchema/locationSchema.js';
import { createSkill } from './schema/jobSchema/skillSchema.js';
import { createMinQual } from './schema/jobSchema/minQualSchema.js';
import { createPreQual } from './schema/jobSchema/preQualSchema.js';
import { createResp } from './schema/jobSchema/respSchema.js';
import { jobRouter } from './routes/jobRoutes/jobRoutes.js';
import cors from 'cors';
import { connectionRouter } from './routes/connectionRoutes/connectionRoutes.js';
/*
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
 */


const app = express();
const PORT = 5000;

// you add routes , it would be better to create seperate routers
// for users, jobs etc

app.use(cors());
app.use('/jobs', jobRouter);
app.use('/connections', connectionRouter);

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});

dbconnect();

try {
    createJobs();
} catch (err) {
    console.log('Error while creating jobs ' + err);
}

try {
    createLocation();
} catch (err) {
    console.log('Error while creating location' + err);
}

try {
    createSkill();
} catch (err) {
    console.log('Error while creating skill' + err);
}

try {
    createMinQual();
} catch (err) {
    console.log('Error while creating minQual' + err);
}

try {
    createPreQual();
} catch (err) {
    console.log('Error while creating preQual' + err);
}

try {
    createResp();
} catch (err) {
    console.log('Error while creating resp' + err);
}