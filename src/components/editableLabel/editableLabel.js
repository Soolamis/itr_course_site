import React from 'react';
import UseBox from '../boxWithEditIconButton/boxWithEditIconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import EditBox from '../boxWithApplyIconButton/boxWithApplyIconButton';
import { MODE_EDIT, MODE_USE } from '../../constants';

function Label({
    value,
}) {
    return (
        <Typography variant='h4'>
            {value}
        </Typography>
    );
}

function LabelWithEditIcon({
    value,
    onButtonClick,
}) {
    return (
        <UseBox onButtonClick={onButtonClick}>
            <Label value={value} />
        </UseBox>
    );
}

function Edit({
    value,
    onButtonClick,
    onChange,
}) {
    return (
        <EditBox onButtonClick={onButtonClick}>
            <TextField
                fullWidth
                variant='outlined'
                value={value}
                multiline
                onChange={event => onChange(event.target.value)}
            />
        </EditBox>
    );
}

export default function EditableLabel({
    value,
    onChange,
    onButtonClick,
    canEdit,
    mode,
}) {
    let Component;
    if (canEdit) {
        switch (mode) {
            default: throw Error('Wrong mode: '+mode);
            case MODE_USE:
                Component = LabelWithEditIcon;
                break;
            case MODE_EDIT:
                Component = Edit;
                break;
        }
    } else Component = Label;

    return <Component
        value={value}
        onChange={onChange}
        onButtonClick={onButtonClick}
    />
}