import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import ImagePreviewPlugin from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(ImagePreviewPlugin);

export default function({
    file,
    onUpdate,
}) {
    return (
        <FilePond
            allowMultiple={false}
            files={file}
        />

    );
}