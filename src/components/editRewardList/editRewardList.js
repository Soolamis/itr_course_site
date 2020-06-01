import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Left from '@material-ui/icons/ChevronLeft';
import Right from '@material-ui/icons/ChevronRight';
import Reward from '../reward/reward';
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';

function RewardWrapper({
    name,
    description,
    cost,
    id,
    onDelete,
    onChangePosition,
    position,
    onEdit,
}) {
    const handleChangePosition = useCallback(
        (position) => {
            onChangePosition(id, position);
        }, [id, onChangePosition]
    );

    return (
        <Grid
            item
            sm={4}
            xs={12}
            container
            alignItems='flex-start'
            wrap='nowrap'
        >
            <Grid
                item
                xs={2}
                container
                direction='column'
            >
                <IconButton
                    onClick={_ => onEdit(id)}
                >
                    <Edit />
                </IconButton>
                <IconButton
                    onClick={_ => { handleChangePosition(position - 1) }}
                >
                    <Left />
                </IconButton>
            </Grid>
            <Grid
                item
                xs={8}
            >
                <Reward
                    label={name}
                    description={description}
                    cost={cost}
                />
            </Grid>
            <Grid
                item
                xs={2}
                container
                direction='column'
                alignItems='flex-start'
                wrap='nowrap'
            >
                <Grid item>
                    <IconButton
                        onClick={_ => { onDelete(id) }}
                    >
                        <Close />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        onClick={_ => { handleChangePosition(position + 1) }}
                    >
                        <Right />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid
                item
                xs={6}
            >

            </Grid>
        </Grid>
    );
}

export default function ({
    rewards,
    onChangePosition,
    onDelete,
    onEdit,
}) {
    return (
        <Grid
            container
            spacing={2}
        >
            {rewards ? rewards.map((reward, i) => {
                return (
                    <RewardWrapper
                        key={reward.name}
                        position={i}
                        {...reward}
                        onChangePosition={onChangePosition}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                );
            }) : <div />}
        </Grid>
    );
}