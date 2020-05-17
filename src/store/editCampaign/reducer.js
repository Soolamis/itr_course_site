import {
    createSlice,
    combineReducers,
    createSelector,
} from '@reduxjs/toolkit';
import {
    CAMPAING_TYPES,
    LOCALE_DEFAULT,
    MEDIA_IMAGE,
} from '../../constants';

const dataSlice = createSlice({
    name: 'editCampaign/data',
    initialState: {
        name: {
            enUS: '',
            ruRU: '',
        },
        nameLocale: LOCALE_DEFAULT,
        campaignType: CAMPAING_TYPES.EDUCATION,
        descriptionLocale: LOCALE_DEFAULT,
        description: {
            enUS: '',
            ruRU: '',
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

            console.log(newPosition);
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
}

export const actions = {
    ...dataSlice.actions,
}

export default combineReducers({
    data: dataSlice.reducer,
});