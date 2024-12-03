import express from 'express';
import { getUserPage } from './controllers/User';

const app = express();
const PORT = 5000;

// you add routes , it would be better to create seperate routers
// for users, jobs etc
app.get('/api/user/:username',getUserPage);
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});