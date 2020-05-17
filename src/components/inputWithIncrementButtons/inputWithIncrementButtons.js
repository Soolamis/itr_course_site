import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Left from '@material-ui/icons/ChevronLeft';
import Right from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    text: {
        maxWidth: '2em',
    }
});

export default function ({
    value,
    onChange,
    label,
}) {
    const classes = useStyles();

    return (
        <Box>
            <IconButton
                onClick={() => onChange(value - 1)}
            >
                <Left />
            </IconButton>
            <TextField
                classes={{ root: classes.text }}
                value={value}
                onChange={e => onChange(e.target.value)}
                label={label}
            />
            <IconButton
                onClick={() => onChange(value + 1)}
            >
                <Right />
            </IconButton>
        </Box>
    );
}