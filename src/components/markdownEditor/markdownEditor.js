import React from 'react';
import Editor from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

export default function ({
    onChange,
    value,
    id,
}) {
    return (
        <Editor
            id={id}
            value={value}
            onChange={onChange}
            options={{
                toolbar: [
                    'bold', 
                    'italic',
                    'heading',
                    '|',
                    'quote',
                    'ordered-list',
                    'unordered-list',
                    '|',
                    'link',
                    'image',
                ],
            }}
        />
    );
}