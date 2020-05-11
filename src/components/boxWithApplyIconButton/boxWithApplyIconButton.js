import React from 'react';
import Box from '../boxWithIconButton/boxWithIconButton';
import ApplyIcon from '@material-ui/icons/CheckCircle';

export default function({
    children,
    onButtonClick,
}) {
    return (
        <Box
            icon={<ApplyIcon />}
            onButtonClick={onButtonClick}
        >
            {children}
        </Box>
    );
}