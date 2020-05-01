import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import AccountIcon from '@material-ui/icons/AccountBox';
import ExitIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import LabelWithIcon from '../labelWithIcon/labelWithIcon';

const locales = {
    ruRU: {
        logout: 'Выйти',
    },
    enUS: {
        logout: 'Logout',
    }
}

const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.primary.contrastText,
    },
    menuUsernameText: {
        marginLeft: '0.5em',
    }
}));

export default function UserWidget({
    locale = 'enUS',
    name,
    onProfile,
    onLogout,
}) {
    const classes = useStyles();
    const [ anchorEl, setAnchorEl ] = useState(null);
    const localeSet = locales[locale];

    return (
        <Box>
            <Button 
                className={classes.button}
                onClick={e => setAnchorEl(e.currentTarget)}
            >
                {name}
            </Button>
            <Menu 
                open={Boolean(anchorEl)} 
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={onProfile}>
                    <LabelWithIcon 
                        icon={<AccountIcon/>}
                        text={name}
                    />
                </MenuItem>
                <MenuItem onClick={onLogout}>
                    <ExitIcon />
                    <Typography className={classes.menuUsernameText}>
                        {localeSet.logout}
                    </Typography>
                </MenuItem>
            </Menu>
        </Box>
    )
}