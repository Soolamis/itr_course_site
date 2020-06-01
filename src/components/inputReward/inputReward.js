import React from 'react';
import TextField from '@material-ui/core/TextField';
import Markdown from 'react-simplemde-editor';
import Grid from '@material-ui/core/Grid';
import { useLocale } from '../../app/locale';
import { LOCALE_RU, LOCALE_EN } from '../../constants';
import Button from '@material-ui/core/Button';

const locales = {
    [LOCALE_RU]: {
        name: 'Название',
        cost: 'Стоимость',
        add: 'Добавить',
    },
    [LOCALE_EN]: {
        name: 'Name',
        cost: 'Cost',
        add: 'Add',
    },
}

export default function ({
    name,
    description,
    cost,
    onChange,
    onAdd,
}) {
    const locale = locales[useLocale()];

    return (
        <Grid
            container
            spacing={1}
            justify='space-around'
        >
            <Grid
                item
                xs={12}
            >
                <TextField
                    label={locale.name}
                    value={name}
                    onChange={e => onChange('name', e.target.value)}
                    fullWidth
                />
            </Grid>
            <Grid
                item
                xs={12}
            >
                <Markdown
                    value={description}
                    onChange={value => onChange('description', value)}
                />
            </Grid>
            <Grid
                item
                xs={12}
            >
                <TextField
                    label={locale.cost}
                    value={cost}
                    onChange={e => onChange('cost', e.target.value)}
                    fullWidth
                />
            </Grid>
            <Grid
                item
                xs={4}
            >
                <Button 
                    variant='contained'
                    color='primary'
                    onClick={onAdd}
                >
                    {locale.add}
                </Button>
            </Grid>
        </Grid>
    );
}