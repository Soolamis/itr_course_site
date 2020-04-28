import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import NavLinkListItem from '../navLinkListItem/navLinkListItem'
import HomeIcon from '@material-ui/icons/Home';
import CampaingsIcon from '@material-ui/icons/LocalLibrary';
import MainMenuUserWidget from '../../containers/mainMenuUserWidget/mainMenuUserWidget';
import Hidden from '@material-ui/core/Hidden';

const locales = {
    ruRU: {
        page: {
            main: 'Главная',
            campaings: 'Компании',
        }
    },
    enUS: {
        page: {
            main: 'Main',
            campaings: 'Campaings',
        }
    },
}

const useStyles = makeStyles({
    surface: {
        width: '100vw',
        maxWidth: '360px'
    },
    closeButton: {
        width: '100%',
    }
});

export default function MainMenu({
    locale = 'enUS',
    isOpen,
    onClose,
}) {
    const classes = useStyles();
    const localeSet = locales[locale];

    return (
        <Drawer
            anchor='left'
            open={isOpen}
            onClose={onClose}
        >

            <List
                className={classes.surface}
                component='nav'
            >
                <Button
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <ArrowLeftIcon />
                </Button>
                <Divider />
                <Hidden smUp>
                    <MainMenuUserWidget />
                    <Divider />
                </Hidden>
                <NavLinkListItem
                    to='/'
                    icon={HomeIcon}
                    text={localeSet.page.main}
                />
                <NavLinkListItem
                    to='/'
                    icon={CampaingsIcon}
                    text={localeSet.page.campaings}
                />
            </List>
        </Drawer>
    )
}