import { Project } from '@core/interfaces/project';

export class ProjectData {
  static projects: Project[] = [
    {
      id: '140892',
      name: 'Smarflow 365',
      key: 'SKP',
      url: 'https://github.com/sldiaz04us/kanban-project-management',
      description: '',
      leader: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl:
          'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
      },
      avatarUrl:
        'https://res.cloudinary.com/comparte/image/upload/v1624772344/140892.svg',
      category: 'Software',
      createdAt: '2021-05-03T16:00:00.000Z',
      updatedAt: '2021-05-03T16:00:00.000Z',
      assignees: [
        {
          id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
          name: 'Sergio Lopez Diaz',
          email: 'sergio@kanban.com',
          avatarUrl:
            'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
        },
        {
          id: '7ac265f9-b9ac-443f-a2b2-795682e579a4',
          name: 'Gilfoyle',
          email: 'gilfoyle@kanban.com',
          avatarUrl:
            'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/gilfoyle.png',
        },
        {
          id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
          name: 'Richard Hendricks',
          email: 'richard@kanban.com',
          avatarUrl:
            'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png',
        },
        {
          id: '610451aa-10c8-4d7e-9363-311357c0b0dd',
          name: 'Dinesh',
          email: 'dinesh@kanban.com',
          avatarUrl:
            'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/dinesh.jpg',
        },
        {
          id: '081ccaa1-5595-4621-8074-ede4927e67b0',
          name: 'Big Head',
          email: 'bighead@kanban.com',
          avatarUrl:
            'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/big-head.jpg',
        },
      ],
    },
    {
      id: '130921',
      name: 'Another Kanban Project',
      key: 'AKP',
      url: 'https://github.com/sldiaz04us/kanban-project-management',
      description: '',
      avatarUrl:
        'https://res.cloudinary.com/comparte/image/upload/v1624772344/130921.svg',
      category: 'Business',
      leader: {
        id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
        name: 'Richard Hendricks',
        email: 'richard@kanban.com',
        avatarUrl:
          'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png',
      },
      createdAt: '2021-04-03T16:00:00.000Z',
      updatedAt: '2021-04-03T16:00:00.000Z',
      assignees: [
        {
          id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
          name: 'Sergio Lopez Diaz',
          email: 'sergio@kanban.com',
          avatarUrl:
            'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
        },
        {
          id: '7ac265f9-b9ac-443f-a2b2-795682e579a4',
          name: 'Gilfoyle',
          email: 'gilfoyle@kanban.com',
          avatarUrl:
            'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/gilfoyle.png',
        },
        {
          id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
          name: 'Richard Hendricks',
          email: 'richard@kanban.com',
          avatarUrl:
            'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png',
        },
      ],
    },
  ];
}
