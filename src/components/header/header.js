import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import localeSets from './locale';
import HeaderUserWidget from '../../containers/headerUserWidget/headerUserWidget';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        color: theme.palette.primary.contrastText,
    },
    pageName: {
        marginLeft: '1em',
        flexGrow: '1',
        flexShrink: '1',
    },
}));

export default function Header({
    locale = 'enUS',
    onMenuButtonClick,
    pageName,
}) {
    const styles = useStyles();
    const localeSet = localeSets[locale];

    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                    className={styles.menuButton}
                    aria-label='menu'
                    onClick={onMenuButtonClick}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    className={styles.pageName}
                    variant='h6'
                >
                    {localeSet.pageName[pageName]}
                </Typography>
                <Hidden xsDown>
                    <HeaderUserWidget />
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}