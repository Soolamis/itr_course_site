import {
    createSlice,
    combineReducers,
    createSelector,
} from '@reduxjs/toolkit';
import {
    CAMPAING_TYPES,
    LOCALE_DEFAULT,
    LOCALE_EN,
    LOCALE_RU,
    MEDIA_IMAGE,
} from '../../constants';

const dataSlice = createSlice({
    name: 'editCampaign/data',
    initialState: {
        name: {
            [LOCALE_EN]: '',
            [LOCALE_RU]: '',
        },
        nameLocale: LOCALE_DEFAULT,
        campaignType: CAMPAING_TYPES.EDUCATION,
        descriptionLocale: LOCALE_DEFAULT,
        description: {
            [LOCALE_EN]: '',
            [LOCALE_RU]: '',
        },
        avatar: undefined,
        goalFinishDate: new Date(),
        goalSum: '',
        mediaContent: {
            newElem: {
                type: MEDIA_IMAGE,
                url: '',
                position: 0,
            },
            elems: {},
            elemsOrder: [],
        },
        rewards: {
            locale: [LOCALE_DEFAULT],
            newElem: {
                [LOCALE_RU]: {
                    name: '',
                    description: '',
                },
                [LOCALE_EN]: {
                    name: '',
                    description: '',
                },
                cost: 0,
            },
            rewards: {},
            rewardOrder: [],
        },
    },
    reducers: {
        setName(state, action) {
            state.name[state.nameLocale] = action.payload;
        },
        setCampaignType(state, action) {
            state.campaignType = action.payload;
        },
        setNameLocale(state, action) {
            state.nameLocale = action.payload;
        },
        setDescriptionLocale(state, action) {
            state.descriptionLocale = action.payload;
        },
        setDescription(state, action) {
            state.description[state.descriptionLocale] = action.payload;
        },
        setAvatar(state, action) {
            state.avatar = action.payload;
        },
        setGoalFinishDate(state, action) {
            state.goalFinishDate = action.payload;
        },
        setGoalSum(state, action) {
            if (/^[\d]*$/g.test(action.payload)) {
                state.goalSum = action.payload;
            }
        },
        setMediaContentNewElemType: (state, action) => {
            state.mediaContent.newElem.type = action.payload;
        },
        setMediaContentNewElemUrl: (state, action) => {
            state.mediaContent.newElem.url = action.payload;
        },
        setMediaContentNewElemPosition: (state, action) => {
            const maxLen = state.mediaContent.elemsOrder.length;

            if (maxLen < action.payload) {
                state.mediaContent.newElem.position = maxLen;
            } else if (action.payload < 0) {
                state.mediaContent.newElem.position = 0;
            } else {
                state.mediaContent.newElem.position = action.payload;
            }
        },
        addMediaContent: (state, action) => {
            const { url, position, type } = state.mediaContent.newElem;

            state.mediaContent.elems = {
                ...state.mediaContent.elems,
                [url]: {
                    type: type,
                    url: url,
                },
            }
            state.mediaContent.elemsOrder = [
                ...state.mediaContent.elemsOrder.slice(0, position),
                url,
                ...state.mediaContent.elemsOrder.slice(position),
            ]
        },
        clearMediaContentNewElem: (state, action) => {
            state.mediaContent.newElem = {
                type: MEDIA_IMAGE,
                url: '',
                position: 0,
            }
        },
        removeMediaContent: (state, action) => {
            const elems = { ...state.mediaContent.elems };
            let position = 0;

            delete elems[action.payload];
            state.mediaContent.elems = elems;
            state.mediaContent.elemsOrder.forEach((cur, i) => {
                if (cur === action.payload) {
                    position = i
                }
            });
            state.mediaContent.elemsOrder = [
                ...state.mediaContent.elemsOrder.slice(0, position),
                ...state.mediaContent.elemsOrder.slice(position + 1),
            ];
        },
        changeMediaContentPosition: (state, action) => {
            const newPosition = action.payload.position;
            const reqUrl = action.payload.url;
            const elems = [...state.mediaContent.elemsOrder];

            if (newPosition >= 0 && newPosition < elems.length) {
                let oldPosition;
                let buf;

                elems.forEach((cur, i) => {
                    if (cur === reqUrl) {
                        oldPosition = i;
                    }
                });
                buf = elems[newPosition];
                elems[newPosition] = elems[oldPosition];
                elems[oldPosition] = buf;
                state.mediaContent.elemsOrder = elems;
            }
        },
        setRewardsLocale: (state, action) => {
            state.rewards.locale = action.payload;
        },
        setRewardsNewElemName: (state, action) => {
            const locale = state.rewards.locale;

            state.rewards.newElem[locale].name = action.payload;
        },
        setRewardsNewElemDescription: (state, action) => {
            const locale = state.rewards.locale;

            state.rewards.newElem[locale].description = action.payload;
        },
        setRewardsNewElemCost: (state, action) => {
            const cost = action.payload;

            if (cost > -1) {
                state.rewards.newElem.cost = action.payload;
            }
        },
        addReward: (state) => {
            const rewards = state.rewards;
            const id = rewards.newElem[LOCALE_EN].name || rewards.newElem[LOCALE_RU].name;

            if (id && !(rewards.rewards[id])) {
                state.rewards.rewards = {
                    ...rewards.rewards,
                    [id]: {
                        ...rewards.newElem,
                    },
                }
                state.rewards.rewardOrder.push(id);
            }
        },
        changeRewardPosition: (state, action) => {
            const { id, position } = action.payload;
            const order = [...state.rewards.rewardOrder];
            const maxLen = order.length;
            let oldPosition;
            let buff;

            if ((position < maxLen) && (position >= 0)) {
                for (let i = 0; i < maxLen; i++) {
                    if (order[i] === id) {
                        oldPosition = i;
                        break;
                    }
                }
                buff = order[oldPosition];
                order[oldPosition] = order[position];
                order[position] = buff;
                state.rewards.rewardOrder = order;
            }
        },
        removeReward: (state, action) => {
            const id = action.payload;
            let order = [...state.rewards.rewardOrder];
            let rewards = { ...state.rewards.rewards };
            const position = order.findIndex((value) => {
                return id === value;
            });

            delete rewards[id];
            if (position >= 0) {
                order = [
                    ...order.slice(0, position),
                    ...order.slice(position+1),
                ];
            }
            state.rewards.rewards = rewards;
            state.rewards.rewardOrder = order;
        }
    }
});

const editCampaignSelector = state => state.editCampaign;
const dataSelector = createSelector(
    editCampaignSelector,
    (state) => state.data,
);
const nameSelector = createSelector(
    dataSelector,
    (data) => data.name[data.nameLocale],
);
const campaignTypeSelector = createSelector(
    dataSelector,
    (data) => data.campaignType,
);
const nameLocaleSelector = createSelector(
    dataSelector,
    (data) => data.nameLocale,
);
const descriptionLocaleSelector = createSelector(
    dataSelector,
    (data) => data.descriptionLocale,
);
const descriptionSelector = createSelector(
    dataSelector,
    (data) => data.description[data.descriptionLocale],
);
const avatarSelector = createSelector(
    dataSelector,
    (data) => data.avatar,
);
const goalFinishDateSelector = createSelector(
    dataSelector,
    (data) => data.goalFinishDate,
);
const goalSumSelector = createSelector(
    dataSelector,
    (data) => data.goalSum,
);
const mediaContentSelector = createSelector(
    dataSelector,
    (data) => data.mediaContent,
);
const mediaContentNewElemSelector = createSelector(
    mediaContentSelector,
    (content) => content.newElem,
);
const mediaContentNewElemTypeSelector = createSelector(
    mediaContentNewElemSelector,
    (elem) => elem.type,
);
const mediaContentNewElemUrlSelector = createSelector(
    mediaContentNewElemSelector,
    (elem) => elem.url,
);
const mediaContentNewElemPositionSelector = createSelector(
    mediaContentNewElemSelector,
    (elem) => elem.position,
);
const mediaContentElemsSelector = createSelector(
    mediaContentSelector,
    (content) => content.elems,
);
const mediaContentElemsOrderSelector = createSelector(
    mediaContentSelector,
    (content) => content.elemsOrder,
);
const rewardsSelector = createSelector(
    dataSelector,
    (data) => data.rewards,
);
const rewardsNewElemSelector = createSelector(
    rewardsSelector,
    (rewards) => {
        const newElem = rewards.newElem;
        return {
            cost: newElem.cost,
            ...newElem[rewards.locale]
        }
    },
);
const rewardsLocale = createSelector(
    rewardsSelector,
    (rewards) => rewards.locale,
);
const rewardsListSelector = createSelector(
    rewardsSelector,
    (rewards) => {
        return rewards.rewardOrder.map((id) => {
            const locale = rewards.locale;
            const reward = rewards.rewards[id];

            return {
                id: id,
                cost: reward.cost,
                ...reward[locale],
            }
        });
    },
)

export const selectors = {
    name: nameSelector,
    campaignType: campaignTypeSelector,
    nameLocale: nameLocaleSelector,
    descriptionLocale: descriptionLocaleSelector,
    description: descriptionSelector,
    avatar: avatarSelector,
    goalFinishDate: goalFinishDateSelector,
    goalSum: goalSumSelector,
    mediaContent: mediaContentSelector,
    mediaContentNewElemType: mediaContentNewElemTypeSelector,
    mediaContentNewElemUrl: mediaContentNewElemUrlSelector,
    mediaContentNewElemPosition: mediaContentNewElemPositionSelector,
    mediaContentElems: mediaContentElemsSelector,
    mediaContentElemsOrder: mediaContentElemsOrderSelector,
    rewardsNewElem: rewardsNewElemSelector,
    rewardsLocale: rewardsLocale,
    rewards: rewardsListSelector,
}

export const actions = {
    ...dataSlice.actions,
}

export default combineReducers({
    data: dataSlice.reducer,
});