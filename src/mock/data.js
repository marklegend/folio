import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Phenyo Mokgadi', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'unknown junior front end developer', // e.g: Welcome to my website junior
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Phenyo Mokgadi',
  subtitle: '',
  cta: 'wanna know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/16JgHjqQz4sEQeW4gWlt8vQCiD0_GB71m/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: "tino's cafe",
    info: '',
    info2: '',
    url: 'https://marklegend.github.io/demo_cafe/',
    repo: 'https://github.com/marklegend/demo_portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'smart academy',
    info: '',
    info2: '',
    url: 'https://github.com/marklegend/demo_portfolio',
    repo: 'https://github.com/marklegend/demo_portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'althealth management system',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/marklegend/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'phenyo.legend@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'dribbble',
      url: 'https://dribbble.com/mark_legend',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/phenyo-m-e-mokgadi/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/marklegend',
    },
  ],
};
