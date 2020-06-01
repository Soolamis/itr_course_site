import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Carousel from '../carousel/carousel';
import Tags from '../tags/tags';
import CampaignDescription from '../campaignDescription/campaignDescription';
import Goal from '../goal/goal';
import Rewards from '../rewards/rewards';
import Comments from '../comments/comments';
import News from '../news/news';
import Rating from '../rating/rating';
import Typography from '@material-ui/core/Typography';
import { useLocale } from '../../app/locale';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';

export default function Campaign({
    id,
    label,
    rating,
    onRatingChange,
    media,
    goalSum,
    goalEndDate,
    goalCurrent,
    description,
    rewards,
    canEdit,
}) {
    const locale = useLocale();
    const history = useHistory();
    const handleEdit = useCallback(() => {
        history.push(`/campaign/edit/${id}`)
    }, [history, id]);

    return (
        <Grid
            container
            direction='column'
        >
            <Grid
                container
                justify='space-between'
            >
                <Grid
                    item
                    xs={11}
                >
                    <Typography variant='h3'>
                        {label[locale] || ''}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    {canEdit ?
                        <IconButton onClick={handleEdit}>
                            <EditIcon />
                        </IconButton>
                        : <div></div>}
                </Grid>
            </Grid>
            <Grid item>

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
                    <CampaignDescription value={description[locale] || ''} />
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