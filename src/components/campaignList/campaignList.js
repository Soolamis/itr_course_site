import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../campaignCard/campaignCard';
import { useLocale } from '../../app/locale';
import Pagination from '@material-ui/lab/Pagination';
import { CAMPAIGN_PER_PAGE } from '../../constants';

export default function ({ 
    campaigns, 
    name, 
    page, 
    onChange,
}) {
    const locale = useLocale();
    const pageCount = Math.floor(campaigns.length / CAMPAIGN_PER_PAGE);
    const offset = page * CAMPAIGN_PER_PAGE;

    return (
        <Paper>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h5'>
                        {name ? name[locale] : 'blank'}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid 
                container
                spacing={1}
                justify='space-around'
                alignItems='center'
            >
                {
                    campaigns ?
                        campaigns.slice(offset, offset + CAMPAIGN_PER_PAGE)
                            .map((campaign) => {
                                return (
                                    <Grid item key={campaign.id}>
                                        <Card
                                            img={campaign.avatar}
                                            name={campaign.names[locale]}
                                            id={campaign.id}
                                        />
                                    </Grid>
                                )
                            })
                        : <div></div>
                }
            </Grid>
            {pageCount ?
                <Pagination
                    count={pageCount}
                    page={page}
                    onChange={onChange}
                /> : <div></div>
            }
        </Paper>
    );
}