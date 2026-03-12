import type { TCategory, TProject, TSkill, TSocial, TStatistical, TStrength } from "../type/data_type"

export const TITLE_PAGE = {
    title_page: "My Portfolio"
};

export const HOME_INTRO = {
  sub_title: "Portfolio of",
  title: "home.title_portfolio",
  image: {
    src: "/images/hero-intro.webp",
    alt: "Hero intro",
  },
};

export const STATISTICIAL:TStatistical[] = [
    {
        number: 7,
        unit: '+',
        label: 'home.statistical.expriences'
    },
    {
        number: 500,
        unit: '+',
        label: 'home.statistical.project_done'
    },
    {
        number: 200,
        unit: '+',
        label: 'home.statistical.clients'
    }
]

export const STRENGTHWEAKNESSES:TStrength[] = [
     {
        id: 1,
        image: '/images/technical.png',
        title: 'home.strengthsWeaknesses.techFoundation'
    },
    {
        id: 2,
        image: '/images/architecture.webp',
        title: 'home.strengthsWeaknesses.systemThinking'
    },
    {
        id: 3,
        image: '/images/server.webp',
        title: 'home.strengthsWeaknesses.serverDeployment'
    },
    {
        id: 4,
        image: '/images/IMAGE3.png',
        title: 'home.strengthsWeaknesses.teamwork'
    },
    {
        id: 5,
        image: '/images/IMAGE3.png',
        title: 'home.strengthsWeaknesses.adaptability'
    },
    {
        id: 6,
        image: '/images/IMAGE3.png',
        title: 'home.strengthsWeaknesses.problemSolving'
    }  
]

export const LIST_SKILL: TSkill[] = [
  // Frontend
  {
    id: 1,
    icon: '/images/react.webp',
    title: 'React js'
  },
  {
    id: 2,
    icon: '/images/next_js.webp',
    title: 'Next.js'
  },
  {
    id: 3,
    icon: '/images/vuejs.webp',
    title: 'Vue.js'
  },
  {
    id: 4,
    icon: '/images/javascript-logo.png',
    title: 'JavaScript'
  },
  {
    id: 5,
    icon: '/images/typescript.png',
    title: 'TypeScript'
  },
  {
    id: 6,
    icon: '/images/html.png',
    title: 'HTML5 & CSS3'
  },

  // Backend Node
  {
    id: 7,
    icon: '/images/nodejs.png',
    title: 'Node.js'
  },
  {
    id: 8,
    icon: '/images/expressjs.png',
    title: 'Express.js'
  },

  // Backend PHP
  {
    id: 9,
    icon: '/images/php-logo.png',
    title: 'PHP'
  },
  {
    id: 10,
    icon: '/images/laravel.png',
    title: 'Laravel'
  },
  {
    id: 11,
    icon: '/images/wp.png',
    title: 'WordPress'
  },
  {
    id: 12,
    icon: '/images/NET.png',
    title: '.NET'
  },
   // Database
  {
    id: 13,
    icon: '/images/Mongodb.png',
    title: 'Mongo DB'
  },
  {
    id: 14,
    icon: '/images/mysql.png',
    title: 'MySQL'
  },
  {
    id: 15,
    icon: '/images/sqlserver.png',
    title: 'SQL Server'
  },

]

export const LIST_CATEGORIES: TCategory[] = [
    {
        id: 1,
        category: 'React js'
    },
    {
        id: 2,
        category: 'Next js'
    },
    {
        id: 3,
        category: 'Node js'
    },
    {
        id: 4,
        category: 'PHP'
    }
]

export const LIST_PROJECTS: TProject[] = [
    {
        id: 1,
        name_project: 'home.project.name_1',
        image: '/images/novax.webp',
        category_ids: [4],
        detail:'home.project.detail_1'
    },
    {
        id: 2,
        name_project: 'home.project.name_2',
        image: '/images/618.webp',
        category_ids: [4],
        detail:'home.project.detail_2'
    },
    {
        id: 3,
        name_project: 'home.project.name_3',
        image: '/images/movie.webp',
        category_ids: [1],
        detail:'home.project.detail_3'
    },
    {
        id: 4,
        name_project: 'home.project.name_4',
        image: '/images/no-image.png',
        category_ids: [1,2,3],
        detail:'home.project.detail_4'
    },
    {
        id: 5,
        name_project: 'home.project.name_5',
        image: '/images/no-image.png',
        category_ids: [3],
        detail:'home.project.detail_5'
    },
    {
        id: 6,
        name_project: 'home.project.name_6',
        image: '/images/medical.webp',
        category_ids: [4],
        detail:'home.project.detail_6'
    },
    {
        id: 7,
        name_project: 'home.project.name_7',
        image: '/images/service.webp',
        category_ids: [4],
        detail:'home.project.detail_7'
    },
    {
        id: 8,
        name_project: 'home.project.name_8',
        image: '/images/tour.webp',
        category_ids: [4],
        detail:'home.project.detail_8'
    },
    {
        id: 9,
        name_project: 'home.project.name_9',
        image: '/images/course.webp',
        category_ids: [4],
        detail:'home.project.detail_9'
    }
]

export const PROFILE_MAP = {
  1: {
    image: 'home.profile.cv_img',
    link_cv: 'home.profile.cv_file_fullstack',  
  },
  3: {
    image: 'home.profile.cv_img',
    link_cv: 'home.profile.cv_file_fullstack',
  },
  5: {
    image: 'home.profile.cv_img',
    link_cv: 'home.profile.cv_file_fullstack',
  },
  7: {
    image: 'home.profile.cv_img',
    link_cv: 'home.profile.cv_file_fullstack',
  },
} as const

export const DEFAULT_TYPE = 1

export const LIST_SOCIAL:TSocial[] = [
    {
        id: 1,
        link: 'tel:0935824698',
        icon: 'phone'
    },
    {
        id: 2,
        link: 'https://zalo.me/0935824698',
        icon: 'zalo'
    },
    {
        id: 3,
        link: 'mailto:phamvantoan131294@gmail.com',
        icon: 'mail'
    }
]