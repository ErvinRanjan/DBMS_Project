import { Box, Grid2 } from '@mui/material';
import JobList from '../../Components/JobComponents/JobList';
import FilterListIcon from '@mui/icons-material/FilterList';

function Jobs() {
    return <>
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
                width: '50%',
                padding: '0 1em 0 1em'
            }}>
                <Grid2 item size={12}>
                    <Box bgcolor={'white'} padding={'1em'}>
                        <FilterListIcon />
                    </Box>
                </Grid2>
                <Grid2 item size={12}>
                    <JobList />
                </Grid2>
            </Grid2>
        </Box>
    </>
}

export default Jobs;