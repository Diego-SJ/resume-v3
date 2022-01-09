import { v4 as uuidv4 } from 'uuid';
import { differenceInYears } from 'date-fns';

// * INFO ABOUT PAGE
export const PersonalData = [
  {
    id: 1,
    title: 'ABOUT.fullName.1',
    description: 'ABOUT.fullName.2',
  },
  {
    id: 2,
    title: 'ABOUT.age.1',
    description: differenceInYears(new Date(), new Date('1998-09-12')),
  },
  {
    id: 3,
    title: 'ABOUT.birthday.1',
    description: '9/12/1998',
  },
  {
    id: 4,
    title: 'ABOUT.nationality.1',
    description: 'ABOUT.nationality.2',
  },
  {
    id: 5,
    title: 'ABOUT.languages.1',
    description: 'ABOUT.languages.2',
  },
  {
    id: 6,
    title: 'ABOUT.maritalStatus.1',
    description: 'ABOUT.maritalStatus.2',
  },
];

export const Services = [
  {
    id: 1,
    icon: 'layers',
    title: 'ABOUT.SERVICE.title.1',
    description: 'ABOUT.SERVICE.description.1',
  },
  {
    id: 2,
    icon: 'monitor',
    title: 'ABOUT.SERVICE.title.2',
    description: 'ABOUT.SERVICE.description.2',
  },
  {
    id: 3,
    icon: 'smartphone',
    title: 'ABOUT.SERVICE.title.3',
    description: 'ABOUT.SERVICE.description.3',
  },
];

// * INFO RESUME PAGE
export const Skills = [
  {
    id: uuidv4(),
    title: 'React',
    percentage: '90',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Freact.svg?alt=media&token=f7d71823-8896-4783-8ea0-297ca6029460',
  },
  {
    id: uuidv4(),
    title: 'Next',
    percentage: '80',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fnext.svg?alt=media&token=b9d90e80-32a8-415a-a33a-a012d89e04db',
    light: true,
  },
  {
    id: uuidv4(),
    title: 'Typescript',
    percentage: '80',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fnext.svg?alt=media&token=b9d90e80-32a8-415a-a33a-a012d89e04db',
  },
  {
    id: uuidv4(),
    title: 'Javascript',
    percentage: '90',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Ftypescript.svg?alt=media&token=2afa083f-4aea-42a1-9dff-7b24e926d2c6',
  },
  {
    id: uuidv4(),
    title: 'Graphql',
    percentage: '80',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fgraphql.svg?alt=media&token=746df06c-bf4b-4a04-a7aa-e33e32c8affe',
  },
  {
    id: uuidv4(),
    title: 'Redux',
    percentage: '80',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fredux.svg?alt=media&token=4ce1f28d-484f-4291-83b4-81f94a8ea4a5',
  },
  {
    id: uuidv4(),
    title: 'Git',
    percentage: '90',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fgit.svg?alt=media&token=fcc60141-6f40-42fd-8bd7-84fc94a7d238',
  },
  {
    id: uuidv4(),
    title: 'Sass',
    percentage: '80',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fsass.svg?alt=media&token=52c3719b-c18b-46f1-93d3-8de7b8567a3a',
  },
  {
    id: uuidv4(),
    title: 'HTML',
    percentage: '90',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fhtml.svg?alt=media&token=d3e27dc7-58a5-4c81-9130-4e27b1cc9ed2',
  },
  {
    id: uuidv4(),
    title: 'Css',
    percentage: '90',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fcss.svg?alt=media&token=b1ad80fe-fc7d-4d59-b5f0-1def14d90f7e',
  },
  {
    id: uuidv4(),
    title: 'Express',
    percentage: '80',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fexpressjs.svg?alt=media&token=09ed6832-22dd-485d-b3cd-68f701a36761',
    light: true,
  },
  {
    id: uuidv4(),
    title: 'Node',
    percentage: '80',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fnode.svg?alt=media&token=6824bbe7-7248-4348-abf4-31960189d8b6',
  },
  {
    id: uuidv4(),
    title: 'Figma',
    percentage: '80',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Ffigma.svg?alt=media&token=8bceba1b-7201-4e93-871e-011ba8d99045',
  },
  {
    id: uuidv4(),
    title: 'Firebase',
    percentage: '80',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Ffirebase.svg?alt=media&token=e97501b7-b136-4e89-bda1-daeb879edf1b',
  },
  {
    id: uuidv4(),
    title: 'Styled components',
    percentage: '80',
    src: 'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fstyled-components.svg?alt=media&token=5188bb8b-c7f3-484c-9f4b-7124366bf489',
  },
];

export const Education = [
  {
    id: 1,
    date: 'RESUME.EDUCATION.1.date',
    title: 'RESUME.EDUCATION.1.title',
    subtitle: 'RESUME.EDUCATION.1.subtitle',
    description: 'RESUME.EDUCATION.1.description',
  },
  {
    id: 2,
    date: 'RESUME.EDUCATION.2.date',
    title: 'RESUME.EDUCATION.2.title',
    subtitle: 'RESUME.EDUCATION.2.subtitle',
    description: 'RESUME.EDUCATION.2.description',
  },
  {
    id: 3,
    date: 'RESUME.EDUCATION.3.date',
    title: 'RESUME.EDUCATION.3.title',
    subtitle: 'RESUME.EDUCATION.3.subtitle',
    description: 'RESUME.EDUCATION.3.description',
  },
];

export const ProfessionalExperience = [
  {
    id: 1,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.1.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.1.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.1.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.1.description',
  },
  {
    id: 2,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.2.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.2.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.2.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.2.description',
  },
  {
    id: 3,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.3.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.3.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.3.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.3.description',
  },
  {
    id: 4,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.4.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.4.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.4.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.4.description',
  },
  {
    id: 5,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.5.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.5.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.5.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.5.description',
  },
  {
    id: 6,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.6.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.6.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.6.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.6.description',
  },
  {
    id: 7,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.7.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.7.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.7.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.7.description',
  },
  {
    id: 8,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.8.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.8.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.8.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.8.description',
  },
];

export const Recognitions = [
  {
    id: 1,
    date: 'RESUME.RECOGNITIONS.1.date',
    title: 'RESUME.RECOGNITIONS.1.title',
    subtitle: 'RESUME.RECOGNITIONS.1.subtitle',
  },
  {
    id: 2,
    date: 'RESUME.RECOGNITIONS.2.date',
    title: 'RESUME.RECOGNITIONS.2.title',
    subtitle: 'RESUME.RECOGNITIONS.2.subtitle',
  },
  {
    id: 3,
    date: 'RESUME.RECOGNITIONS.3.date',
    title: 'RESUME.RECOGNITIONS.3.title',
    subtitle: 'RESUME.RECOGNITIONS.3.subtitle',
  },
  {
    id: 4,
    date: 'RESUME.RECOGNITIONS.4.date',
    title: 'RESUME.RECOGNITIONS.4.title',
    subtitle: 'RESUME.RECOGNITIONS.4.subtitle',
  },
  {
    id: 5,
    date: 'RESUME.RECOGNITIONS.5.date',
    title: 'RESUME.RECOGNITIONS.5.title',
    subtitle: 'RESUME.RECOGNITIONS.5.subtitle',
  },
  {
    id: 6,
    date: 'RESUME.RECOGNITIONS.6.date',
    title: 'RESUME.RECOGNITIONS.6.title',
    subtitle: 'RESUME.RECOGNITIONS.6.subtitle',
  },
  {
    id: 7,
    date: 'RESUME.RECOGNITIONS.7.date',
    title: 'RESUME.RECOGNITIONS.7.title',
    subtitle: 'RESUME.RECOGNITIONS.7.subtitle',
  },
  {
    id: 8,
    date: 'RESUME.RECOGNITIONS.8.date',
    title: 'RESUME.RECOGNITIONS.8.title',
    subtitle: 'RESUME.RECOGNITIONS.8.subtitle',
  },
];

// * INFO PORTFOLIO PAGE

export const PortfolioInfo = [
  {
    id: uuidv4(),
    image:
      'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fwebp%2Fsave365.webp?alt=media&token=0b63e9d4-5793-4546-a749-fd4e2a9c6a4f',
    link: 'https://save365.netlify.app/',
    title: 'PORTFOLIO.ITEM.17.title',
    description: 'PORTFOLIO.ITEM.17.description',
  },
  {
    id: uuidv4(),
    image:
      'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fwebp%2Fcvra.webp?alt=media&token=a3b0f0e4-3812-4ed6-8ea8-6d2a9243d2ca',
    link: 'https://github.com/Diego-SJ/resume-v3',
    title: 'PORTFOLIO.ITEM.11.title',
    description: 'PORTFOLIO.ITEM.11.description',
  },
  {
    id: uuidv4(),
    image:
      'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fwebp%2Fnatours.webp?alt=media&token=ec49ca73-d63a-4079-9539-87e16a286fe1',
    link: 'https://diego-sj.github.io/Natours-With-Sass/',
    title: 'PORTFOLIO.ITEM.3.title',
    description: 'PORTFOLIO.ITEM.3.description',
  },
  {
    id: uuidv4(),
    image:
      'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fwebp%2Fpokedex.webp?alt=media&token=c71c5595-f802-48d5-ac76-8aa3104246de',
    link: 'https://pokedex-rd.netlify.app/',
    title: 'PORTFOLIO.ITEM.16.title',
    description: 'PORTFOLIO.ITEM.16.description',
  },
  {
    id: uuidv4(),
    image:
      'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fwebp%2Frickmortyredux.webp?alt=media&token=cb8cf025-81af-4523-aba0-6ca298fa6266',
    link: 'https://rickandmorty-redux-graphql.netlify.app/',
    title: 'PORTFOLIO.ITEM.15.title',
    description: 'PORTFOLIO.ITEM.15.description',
  },
];

// * INFO CONTACT PAGE

export const ContactInfo = [
  {
    id: 1,
    icon: 'map-pin',
    title: 'CONTACT.INFO.address.title',
    description: 'CONTACT.INFO.address.description',
  },
  // {
  // 	id: 2,
  // 	icon: 'phone',
  // 	title: 'CONTACT.INFO.phone.title',
  // 	description: 'CONTACT.INFO.phone.description'
  // },
  {
    id: 3,
    icon: 'at-sign',
    title: 'CONTACT.INFO.email.title',
    description: 'CONTACT.INFO.email.description',
  },
];
