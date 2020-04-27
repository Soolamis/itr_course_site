import React from 'react';
import LabelWithIcon from '../labelWithIcon/labelWithIcon';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AccountIcon from '@material-ui/icons/AccountBox';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const locales = {
    ruRU: {
        profile: 'Профиль',
        logout: 'Выйти',
    },
    enUS: {
        profile: 'Profile',
        logout: 'Logout',
    }
}

const useStyles = makeStyles({
    root: {
        boxShadow: 'none',
    }
});

export default function MainMenuUserWidget({
    name,
    locale = 'enUS'
}) {
    const localeSet = locales[locale];
    const classes = useStyles();

    return (
        <Box>
            <ExpansionPanel 
                square={true}
                classes={{root: classes.root}}
            >
                <ExpansionPanelSummary>
                    <Typography>
                        {name}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>
                        <ListItem button>
                            <LabelWithIcon
                                icon={<AccountIcon />}
                                text={localeSet.profile}
                            />
                        </ListItem>
                        <ListItem button>
                            <LabelWithIcon
                                icon={<LogoutIcon />}
                                text={localeSet.logout}
                            />
                        </ListItem>
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Box>
    );
}