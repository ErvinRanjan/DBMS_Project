import express from 'express';
import { getConnections, getConnectionRequests } from '../../controllers/connectionControllers/connectionController.js';

export const connectionRouter = express.Router();

connectionRouter.get('/:id', getConnections);
connectionRouter.get('/:id/requests', getConnectionRequests);