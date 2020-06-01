import React from 'react';
import Uploader from '../imageUploader/imageUploader'

export default function ({
    url,
    onChange,
}) {
    return (
        <Uploader 
            img={url}
            onChange={onChange}
        />
    );
}