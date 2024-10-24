import express from 'express';


const app = express();
const PORT = 5000;

// you add routes , it would be better to create seperate routers
// for users, jobs etc

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});