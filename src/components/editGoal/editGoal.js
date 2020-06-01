import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { LOCALE_RU, LOCALE_EN, LOCALE_DEFAULT } from '../../constants';
import { DatePicker } from '@material-ui/pickers';

const locales = {
    [LOCALE_RU]: {
        costLabel: 'Цель',
        dateLabel: 'Дата',
    },
    [LOCALE_EN]: {
        costLabel: 'Goal',
        dateLabel: 'Date',
    },
}

export default function ({
    locale = LOCALE_DEFAULT,
    sum,
    onSumChange,
    date,
    onDateChange
}) {
    const localeSet = locales[locale];

    return (
        <Grid
            container
            spacing={1}
            alignItems='flex-end'
        >
            <Grid 
                item
                xs={12}
                sm={6}
            >
                <TextField
                    fullWidth
                    label={localeSet.costLabel}
                    value={sum}
                    onChange={e => onSumChange(e.target.value)}
                    xs={12}
                />
            </Grid>
            <Grid 
                item
                xs={12}
                sm={6}
            >
                <DatePicker 
                    value={date}
                    onChange={onDateChange}
                    fullWidth
                />
            </Grid>
        </Grid>
    );
}