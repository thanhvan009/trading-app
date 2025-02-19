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
      'Can you show us some samples of your writing? If that’s something you keep hearing but cannot say a confident yes to, you’re at the right place. We’ll show you 24 examples of how others write and present their content writing samples and answer some of the most frequently asked questions.',
    createdBy: 'Hydrogen',
    date: '31/12/2022',
    tradeApproval: false,
    customerApproval: true,
  },
  {
    description:
      'So the next time a potential client wants to see your samples or HR requests them for your job application, you won’t have to worry about it anymore',
    createdBy: 'Helium',
    date: '31/12/2022',
    tradeApproval: false,
    customerApproval: true,
  },
  {
    description:
      'Looking for a quick and easy way to build your portfolio? Try Copyfolio and create a stunning website that’ll look good on every device. It’s free, no credit card required.',
    createdBy: 'Lithium',
    date: '31/12/2022',
    tradeApproval: false,
    customerApproval: true,
  },
  {
    description:
      `Astor used Copyfolio's "Charcoal" color palette to let the images shine, and added CTA buttons under each sample's description for better conversions.`,
    createdBy: 'Beryllium',
    date: '31/12/2022',
    tradeApproval: false,
    customerApproval: true,
  },
  {
    description:
      'Why do you need to have content writing samples?',
    createdBy: 'Boron',
    date: '31/12/2022',
    tradeApproval: true,
    customerApproval: false,
  },
  {
    description:
      'How to format your content writing samples ree content writing sample presentation templates',
    createdBy: 'Carbon',
    date: '31/12/2022',
    tradeApproval: true,
    customerApproval: false,
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
      'Allana did two things to present her content work for Hilton Supply Management: she wrote a short summary of the project and she also included large images of the final piece. Allana featured these writing samples on her portfolio website, built with Copyfolio.',
    createdBy: 'Oxygen',
    date: '31/12/2022',
    tradeApproval: true,
    customerApproval: false,
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