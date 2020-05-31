import React from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function() {
    return (
        <Box>
            <Button
                variant='contained'
                component={Link}
                to='/campaign/create'
            >
                create
            </Button>
        </Box>
    );
}