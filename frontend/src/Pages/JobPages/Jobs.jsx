import { Box, Grid2 } from '@mui/material';
import SideBar from '../../Components/JobComponents/SideBar';
import JobList from '../../Components/JobComponents/JobList';
import FilterListIcon from '@mui/icons-material/FilterList';

function Jobs() {
    return <>
        <Box>
            <FilterListIcon />
        </Box>
        <Grid2 container spacing={2} sx={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '3em'
        }}>
            <Grid2 item xs={4}>
                <SideBar />
            </Grid2>
            <Grid2 item xs={8}>
                <JobList />
            </Grid2>
        </Grid2>
    </>
}

export default Jobs;