import { Box } from '@material-ui/core';
import { Stack, Grid } from '@mui/material';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 1,
    width: '40%',
    maxWidth: '100vw',
    pt: 1,
    px: 4,
    pb: 2
};

const ReusableModal = ({ title, content, submit, cancel }) => {
    const [value, setValue] = useState();
    return (
        <Box
            sx={{
                ...style,
                width: 500
            }}
        >
            <Grid
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ borderBottom: '1px solid #dee2e6' }}
                padding={1.4}
                marginBottom={2}
            >
                <h2 variant="subtitle1">{title}</h2>
            </Grid>
            <div>{content}</div>
        </Box>
    );
};
export default ReusableModal;
