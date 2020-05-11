import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

export default function ({
    onButtonClick,
    icon,
    children,
}) {
    return (
        <Grid
            container
            direction='row-reverse'
            justify='space-between'
        >
            <Grid item xs>
                <IconButton onClick={onButtonClick}>
                    {icon}
                </IconButton>
            </Grid>
            <Grid item xs={11}>
                {children}
            </Grid>
        </Grid>
    )
}
