import { v4 as uuidv4 } from 'uuid';
import { differenceInYears } from 'date-fns';
import ReactSvg from '../assets/skills/react.svg';
import NextjsSvg from '../assets/skills/nextjs.webp';
import TypescriptSvg from '../assets/skills/ts.webp';
import JavascriptSvg from '../assets/skills/js.webp';
import AstroSvg from '../assets/skills/astro.webp';
import GraphqlSvg from '../assets/skills/graphql.webp';
import ReduxSvg from '../assets/skills/redux.webp';
import GitSvg from '../assets/skills/git.webp';
import TailwindSvg from '../assets/skills/tailwind.webp';
import SassSvg from '../assets/skills/sass.webp';
import HtmlSvg from '../assets/skills/html.webp';
import CssSvg from '../assets/skills/css.svg';
import ExpressSvg from '../assets/skills/express.webp';
import NodejsSvg from '../assets/skills/nodejs.webp';
import FigmaSvg from '../assets/skills/figma.webp';
import FirebaseSvg from '../assets/skills/firebase.webp';
import StyledComponentsSvg from '../assets/skills/styled-components.svg';
import PostgresqlWebp from '../assets/skills/postgresql.webp';
import EnlonadosWebp from '../assets/portfolio/enlonados.webp';
import PosiffyWebp from '../assets/portfolio/posiffy.webp';
import MorethanbooksWebp from '../assets/portfolio/more-than-books.webp';
import HappyHopWebp from '../assets/portfolio/happy-hop.webp';
import Save365Webp from '../assets/portfolio/save365.webp';

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
    src: ReactSvg,
  },
  {
    id: uuidv4(),
    title: 'Next js',
    percentage: '80',
    src: NextjsSvg,
    light: true,
  },
  {
    id: uuidv4(),
    title: 'Typescript',
    percentage: '80',
    src: TypescriptSvg,
  },
  {
    id: uuidv4(),
    title: 'Javascript',
    percentage: '90',
    src: JavascriptSvg,
  },
  {
    id: uuidv4(),
    title: 'Astro',
    percentage: '80',
    src: AstroSvg,
  },
  {
    id: uuidv4(),
    title: 'Graphql',
    percentage: '80',
    src: GraphqlSvg,
  },
  {
    id: uuidv4(),
    title: 'Tailwind',
    percentage: '80',
    src: TailwindSvg,
  },
  {
    id: uuidv4(),
    title: 'Redux',
    percentage: '80',
    src: ReduxSvg,
  },
  {
    id: uuidv4(),
    title: 'Postgresql',
    percentage: '80',
    src: PostgresqlWebp,
  },
  {
    id: uuidv4(),
    title: 'Git',
    percentage: '90',
    src: GitSvg,
  },
  {
    id: uuidv4(),
    title: 'Sass',
    percentage: '80',
    src: SassSvg,
  },
  {
    id: uuidv4(),
    title: 'HTML',
    percentage: '90',
    src: HtmlSvg,
  },
  {
    id: uuidv4(),
    title: 'Css',
    percentage: '90',
    src: CssSvg,
  },
  {
    id: uuidv4(),
    title: 'Express',
    percentage: '80',
    src: ExpressSvg,
    light: true,
  },
  {
    id: uuidv4(),
    title: 'Node js',
    percentage: '80',
    src: NodejsSvg,
  },
  {
    id: uuidv4(),
    title: 'Figma',
    percentage: '80',
    src: FigmaSvg,
  },
  {
    id: uuidv4(),
    title: 'Firebase',
    percentage: '80',
    src: FirebaseSvg,
  },
  {
    id: uuidv4(),
    title: 'Styled components',
    percentage: '80',
    src: StyledComponentsSvg,
  },
];

export const Education = [
  // {
  //   id: 1,
  //   date: 'RESUME.EDUCATION.1.date',
  //   title: 'RESUME.EDUCATION.1.title',
  //   subtitle: 'RESUME.EDUCATION.1.subtitle',
  //   description: 'RESUME.EDUCATION.1.description',
  // },
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
  // {
  //   id: 1,
  //   date: 'RESUME.PROFESSIONAL_EXPERIENCE.1.date',
  //   title: 'RESUME.PROFESSIONAL_EXPERIENCE.1.title',
  //   subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.1.subtitle',
  //   description: 'RESUME.PROFESSIONAL_EXPERIENCE.1.description',
  // },
  // {
  //   id: 2,
  //   date: 'RESUME.PROFESSIONAL_EXPERIENCE.2.date',
  //   title: 'RESUME.PROFESSIONAL_EXPERIENCE.2.title',
  //   subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.2.subtitle',
  //   description: 'RESUME.PROFESSIONAL_EXPERIENCE.2.description',
  // },
  {
    id: 3,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.3.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.3.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.3.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.3.description',
    url: 'https://actosoft.com.mx/frontend',
  },
  // {
  //   id: 4,
  //   date: 'RESUME.PROFESSIONAL_EXPERIENCE.4.date',
  //   title: 'RESUME.PROFESSIONAL_EXPERIENCE.4.title',
  //   subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.4.subtitle',
  //   description: 'RESUME.PROFESSIONAL_EXPERIENCE.4.description',
  // },
  // {
  //   id: 5,
  //   date: 'RESUME.PROFESSIONAL_EXPERIENCE.5.date',
  //   title: 'RESUME.PROFESSIONAL_EXPERIENCE.5.title',
  //   subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.5.subtitle',
  //   description: 'RESUME.PROFESSIONAL_EXPERIENCE.5.description',
  // },
  {
    id: 6,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.6.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.6.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.6.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.6.description',
    url: 'https://sodisa.com/',
  },
  {
    id: 7,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.7.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.7.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.7.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.7.description',
    url: 'https://www.lapzo.com/',
  },
  {
    id: 8,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.8.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.8.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.8.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.8.description',
    url: 'https://www.zenda.la/',
  },
  {
    id: 9,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.9.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.9.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.9.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.9.description',
    url: 'https://www.clara.com',
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
    image: EnlonadosWebp,
    link: 'https://enlonado-fronted.pages.dev/app/enlonados',
    title: 'PORTFOLIO.ITEM.15.title',
    description: 'React - TS - Vite - Tailwind - Postgresql - Supabase',
  },
  {
    id: uuidv4(),
    image: PosiffyWebp,
    link: 'https://posiffy.com/',
    title: `Posiffy`,
    description: 'React - Typescript - Tailwind - Redux - Postgresql - Supabase - Nextjs',
  },
  {
    id: uuidv4(),
    image: MorethanbooksWebp,
    link: 'https://more-thant-books.netlify.app/',
    title: 'More than books',
    description: 'Nextjs - Typescript - Tailwind - Strapi',
  },
  {
    id: uuidv4(),
    image: HappyHopWebp,
    link: 'https://happy-hop.com/',
    title: `Happy Hop`,
    description: 'Astro - Typescript - Tailwind - React',
  },
  {
    id: uuidv4(),
    image: Save365Webp,
    link: 'https://save365.netlify.app/',
    title: 'PORTFOLIO.ITEM.17.title',
    description: 'PORTFOLIO.ITEM.17.description',
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
