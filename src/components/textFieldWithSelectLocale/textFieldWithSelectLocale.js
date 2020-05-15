import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SelectLocale from '../selectLocale/selectLocale';

export default function ({
    text,
    locale,
    onTextChange,
    onLocaleChange,
    nameText,
    nameLocale,
}) {
    return (
        <Grid 
            container
            alignItems='flex-end'
            spacing={1}
        >
            <Grid
                item
                xs={9}
            >
                <TextField
                    name={nameText}
                    fullWidth
                    label='Name'
                    value={text}
                    onChange={e => onTextChange(e.target.value)}
                />
            </Grid>
            <Grid
                item
                xs={3}
            >
                <SelectLocale
                    name={nameLocale}
                    value={locale}
                    onChange={e => onLocaleChange(e.target.value)}
                    fullWidth
                />
            </Grid>
        </Grid>
    );
}