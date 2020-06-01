import React from 'react';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    //Image,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { makeStyles } from '@material-ui/core/styles';
import RightIcon from '@material-ui/icons/ChevronRight';
import LeftIcon from '@material-ui/icons/ChevronLeft';
import Box from '@material-ui/core/Box';
import classnames from 'classnames'
import ReactPlayer from 'react-player';
import { MEDIA_IMAGE, MEDIA_VIDEO } from '../../constants';
import { Image } from 'cloudinary-react';

const useStyle = makeStyles({
    button: {
        position: 'absolute',
        top: '0',
        height: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.2)',
        },
        '&:active': {
            backgroundColor: 'rgba(0,0,0,0.4)'
        },
    },
    right: {
        right: '0',
    },
    left: {
        left: '0',
    },
    wrapper: {
        position: 'relative',
        width: '100%',
    },
    image: {
        objectFit: 'contain',
    },
    icon: {
        color: 'black',
    }
});

function ImageWrapper({
    src
}) {
    return (
        <Image
            publicId={src}
            width='100%'
        />
    );
}

function VideoWrapper({
    src
}) {
    return (
        <ReactPlayer 
            url={src}
            width='100%'
            height='100%'
        />
    );
}

const ChooseComponent = {
    [MEDIA_IMAGE]: ImageWrapper,
    [MEDIA_VIDEO]: VideoWrapper,
}

function SlideComponent({
    type,
    url,
}) {
    const Component = ChooseComponent[type];

    return (
        <Slide>
            <Component src={url} />
        </Slide>
    );
}

export default function Carousel({
    value,
}) {
    const classes = useStyle();

    return (
        <Box className={classes.wrapper}>
            <CarouselProvider
                naturalSlideWidth={2}
                naturalSlideHeight={1}
                totalSlides={value.length}
                infinite={true}
            >
                <Slider>
                    {value.map((elem) => <SlideComponent key={elem.src} {...elem} />)}
                </Slider>
                <ButtonBack className={classnames(classes.button, classes.left)}>
                    <LeftIcon className={classes.icon} />
                </ButtonBack>
                <ButtonNext className={classnames(classes.button, classes.right)}>
                    <RightIcon className={classes.icon} />
                </ButtonNext>
            </CarouselProvider>
        </Box>
    );
}