export const LOCALE_RU = 'ruRU';
export const LOCALE_EN = 'enUS';
export const LOCALE_DEFAULT = LOCALE_EN;

export const MODE_EDIT = 'edit';
export const MODE_USE = 'use';

export const LOADING_IDLE = 'idle';
export const LOADING_PENDING = 'pending';

export const SYNC_IDLE = 'idle';
export const SYNC_PENDING = 'pending';
export const SYNC_COMPLETE = 'complete';
export const SYNC_REJECTED = 'rejected';

export const MEDIA_IMAGE = 'image';
export const MEDIA_VIDEO = 'video';

export const EDIT_CAMPAING_CREATE = 'create';
export const EDIT_CAMPAING_EDIT = 'edit';

export const CAMPAING_TYPES = {
    EDUCATION: 'education',
    SPORT: 'sport',
    HEALTH: 'health',
};

/*------------------------Temp----------------------------------*/
export const MEDIA_CONTENT = [
    {
        type: MEDIA_IMAGE,
        src: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
    }, {
        type: MEDIA_VIDEO,
        src: 'https://www.youtube.com/watch?v=yRLjfNIipuo',
    }, {
        type: MEDIA_IMAGE,
        src: 'https://zjf683hopnivfq5d12xaooxr-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg',
    },
];
export const CAMPAING_LABEL = '*label*';
export const USER_RATING = 0;
export const AVERAGE_RATING = 2.5;
export const GOAL_END_TIME = Date.UTC(2020, 6, 6);
export const GOAL_CURRENT = 200;
export const GOAL_GOAL = 322;
export const DESCRIPTION = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum pharetra risus, quis fringilla metus blandit eu. Nam varius, tortor sed interdum rhoncus, diam elit dapibus dui, at mattis purus tortor eu magna. Donec et leo placerat, posuere sem sed, imperdiet erat. Cras vitae metus non ipsum imperdiet rhoncus vitae a diam. Aenean consectetur justo magna, ac tincidunt enim imperdiet vitae. Praesent id ante ut lorem pellentesque convallis. Aliquam tristique mollis massa. Pellentesque ipsum augue, ornare sit amet ipsum ac, tempus luctus dui. Fusce cursus urna nisl, nec auctor dolor sagittis ac. Etiam vehicula nec orci ut posuere. Vivamus eu gravida felis. Quisque at egestas turpis. Nullam ut luctus nulla. Nullam pretium ut sem in molestie. Nullam cursus orci at facilisis consectetur.

Ut eget porta lacus. Suspendisse potenti. Fusce vitae urna vel lorem consectetur laoreet. Duis ullamcorper nisi vitae purus posuere, eu consequat diam varius. Suspendisse metus est, consectetur in dignissim a, gravida nec eros. Nam hendrerit turpis orci, luctus fermentum leo rhoncus in. Nam aliquet erat ante, commodo convallis enim blandit in. Mauris sollicitudin libero sit amet mi vehicula, vitae finibus libero laoreet. Sed venenatis arcu eget tortor accumsan, a mollis velit pulvinar. Proin nec rhoncus massa. Donec semper fermentum suscipit. Maecenas sodales nulla vel eros eleifend cursus. Donec fringilla sem a dapibus vulputate.

Duis eu ligula ut enim sagittis varius vitae eu magna. Aenean suscipit, lorem sed viverra placerat, quam neque accumsan ante, quis mollis neque lectus et risus. Vivamus orci magna, viverra sed eros eu, porttitor ultrices nibh. Fusce dapibus orci in nisl rhoncus malesuada. Cras at ultricies enim. Vivamus cursus lorem et urna dignissim, venenatis bibendum risus lobortis. Donec rutrum maximus tempus. Sed vel porta elit.

Etiam sodales erat eget est mollis, vitae tempus quam finibus. In diam quam, lacinia vitae dignissim volutpat, fringilla at lacus. Duis vitae sollicitudin leo, nec gravida urna. Nulla id augue et est gravida congue. Nulla faucibus molestie odio. Curabitur aliquam et dui vel vulputate. Pellentesque mattis sapien eget pharetra ultrices. Maecenas metus est, imperdiet vitae tortor ac, tincidunt efficitur orci. Pellentesque suscipit turpis risus, vel mollis arcu sodales ac. Sed dictum, lectus laoreet vestibulum finibus, quam orci luctus sem, id feugiat quam purus vel dui.

Nulla lobortis eu erat id tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque porttitor elit ut felis bibendum blandit. Vivamus sed interdum felis. Fusce in massa dolor. Proin commodo sapien vel suscipit faucibus. Donec sed interdum metus. Phasellus malesuada hendrerit lorem, vitae mollis neque placerat ac. Cras sit amet sapien tempus, tempus diam sed, commodo elit. Proin mattis dui quam, at malesuada turpis blandit ut. Pellentesque sagittis sem malesuada cursus blandit. Aliquam feugiat suscipit elit ut luctus. Vivamus ac justo sed ipsum semper auctor.
`;
export const REWARDS = [
    {
        label: 'Starter',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus cursus tortor in luctus. Morbi pellentesque augue sed luctus sollicitudin. Sed faucibus egestas posuere. Aenean efficitur finibus dapibus. Donec pulvinar sed ex vel feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce venenatis tempor nulla et egestas.',
        cost: 100,
    }, {
        label: 'Standart',
        description: 'Mauris et ex sit amet purus ultricies cursus. Suspendisse potenti. Nullam sed vestibulum magna. Maecenas feugiat justo eu diam vestibulum, et tempor nunc lacinia. Aliquam imperdiet felis ut purus porta commodo id a leo. Aliquam at sodales tortor, et placerat felis.',
        cost: 200,
    }, {
        label: 'Premium',
        description: 'Etiam convallis arcu et molestie ullamcorper. Vivamus molestie pulvinar justo sit amet gravida. Duis vulputate nunc in volutpat pulvinar. Phasellus eu magna mollis, faucibus risus ac, pharetra dolor. Pellentesque quam dolor, interdum gravida sapien vitae, viverra gravida arcu. Pellentesque ac est ac nisl porttitor rutrum.',
        cost: 300,
    },
];