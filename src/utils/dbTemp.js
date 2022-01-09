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
  { id: uuidv4(), title: 'React', percentage: '90', src: 'src/assets/img/svg/react.svg' },
  { id: uuidv4(), title: 'Next', percentage: '80', src: 'src/assets/img/svg/next.svg', light: true },
  { id: uuidv4(), title: 'Typescript', percentage: '80', src: 'src/assets/img/svg/typescript.svg' },
  { id: uuidv4(), title: 'Javascript', percentage: '90', src: 'src/assets/img/svg/javascript.svg' },
  { id: uuidv4(), title: 'Graphql', percentage: '80', src: 'src/assets/img/svg/Graphql.svg' },
  { id: uuidv4(), title: 'Redux', percentage: '80', src: 'src/assets/img/svg/redux.svg' },
  { id: uuidv4(), title: 'Git', percentage: '90', src: 'src/assets/img/svg/git.svg' },
  { id: uuidv4(), title: 'Sass', percentage: '80', src: 'src/assets/img/svg/sass.svg' },
  { id: uuidv4(), title: 'HTML', percentage: '90', src: 'src/assets/img/svg/html.svg' },
  { id: uuidv4(), title: 'Css', percentage: '90', src: 'src/assets/img/svg/css.svg' },
  { id: uuidv4(), title: 'Express', percentage: '80', src: 'src/assets/img/svg/expressjs.svg', light: true },
  { id: uuidv4(), title: 'Node', percentage: '80', src: 'src/assets/img/svg/node.svg' },
  { id: uuidv4(), title: 'Figma', percentage: '80', src: 'src/assets/img/svg/figma.svg' },
  { id: uuidv4(), title: 'Firebase', percentage: '80', src: 'src/assets/img/svg/firebase.svg' },
  { id: uuidv4(), title: 'Styled components', percentage: '80', src: 'src/assets/img/svg/styled-components.svg' },
  // { id: uuidv4(), title: 'SCRUM', percentage: '90' },
  // { id: uuidv4(), title: 'PHP', percentage: '70' },
  // { id: uuidv4(), title: 'PYTHON', percentage: '40' },
  // { id: uuidv4(), title: 'C++', percentage: '30' },
  // { id: uuidv4(), title: 'C#', percentage: '40' },
  // { id: uuidv4(), title: 'JAVA', percentage: '80' },
  // { id: uuidv4(), title: 'SQL', percentage: '80' },
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
    image: `src/assets/img/portfolios/save365.webp`,
    link: 'https://save365.netlify.app/',
    title: 'PORTFOLIO.ITEM.17.title',
    description: 'PORTFOLIO.ITEM.17.description',
  },
  // {
  //   id: uuidv4(),
  //   image: `src/assets/img/portfolios/awl.webp`,
  //   link: 'https://linuspauling2.000webhostapp.com/awl/',
  //   title: 'PORTFOLIO.ITEM.2.title',
  //   description: 'PORTFOLIO.ITEM.2.description',
  // },
  {
    id: uuidv4(),
    image: `src/assets/img/portfolios/cvra.webp`,
    link: 'https://github.com/Diego-SJ/resume-v3',
    title: 'PORTFOLIO.ITEM.11.title',
    description: 'PORTFOLIO.ITEM.11.description',
  },
  {
    id: uuidv4(),
    image: 'src/assets/img/portfolios/natours.webp',
    link: 'https://diego-sj.github.io/Natours-With-Sass/',
    title: 'PORTFOLIO.ITEM.3.title',
    description: 'PORTFOLIO.ITEM.3.description',
  },
  // {
  //   id: uuidv4(),
  //   image: `require('../assets/img/portfolios/empsch.webp')`,
  //   link: 'https://prueba-tecnica-habil.netlify.app/',
  //   title: 'PORTFOLIO.ITEM.5.title',
  //   description: 'PORTFOLIO.ITEM.5.description',
  // },
  {
    id: uuidv4(),
    image: 'src/assets/img/portfolios/pokedex.webp',
    link: 'https://pokedex-rd.netlify.app/',
    title: 'PORTFOLIO.ITEM.16.title',
    description: 'PORTFOLIO.ITEM.16.description',
  },
  {
    id: uuidv4(),
    image: 'src/assets/img/portfolios/rickmortyredux.webp',
    link: 'https://rickandmorty-redux-graphql.netlify.app/',
    title: 'PORTFOLIO.ITEM.15.title',
    description: 'PORTFOLIO.ITEM.15.description',
  },
  // {
  //   id: uuidv4(),
  //   image: `require('../assets/img/portfolios/ecowatering.webp')`,
  //   link: 'https://ecowateringplants.000webhostapp.com/ecowateringplants.com/',
  //   title: 'PORTFOLIO.ITEM.1.title',
  //   description: 'PORTFOLIO.ITEM.1.description',
  // },
  // {
  //   id: uuidv4(),
  //   image: `require('../assets/img/portfolios/fixstone.webp')`,
  //   link: 'https://diego-sj.github.io/Fixstone-Website/',
  //   title: 'PORTFOLIO.ITEM.8.title',
  //   description: 'PORTFOLIO.ITEM.8.description',
  // },
  // {
  //   id: uuidv4(),
  //   image: `require('../assets/img/portfolios/egcp.webp')`,
  //   link: null,
  //   title: 'PORTFOLIO.ITEM.14.title',
  //   description: 'PORTFOLIO.ITEM.14.description',
  // },
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
