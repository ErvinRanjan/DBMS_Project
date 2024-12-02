import express from 'express';
import { getAllJobs, getApplicants } from '../../controllers/jobControllers/jobController.js';

export const jobRouter = express.Router();

jobRouter.get('/', getAllJobs);
jobRouter.get('/:id/applicants', getApplicants);