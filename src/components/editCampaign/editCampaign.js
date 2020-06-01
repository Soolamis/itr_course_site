import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { CAMPAING_TYPES as CAMPAING_TYPES_RU } from '../../ruRU';
import { CAMPAING_TYPES as CAMPAING_TYPES_EN } from '../../enUS';
import { LOCALE_RU, LOCALE_EN } from '../../constants';
import { useLocale } from '../../app/locale';
import MarkdownEditor from '../markdownEditor/markdownEditor';
import SelectLocale from '../selectLocale/selectLocale';
import Markdown from 'react-markdown';
import TextWithLocale from '../textFieldWithSelectLocale/textFieldWithSelectLocale';
import ImageUploader from '../imageUploader/imageUploader';
import EditGoal from '../editGoal/editGoal';
import EditMediaContent from '../editMediaContent/editMediaContent';
import EditRewards from '../editRewards/editRewards';
import Button from '@material-ui/core/Button';

const locales = {
    [LOCALE_RU]: {
        name: 'Название',
        header: 'Создайте вашу новую компанию!',
        campaignTypes: CAMPAING_TYPES_RU,
        campaignTypeLabel: 'Категория',
        descriptionLabel: 'Описание',
        avatarLabel: 'Аватар',
        goalLabel: 'Цель',
        mediaContentLabel: 'Содержание карусели',
        applyButton: 'Отправить',
        cancelButton: 'Отменить',
    },
    [LOCALE_EN]: {
        name: 'Name',
        header: 'Create you new company!',
        campaignTypes: CAMPAING_TYPES_EN,
        campaignTypeLabel: 'Category',
        descriptionLabel: 'Description',
        avatarLabel: 'Avatar',
        goalLabel: 'Goal',
        mediaContentLabel: 'Carousel content',
        applyButton: 'Apply',
        cancelButton: 'Cancel',
    },
}

const useStyles = makeStyles({
    header: {
        marginBottom: '1em',
    },
});

function generateMenuItem(value) {
    const items = Object.keys(value)
        .map((elem) => ({ value: elem, label: value[elem] }));

    return items.map((elem) => {
        return (
            <MenuItem key={elem.value} value={elem.value}>
                {elem.label}
            </MenuItem>
        );
    });
}

export default function ({
    name,
    setName,
    nameLocale,
    setNameLocale,
    campaignType,
    setCampaignType,
    description,
    descriptionLocale,
    setDescription,
    setDescriptionLocale,
    avatar,
    setAvatar,
    goalFinishDate,
    goalSum,
    setGoalFinishDate,
    setGoalSum,
    setMediaContentNewElemType,
    mediaContent,
    setMediaContentNewElemUrl,
    setMediaContentNewElemPosition,
    addMediaContent,
    changeMediaContentPosition,
    removeMediaContent,
    onChangeRewardsNewElem,
    rewardsNewElem,
    onChangeRewardsLocale,
    rewardsLocale,
    addReward,
    rewards,
    onChangeRewardPosition,
    onDeleteReward,
    onEditReward,
    onApply,
    onCancel,
    campaignTypes,
}) {
    const locale = useLocale();
    const localeSet = locales[locale];
    const classes = useStyles();

    return (
        <Grid container>
            <Grid
                item
                container
                xs={12}
                justify='space-around'
                classes={{ root: classes.header }}
            >
                <Grid item>
                    <Typography variant='h4'>
                        {localeSet.header}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                xs={12}
                spacing={3}
            >
                <Grid
                    item
                    container
                    sm={8}
                    xs={12}
                >
                    <Grid
                        container
                        item
                        xs={12}
                        spacing={1}
                    >
                        <Grid
                            item
                            xs={12}
                        >
                            <TextWithLocale
                                text={name}
                                locale={nameLocale}
                                onTextChange={setName}
                                onLocaleChange={setNameLocale}
                                textLabel={localeSet.name}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <FormControl
                                fullWidth
                            >
                                <InputLabel
                                    htmlFor='campaignTypeInput'
                                >
                                    {localeSet.campaignTypeLabel}
                                </InputLabel>
                                <Select
                                    id='campaignTypeInput'
                                    value={campaignType}
                                    onChange={e => setCampaignType(e.target.value)}
                                    fullWidth
                                >
                                    {campaignTypes ?
                                        generateMenuItem((() => {
                                            let res = {};
                                            Object.keys(campaignTypes).forEach(key => {
                                                res = {
                                                    ...res,
                                                    [key]: campaignTypes[key][locale],
                                                }
                                            })
                                            return res;
                                        })()): <div></div>
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    sm={4}
                    xs={12}
                >
                    <Grid
                        item
                        container
                        justify='space-around'
                    >
                        <Grid item>
                            <Typography variant='h5'>
                                {localeSet.avatarLabel}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <ImageUploader
                            img={avatar}
                            onChange={setAvatar}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    spacing={1}
                    xs={12}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant='h5'>
                            {localeSet.goalLabel}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <EditGoal
                            sum={goalSum}
                            onSumChange={setGoalSum}
                            date={goalFinishDate}
                            onDateChange={setGoalFinishDate}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    spacing={1}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant='h5'>
                            {localeSet.mediaContentLabel}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <EditMediaContent
                            newElemType={mediaContent.newElem.type}
                            onChangeNewElemType={setMediaContentNewElemType}
                            newElemUrl={mediaContent.newElem.url}
                            onChangeNewElemUrl={setMediaContentNewElemUrl}
                            newElemPosition={mediaContent.newElem.position}
                            onChangeNewElemPosition={setMediaContentNewElemPosition}
                            onChangePosition={changeMediaContentPosition}
                            onDelete={removeMediaContent}
                            onAdd={addMediaContent}
                            elems={mediaContent.elems}
                            elemsOrder={mediaContent.elemsOrder}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    spacing={1}
                >
                    <Grid
                        item
                        container
                        spacing={1}
                        xs={12}
                    >
                        <Grid
                            item
                        >
                            <Typography variant='h5'>
                                {localeSet.descriptionLabel}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                        >
                            <SelectLocale
                                id='selectDescriptionInputLocale'
                                name='descriptionLocale'
                                value={descriptionLocale}
                                onChange={e => setDescriptionLocale(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                    >
                        <Grid
                            item
                            sm={6}
                            xs={12}
                        >
                            <MarkdownEditor
                                value={description}
                                onChange={e => setDescription(e)}
                            />
                        </Grid>
                        <Grid
                            item
                            sm={6}
                            xs={12}
                        >
                            <Markdown source={description} />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <EditRewards
                            onChangeNewElem={onChangeRewardsNewElem}
                            newElem={rewardsNewElem}
                            onChangeLocale={onChangeRewardsLocale}
                            locale={rewardsLocale}
                            onAdd={addReward}
                            rewards={rewards}
                            onChangePosition={onChangeRewardPosition}
                            onDelete={onDeleteReward}
                            onEdit={onEditReward}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                justify='center'
            >
                <Grid item>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={onApply}
                    >
                        {localeSet.applyButton}
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        cariant='contained'
                        color='primary'
                        onClick={onCancel}
                    >
                        {localeSet.cancelButton}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}