import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Markdown from 'react-markdown'

const useStyles = makeStyles({
    root: {
        padding: '0.5em',
    },
})

export default function ({
    onClickButton,
    label,
    description,
    cost,
}) {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <Grid
                container
                spacing={1}
                alignItems='center'
            >
                <Grid
                    item
                    xs={12}
                    container
                    justify='space-around'
                >
                    <Grid item>
                        <Typography variant='h6'>{label}</Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Markdown source={description} />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={onClickButton}
                        fullWidth
                    >
                        {cost}
                    </Button>
                </Grid>
            </Grid>
        </Card>
    );
}