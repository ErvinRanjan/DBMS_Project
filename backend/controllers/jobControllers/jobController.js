import { client } from '../../db.js';
import { v4 as uuidv4 } from 'uuid';

export async function retrieveJobs(req, res) {
    try {
        const data = await client.query(`
                SELECT * 
                FROM jobs j
                INNER JOIN location l  ON j.jobId = l.jobId
                INNER JOIN skill s ON l.jobId = s.jobId
                INNER JOIN minQual m ON s.jobId = m.jobId
                INNER JOIN preQual p ON m.jobId = p.jobId
                INNER JOIN respQual r ON p.jobId = r.jobId
            `);
        console.log(data);
        res.status(200).send('jobs retrieved')
        return data;
    } catch (err) {
        console.log("Error while retrieving jobs" + err);
        res.status(500).send("Error while retrieving jobs" + err)''
    }
}

export async function addJob(req, res) {
    try {
        const job = req.body;
        const jobId = uuidv4();
        await client.query(`
            INSERT INTO jobs(jobid,title,about,companyimg,companyname,requiredexperience,requireddegree,dateofpost,deadline)
            VALUES (${jobId},${job.title},${job.about},${job.companyImg},${job.companyName},${job.requiredExperience},${job.requiredDegree},${job.dateOfPost},${job.deadline});
        `)
        job.location.map(async (location, index) => {
            await client.query(`
                INSERT INTO location(locationid,jobid,location)
                VALUES (${index},${jobId},${location});
            `)
        })
        job.minQual.map(async (minqual, index) => {
            await client.query(`
                INSERT INTO minqual(minqualid,jobid,minqual)
                VALUES (${index},${jobId},${minqual});
            `)
        })
        job.preQual.map(async (prequal, index) => {
            await client.query(`
                INSERT INTO prequal(prequalid,jobid,prequal)
                VALUES (${index},${jobId},${prequal});
            `)
        })
        job.requiredSkills.map(async (skill, index) => {
            await client.query(`
                INSERT INTO skill(skillid,jobid,skill)
                VALUES (${index},${jobId},${skill});
            `)
        })
        job.responsibilities.map(async (resp, index) => {
            await client.query(`
                INSERT INTO resp(respid,jobid,resp)
                VALUES (${index},${jobId},${resp});
            `)
        })
        res.status(200).send("added job");
    } catch (err) {
        console.log("Error while inserting job: " + err);
        res.status(500).send("Error while inserting job: " + err);
    }
}