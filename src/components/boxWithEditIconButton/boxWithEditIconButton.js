import React from 'react';
import Box from '../boxWithIconButton/boxWithIconButton';
import Edit from '@material-ui/icons/Edit';

export default function({
    children, 
    onButtonClick,
}) {
    return (
        <Box
            icon={<Edit />}
            onButtonClick={onButtonClick}
        >
            {children}
        </Box>
    )
}