import express from 'express';
import { retrieveJobs, addJob } from '../../controllers/jobControllers/jobController.js';

export const jobRouter = express.Router();

jobRouter.get('/', retrieveJobs);
jobRouter.post('/add', addJob);