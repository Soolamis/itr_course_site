import {
    MEDIA_CONTENT,
    USER_RATING,
    AVERAGE_RATING,
    CAMPAING_LABEL,
    GOAL_CURRENT,
    GOAL_END_TIME,
    GOAL_GOAL,
    DESCRIPTION,
    REWARDS,
} from '../constants';

export async function getCampaignData(id) {
    return {
        label: CAMPAING_LABEL,
        userRating: USER_RATING,
        averageRating: AVERAGE_RATING,
        media: MEDIA_CONTENT,
        goal: {
            goal: GOAL_GOAL,
            endDate: GOAL_END_TIME,
            current: GOAL_CURRENT,
        },
        description: DESCRIPTION,
        rewards: REWARDS,
    }
}

export async function syncLabel(label) {
    return 'ok';
}