export interface IRating {
    projectId: number;
    projectName: string;
    type: string;
    owner: string;
    rateStatus: string;
}

export const mockRatingData: IRating[] = [
    {
        projectId: 12548796,
        projectName: 'Spotify Subscription',
        type: 'Shopping',
        owner: 'Tyshon',
        rateStatus: 'Rated',
    },
    {
        projectId: 12548796,
        projectName: 'Freepik Sales',
        type: 'Transfer',
        owner: 'Tyshon',
        rateStatus: 'Rated',
    },
    {
        projectId: 12548796,
        projectName: 'IT',
        type: 'Transfer',
        owner: 'Tyshon',
        rateStatus: 'Rated',
    },
    {
        projectId: 12548796,
        projectName: 'Mobile Service',
        type: 'Shopping',
        owner: 'Tyshon',
        rateStatus: 'Rated',
    },
    {
        projectId: 12548796,
        projectName: 'Wilson',
        type: 'Shopping',
        owner: 'Tyshon',
        rateStatus: 'Rated',
    },
    {
        projectId: 12548796,
        projectName: 'Cancel',
        type: 'Shopping',
        owner: 'Tyshon',
        rateStatus: 'Note Rated',
    },
];

export const mockRatingDetailData = {
    ratingId: 12345,
    projectId: 12548796,
    tradeName: 'Spotify Subscription',
    time: '2 weeks',
    cost: '$100',
    workmanship: 'Technology',
    yourReview: 'So good, suggest to use',
    ratingNumber: '4',
};