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
  paragraphOne: "Hi, my name is Phenyo and I'm currently a student at Unisa pursuing a Advanced Diploma in IT. Over the past couple of years, coding has developed into a passion of mine, specifically in the land of internet.",
  paragraphTwo: "I am intriged by front-end developement, I am able to create clean and functonal websites as well as UI designs.",
  paragraphThree: "I enjoy solving problems and building some cool stuff. I aspire to be a better developer.",
  resume: 'https://drive.google.com/file/d/16JgHjqQz4sEQeW4gWlt8vQCiD0_GB71m/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: "tino's cafe",
    info: "tino's cafe is a starter website to help people who want a simple yet modern website about food. It can be used as a landing page \
    website for small start-up businesses. I designed the layout and developed the website using Bootstrap, Sass and Javascript.",
    info2: 'UI/UX design | front-end dev',
    url: 'https://marklegend.github.io/demo_cafe/',
    repo: 'https://github.com/marklegend/demo_portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'smart academy',
    info: 'smart academy is a landing page for a online video learning platform, I designed the layout & developed the front-end using pure HTML & CSS.',
    info2: 'UI/UX design | Front-end dev',
    url: 'https://github.com/marklegend/demo_portfolio',
    repo: 'https://github.com/marklegend/demo_portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'althealth management system',
    info: "althealth is an MIS for an in-house software used for inventory managment and daily reports. I designed and developed the \
     site's back-end REST API using PHP and MySQL and front-end with Bootstrap (School Project)",
    info2: 'UI/UX design | Back & Front-end dev',
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
