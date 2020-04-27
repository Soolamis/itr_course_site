import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const useStyles = makeStyles({
    iconWrapper: {
        marginRight: '0.5em',
    },
});

export default function ProfileItemContent({
    icon,
    text,
    classes = { root: '', iconWrapper: '', label: '', labelWrapper: '' },
}) {
    const styles = useStyles();

    return (
        <Grid 
            container 
            className={classnames(classes.root)}
            wrap='nowrap'
        >
            <Grid 
                item
                className={classnames(styles.iconWrapper, classes.iconWrapper)}
            >
                {icon}
            </Grid>
            <Grid 
                item
                className={classnames(classes.labelWrapper)}
            >
                <Typography className={classnames(classes.label)}>
                    {text}
                </Typography>
            </Grid>
        </Grid>
    )
}