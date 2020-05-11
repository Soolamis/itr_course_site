import React from 'react';
import Grid from '@material-ui/core/Grid';
import Carousel from '../carousel/carousel';
import Tags from '../tags/tags';
import CampaignDescription from '../campaignDescription/campaignDescription';
import Goal from '../goal/goal';
import Rewards from '../rewards/rewards';
import Comments from '../comments/comments';
import News from '../news/news';
import Rating from '../rating/rating';
import EditableLabel from '../editableLabel/editableLabel';

export default function Campaign({
    label,
    labelMode,
    onToggleLabelMode,
    onLabelChange,
    canEdit,
    rating,
    onRatingChange,
    media,
    goalSum,
    goalEndDate,
    goalCurrent,
    description,
    rewards
}) {
    return (
        <Grid
            container
            direction='column'
        >
            <Grid item>
                <EditableLabel
                    value={label}
                    mode={labelMode}
                    onButtonClick={onToggleLabelMode}
                    onChange={onLabelChange}
                    canEdit={canEdit}
                />
            </Grid>
            <Grid item>
                <Rating
                    user={rating.user}
                    average={rating.average}
                    onChange={onRatingChange}
                />
            </Grid>
            <Grid item>
                <Tags />
            </Grid>
            <Grid
                item
                container
                spacing={2}
            >
                <Grid item sm={8} xs={12}>
                    <Carousel value={media} />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Goal
                        date={goalEndDate}
                        goal={goalSum}
                        current={goalCurrent}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                spacing={2}
            >
                <Grid
                    item
                    sm={8}
                    xs={12}
                >
                    <CampaignDescription value={description}/>
                    <News />
                </Grid>
                <Grid 
                    item
                    sm={4}
                    xs={12}
                >
                    <Rewards value={rewards} />
                </Grid>
            </Grid>
            <Grid item>
                <Comments />
            </Grid>
        </Grid>
    )
}