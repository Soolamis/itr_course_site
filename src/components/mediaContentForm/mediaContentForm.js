import React from 'react';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container'
import {
    LOCALE_RU,
    LOCALE_EN,
    MEDIA_IMAGE,
    MEDIA_VIDEO,
} from '../../constants';
import ImageForm from '../mediaContentImageForm/mediaContentImageForm';
import VideoForm from '../mediaContentVideoForm/mediaContentVideoForm';
import Grid from '@material-ui/core/Grid';
import PositionInput from '../inputWithIncrementButtons/inputWithIncrementButtons';
import Button from '@material-ui/core/Button';
import { useLocale } from '../../app/locale';

const locales = {
    [LOCALE_RU]: {
        image: 'Изображение',
        video: 'Видео',
        button: 'Добавить',
    },
    [LOCALE_EN]: {
        image: 'Image',
        video: 'Video',
        button: 'Add'
    },
}

function valueToMediaContent(value) {
    switch (value) {
        case 0: return MEDIA_IMAGE;
        case 1: return MEDIA_VIDEO;
        default: throw new Error(`Wrong value ${value}`);
    }
}

function mediaContentToValue(content) {
    switch (content) {
        case MEDIA_IMAGE: return 0;
        case MEDIA_VIDEO: return 1;
        default: throw new Error(`Wrong media content ${content}`);
    }
}

function TabContent(props) {
    const { type, ...rest } = props;
    switch (type) {
        case MEDIA_IMAGE: return <ImageForm {...rest} />;
        case MEDIA_VIDEO: return <VideoForm {...rest} />;
        default: return <div></div>
    }
}

export default function ({
    type = MEDIA_IMAGE,
    onChangeType,
    url,
    onChangeUrl,
    position,
    onChangePosition,
    onAdd,
}) {
    const locale = useLocale();
    const localeSet = locales[locale];

    return (
        <Box>
            <Tabs
                value={mediaContentToValue(type)}
                onChange={(_, value) => {
                    onChangeType(valueToMediaContent(value));
                }}
                fullWidth
                centered
            >
                <Tab label={localeSet.image} />
                <Tab label={localeSet.video} />
            </Tabs>
            <Container>
                <TabContent
                    type={type}
                    url={url}
                    onChange={onChangeUrl}
                />
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                    spacing={1}
                >
                    <Grid
                        item
                    >
                        <PositionInput
                            value={position}
                            onChange={onChangePosition}
                            label='Position'
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={onAdd}
                        >
                            {localeSet.button}
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
}