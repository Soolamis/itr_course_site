import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';

export default function NavLinkListItem({
    to,
    icon,
    text,
}) {
    const Icon = icon;

    return (
        <ListItem button component={NavLink} to={to}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <ListItemText>
                {text}
            </ListItemText>
        </ListItem>
    );
}