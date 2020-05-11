import React from 'react';
import Typography from '@material-ui/core/Typography';
import Progress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const locales = {
    ruRU: {
        loc: 'ru-RU',
        format: 'DD.MM.YYYY',
        endDate: 'Дата окончания',
        left: 'Осталось',
        goal: 'Цель',
    },
    enUS: {
        loc: 'en-US',
        format: 'MM.DD.YYYY',
        endDate: 'Expiration',
        left: 'Left',
        goal: 'Goal',
    },
}

const useStyles = makeStyles({
    progressRoot: {
        height: '0.4em',
        borderRadius: '3px',
    }
});

export default function Goal({
    locale = 'enUS',
    date,
    goal,
    current,
}) {
    const classes = useStyles();
    const localeSet = locales[locale];

    return (
        <Grid
            container
            direction='column'
            spacing={3}
        >
            <Grid
                item
                container
                justify='space-between'
                alignItems='center'
            >
                <Grid item>
                    <Typography variant='h3'>{localeSet.goal}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h3'>{goal}</Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Progress
                    classes={{ root: classes.progressRoot }}
                    variant='determinate'
                    value={(current / goal) * 100}
                />
                <Grid
                    item
                    container
                    justify='flex-end'
                    direction='row'
                    fullWidth
                >
                    <Grid item>
                        <Typography variant='h6'>{current} из {goal}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    justify='space-between'
                    alignItems='center'
                >
                    <Grid item>
                        {localeSet.endDate}
                    </Grid>
                    <Grid item>
                        <Typography variant='h6' component='span'>
                            {Intl.DateTimeFormat(localeSet.loc).format(date)}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify='space-between'
                    alignItems='center'
                >
                    <Grid item>
                        {localeSet.left}
                    </Grid>
                    <Grid item>
                        <Typography variant='h6' component='span'>
                            {(new Intl.RelativeTimeFormat(localeSet.loc))
                                .format(
                                    Math.trunc((date - Date.now())/1000/60/60/24), 'day')}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}