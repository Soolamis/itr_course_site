import React, { useCallback, useEffect } from 'react';
import CampaignComponent from '../../components/campaign/campaign';
import { connect } from 'react-redux';
import { selectors, actions } from '../../store/campaign/reducer';
import { id } from '../../store/user/selectors';

const Campaign = ({
    label,
    userRating,
    averageRating,
    media,
    dispatch,
    goalSum,
    goalCurrent,
    goalEndDate,
    description,
    rewards,
    user,
    owner,
    match:{ params: { id } }
}) => {
    const handleRatingChange = useCallback((value) => {
        dispatch(actions.setUserRating(value));
    }, [dispatch])

    useEffect(
        () => { dispatch(actions.initPage(id)) },
        [dispatch, id]
    );

    return (
        <CampaignComponent
            id={id}
            label={label}
            canEdit={user === owner}
            rating={{ user: userRating, average: averageRating }}
            onRatingChange={handleRatingChange}
            media={media}
            goalSum={goalSum}
            goalCurrent={goalCurrent}
            goalEndDate={goalEndDate}
            description={description}
            rewards={rewards}
        />
    );
}

function mapStateToProps(state) {
    return {
        label: selectors.label(state),
        userRating: selectors.userRating(state),
        averageRating: selectors.averageRating(state),
        media: selectors.media(state),
        goalSum: selectors.goalSum(state),
        goalCurrent: selectors.goalCurrent(state),
        goalEndDate: selectors.goalEndDate(state),
        description: selectors.description(state),
        rewards: selectors.rewards(state),
        owner: selectors.owner(state),
        user: id(state),
    }
}

export default connect(mapStateToProps)(Campaign);