import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    userRatingStar: {
        color: 'darkorange',
    }
})

export default function({
    user,
    average,
    onChange,
}) {
    const classes = useStyles();

    return (
        <Rating 
            classes={{
                iconFilled: user ? classes.userRatingStar : undefined,
                iconHover: classes.userRatingStar,
            }}
            precision={0.5}
            value={user || average}
            onChange={(_, value) => {
                onChange(value);
            }}
        />
    )
}