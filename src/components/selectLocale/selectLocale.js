import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { LOCALE_NAME } from '../../shareLocale';

export default function ({
    value,
    onChange,
    id, 
    name,
    fullWidth,
}) {
    return (
        <Select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            fullWidth={fullWidth}
        >
            {Object.keys(LOCALE_NAME).map((value) => {
                const label = LOCALE_NAME[value];

                return (
                    <MenuItem key={value} value={value}>
                        {label}
                     </MenuItem>
                );
            })}
        </Select>
    );
}
