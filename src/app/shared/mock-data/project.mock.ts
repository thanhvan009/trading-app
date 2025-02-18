export interface IProject {
  projectId: number;
  description: string;
  type: string;
  owner: string;
  status: string;
  link?: string;
}

export const mockProjectListData: IProject[] = [
  {
    projectId: 12548796,
    description: 'Spotify Subscription',
    type: 'Shopping',
    owner: 'Tyshon',
    status: 'Postpone',
    link: 'https://assistant.neurond.com/',
  },
  {
    projectId: 12548796,
    description: 'Freepik Sales',
    type: 'Transfer',
    owner: 'Tyshon',
    status: 'Active',
    link: 'https://assistant.neurond.com/',
  },
  {
    projectId: 12548796,
    description: 'IT',
    type: 'Transfer',
    owner: 'Tyshon',
    status: 'Pending',
    link: 'https://assistant.neurond.com/',
  },
  {
    projectId: 12548796,
    description: 'Mobile Service',
    type: 'Service',
    owner: 'Tyshon',
    status: 'Completed',
    link: 'https://assistant.neurond.com/',
  },
  {
    projectId: 12548796,
    description: 'Wilson',
    type: 'Shopping',
    owner: 'Tyshon',
    status: 'Pending',
    link: 'https://assistant.neurond.com/',
  },
  {
    projectId: 12548796,
    description: 'Cancel',
    type: 'Shopping',
    owner: 'Tyshon',
    status: 'Cancel',
    link: 'https://assistant.neurond.com/',
  },
];

export const mockProjectDetailData = {
  id: 12548796,
  name: 'Spotify Subscription',
  type: 'Shopping',
  owner: 'Tyshon',
  status: 'Postpone',
  link: 'https://assistant.neurond.com/',
}

export interface IDescription {
  description: any;
  createdBy: string;
  date: string;
  tradeApproval?: boolean;
  customerApproval?: boolean;
  editing?: boolean;
}

export const mockDescriptionsData: IDescription[] = [
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Hydrogen',
    date: '31/12/2022',
    tradeApproval: true,
    customerApproval: false,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Helium',
    date: '31/12/2022',
    tradeApproval: false,
    customerApproval: true,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Lithium',
    date: '31/12/2022',
    tradeApproval: true,
    customerApproval: false,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Beryllium',
    date: '31/12/2022',
    tradeApproval: false,
    customerApproval: true,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Boron',
    date: '31/12/2022',
    tradeApproval: true,
    customerApproval: false,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Carbon',
    date: '31/12/2022',
    tradeApproval: false,
    customerApproval: true,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Nitrogen',
    date: '31/12/2022',
    tradeApproval: true,
    customerApproval: false,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Oxygen',
    date: '31/12/2022',
    tradeApproval: false,
    customerApproval: true,
  },
  {
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    createdBy: 'Fluorine',
    date: '31/12/2022',
    tradeApproval: true,
    customerApproval: false,
  },
];