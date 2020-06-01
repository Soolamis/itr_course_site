import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CampaignList from '../campaignList/campaignList';

function CampaignListItem(props) {
    return (
        <Grid 
            item
            xs={12}
        >
            <CampaignList {...props}/>
        </Grid>
    );
}

function generateCampaignLists(campaigns, types, pagination, typeNames, onChange) {
    if(types === {}) {
       return <div></div> 
    } else {
        return Object.keys(types).map(
            (key) => {
                return (
                    <CampaignListItem 
                        name={typeNames[key]}
                        campaigns={types[key].map((id) => {
                            return {id: id, ...campaigns[id]};
                        })}
                        page={pagination[key]}
                        onChange={(page) => onChange(key, page)}
                    />
                );
            });
    }
}

export default function ({
    campaigns,
    types,
    pagination,
    typeNames,
    onChangePage,
}) {
    return (
        <Box>
            <Grid container>
                {generateCampaignLists(campaigns, types, pagination, typeNames, onChangePage)}
            </Grid>
        </Box>
    );
}