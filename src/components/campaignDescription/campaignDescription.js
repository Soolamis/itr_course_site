import React from 'react';
import Typography from '@material-ui/core/Typography';
import Markdown from 'react-markdown';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useLocale } from '../../app/locale';

const useStyles = makeStyles({
    root: {
        marginTop: '0.5em',
    }
});

const locales = {
    ruRU: {
        description: 'Описание',
    },
    enUS: {
        description: 'Description',
    },
}

export default function CampaignDescription({
    value,
}) {
    const locale = useLocale();
    const localeSet = locales[locale];
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant='h4'>
                {localeSet.description}
            </Typography>
            <Markdown source={value}/>
        </Box>
    );
}