import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Player from 'react-player'

export default function({
    url,
    onChange,
}) {
    return (
        <Box>
            <TextField 
                label='URL' 
                fullWidth 
                value={url}
                onChange={e => onChange(e.target.value)}
            />
            <Player 
                url={url} 
                light
                width='100%'
            />
        </Box>
    );
}