import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  work,
  carrent,
  jobit,
  tripguide,
  threejs,
  educationlogo
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'Content Creator',
    icon: creator
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'docker',
    icon: docker
  }
];

const experiences = [
  {
    title: 'Software Developer',
    company_name: 'Cence Power (CANADA)',
    icon: work,
    iconBg: '#E6DEDD',
    date: 'Sept 2022 - Present',
    points: [
      'Designing and implementing single page application with Angular framework',
      'Utilizing TypeScript, JavaScript, Angular Material, HTML5, and CSS3',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Web Developer',
    company_name: 'Ecrubit Consultancy Services Private Limited (INDIA)',
    icon: work,
    iconBg: '#E6DEDD',
    date: 'Apr 2020 - Apr 2021',
    points: [
      'Used React.JS, JavaScript, Bootstrap, Redux and Sass to create dynamic user components and improve website performance',
      'Collaborated with Back-End team to integrate front-end with back-end functionality',
      'Developedandmaintainedwebsitestoensurecross-browser compatibility and optimized user performance',
      'Contributed to the company’s codebase to fixbugs,addnew future and improve overall code quality.'
    ]
  }
];
const education = [
  {
    title: 'Computer Software and Database Development',
    company_name: 'Lambton College, CANADA',
    iconBg: '#FFFFFF',
    icon: educationlogo,
    date: 'May 2021  - Dec 2022',
    points: [
      'Full-stack development using front-end languages and technologies such as HTML5, CSS3, JavaScript, jQuery, Bootstrap, and React for UI development.',
      'Use of server-side programming languages and frameworks like Java, C# .NET, Python, Node.js, etc. for the business logic layer.',
      'Learning database management systems such as SQL and NoSQL, including Oracle, DB2, MySQL, and MongoDB.',
      'Emphasis on the use of DevOps tools such as Git, GitHub, IDEs, and CI/CD pipelines to build and release high-quality software efficiently.'
    ]
  },
  {
    title: 'Bachelor of Technology (Computer Science and Engineering)	      ',
    company_name: 'Haryana Engineering College, INDIA',
    icon: educationlogo,
    iconBg: '#FFFFFF',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Bachelor of Technology (B.Tech) is an undergraduate degree in engineering and technology that prepares students for careers in the field through a 4-year program of study.'
    ]
  }
];

const projects = [
  {
    name: 'Game-Hub',
    description:
      'Web-based platform that allows users to search the games by filtering them by genre , platform and sort the games. we can  review the rating of the each game.User can toggle to Dark mode also ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'Typescript'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'Chakra UI',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/Simran-Kaur1996',
    host_link: 'https://game-hub-lime.vercel.app/'
  },
  {
    name: 'Expense-Tracker',
    description:
      'Web application that helps to track the expenses.You can total Balance.And Also see the income and expenses.You can delete and add the all transaction to keep an record',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'redux',
        color: 'green-text-gradient'
      }
    ],
    image: jobit,
    source_code_link:
      'https://github.com/Simran-Kaur1996/expense-tracker-react',
    host_link: 'https://expense-tracker-react-rust.vercel.app/'
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'supabase',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  }
];

export {
  services,
  technologies,
  experiences,
  // testimonials,
  projects,
  education
};
