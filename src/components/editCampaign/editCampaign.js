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
import { LOCALE_DEFAULT } from '../../constants';
import MarkdownEditor from '../markdownEditor/markdownEditor';
import SelectLocale from '../selectLocale/selectLocale';
import Markdown from 'react-markdown';
import TextWithLocale from '../textFieldWithSelectLocale/textFieldWithSelectLocale';
import ImageUpload from '../imageUpload/imageUpload';
import EditGoal from '../editGoal/editGoal'

const locales = {
    ruRU: {
        header: 'Создайте вашу новую компанию!',
        campaignTypes: CAMPAING_TYPES_RU,
        campaignTypeLabel: 'Категория',
        descriptionLabel: 'Описание',
        avatarLabel: 'Аватар',
        goalLabel: 'Цель',
    },
    enUS: {
        header: 'Create you new company!',
        campaignTypes: CAMPAING_TYPES_EN,
        campaignTypeLabel: 'Category',
        descriptionLabel: 'Description',
        avatarLabel: 'Avatar',
        goalLabel: 'Goal',
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

    return items.map((elem) => (
        <MenuItem key={elem.value} value={elem.value}>
            {elem.label}
        </MenuItem>
    ));
}

export default function ({
    locale = LOCALE_DEFAULT,
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
}) {
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
                                    {generateMenuItem(localeSet.campaignTypes)}
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
                        <ImageUpload
                            file={avatar}
                            onUpdate={setAvatar}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    spacind={1}
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
                </Grid>
            </Grid>
        </Grid>
    );
}