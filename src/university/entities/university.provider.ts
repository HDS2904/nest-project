import { University } from './university.entity';

export const universityProvider = [
  {
    provide: 'UNIVERSITY_REPOSITORY',
    useValue: University,
  },
];