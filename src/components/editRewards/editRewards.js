import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputReward from '../inputReward/inputReward';
import Reward from '../reward/reward';
import Typography from '@material-ui/core/Typography';
import { useLocale } from '../../app/locale';
import { LOCALE_RU, LOCALE_EN } from '../../constants';
import RewardList from '../editRewardList/editRewardList';
import SelectLocale from '../selectLocale/selectLocale';

const locales = {
    [LOCALE_RU]: {
        label: 'Награды',
    },
    [LOCALE_EN]: {
        label: 'Rewards',
    },
}

export default function ({
    newElem,
    onChangeNewElem,
    locale,
    onChangeLocale,
    rewards, 
    onAdd,
    onChangePosition,
    onDelete,
    onEdit,
}) {
    const localeSet = locales[useLocale()];

    return (
        <Grid
            container
            spacing={1}
        >
            <Grid
                item
                xs={12}
                sm={12}
                container
                spacing={1}
                alignItems='center'
            >
                <Grid item>
                    <Typography variant='h5'>
                        {localeSet.label}
                    </Typography>
                </Grid>
                <Grid item>
                    <SelectLocale 
                        value={locale}
                        onChange={e => onChangeLocale(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                sm={6}
                xs={12}
            >
                <InputReward
                    {...newElem}
                    onChange={onChangeNewElem}
                    onAdd={onAdd}
                />
            </Grid>
            <Grid
                item
                sm={6}
                xs={12}
                container
                direction='column'
                justify='space-around'
            >
                <Grid item>
                    <Reward
                        label={newElem.name}
                        description={newElem.description}
                        cost={newElem.cost}
                    />
                </Grid>
            </Grid>
            <Grid 
                item
                xs={12}
            >
                <RewardList 
                    rewards={rewards}
                    onChangePosition={onChangePosition}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            </Grid>
        </Grid>
    );
}