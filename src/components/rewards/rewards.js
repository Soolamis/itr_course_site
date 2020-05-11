import React from 'react';
import Grid from '@material-ui/core/Grid';
import Reward from '../reward/reward';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: '0.5em',
    }
});

function RewardWrapper({
    cost,
    label,
    description,
    onClickButton,
}) {
    return (
        <Grid
            item
            xs={12}
        >
            <Reward
                cost={cost}
                label={label}
                description={description}
                onClickButton={onClickButton}
            />
        </Grid>
    );
}

export default function Rewards({
    value,
    onClickButton,
}) {
    const classes = useStyles();

    return (
        <Grid
            container
            alignItems='center'
            spacing={2}
            className={classes.root}
        >
            {value.map((elem) => {
                return (
                    <RewardWrapper key={elem.label} {...elem}/>
                );
            })}
        </Grid>
    );
}