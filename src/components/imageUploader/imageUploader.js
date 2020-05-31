import React, { useCallback, useRef, useEffect } from 'react';
import { Image } from 'cloudinary-react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
    LOCALE_RU,
    LOCALE_EN,
    CLOUD_NAME,
    CLOUD_UPLOAD_PRESET,
} from '../../constants';
import { useLocale } from '../../app/locale';

const locales = {
    [LOCALE_RU]: {
        remove: 'Удалить',
        add: 'Добавить',
    },
    [LOCALE_EN]: {
        remove: 'Remove',
        add: 'Add',
    },
}

export default function ({
    img,
    onChange,
}) {
    const locale = locales[useLocale()];
    const widget = useRef({ open: () => { } });
    const showAddImage = useCallback(() => {
        widget.current.open()
    }, [widget]);
    const handleRemoveImage = useCallback(() => {
        onChange('');
    }, [onChange]);
    const handleButtonClick = img ? handleRemoveImage : showAddImage;

    useEffect(() => {
        widget.current = window.cloudinary.createUploadWidget(
            {
                cloudName: CLOUD_NAME,
                uploadPreset: CLOUD_UPLOAD_PRESET,
            }, (error, result) => {
                if (result.event === 'success') {
                    onChange(result.info.public_id);
                }
            });
    }, [onChange]);

    return (
        <Grid
            container
            direction='column'
            alignItems='center'
        >
            {img ?
                <Grid item>
                    <Image
                        publicId={img}
                        width='300'
                    />
                </Grid>
                : <div></div>
            }
            <Grid item>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={handleButtonClick}
                >
                    {img ? locale.remove : locale.add}
                </Button>
            </Grid>
        </Grid>
    );
}