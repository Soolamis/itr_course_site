import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import ReactPlayer from 'react-player';
import {
    MEDIA_IMAGE,
    MEDIA_VIDEO,
    LOCALE_RU,
    LOCALE_EN,
} from '../../constants';
import Button from '@material-ui/core/Button';
import { useLocale } from '../../app/locale';
import IconButton from '@material-ui/core/IconButton';
import Left from '@material-ui/icons/ChevronLeft';
import Right from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import { Image as CldImage } from 'cloudinary-react';

const useStyles = makeStyles({
    card: {
        width: '15em',
    }
})

const locales = {
    [LOCALE_RU]: {
        delete: 'Удалить',
    },
    [LOCALE_EN]: {
        delete: 'Remove',
    },
}

function Image({
    url,
}) {
    return (
        <Box>
            <CldImage publicId={url} width='300' />
        </Box>
    );
}

function Video({
    url,
}) {
    return (
        <Box>
            <ReactPlayer
                url={url}
                light
                width='100%'
            />
        </Box>
    );
}

function Elem({
    type,
    url,
    onChangePosition,
    position,
    onDelete,
}) {
    const locale = useLocale();
    const localeSet = locales[locale];
    const classes = useStyles();

    let Component;
    switch (type) {
        case MEDIA_IMAGE:
            Component = Image;
            break;
        case MEDIA_VIDEO:
            Component = Video;
            break;
        default: throw Error(`Wrong media type ${type}`);
    }

    return (
        <Grid
            item
        >
            <Grid container alignItems='center' >
                <Grid item>
                    <IconButton onClick={() => onChangePosition(position - 1)}>
                        <Left />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Card className={classes.card}>
                        <Component url={url} />
                        <Grid
                            container
                            justify='space-around'
                        >
                            <Grid item>
                                <Button
                                    color='primary'
                                    onClick={onDelete}
                                >
                                    {localeSet.delete}
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item>
                    <IconButton onClick={() => onChangePosition(position + 1)}>
                        <Right />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default function ({
    value,
    valueOrder,
    onChangePosition,
    onDelete,
}) {
    return (
        <Grid
            container
            direction='flex-start'
            alignItems='center'
            spacing={1}
        >
            {valueOrder ? valueOrder.map((url, i) => {
                return (
                    <Elem
                        key={url}
                        url={url}
                        type={value[url].type}
                        position={i}
                        onChangePosition={(position) => {
                            onChangePosition(url, position);
                        }}
                        onDelete={() => onDelete(url)}
                    />
                );
            }) : <div />}
        </Grid>
    );
}