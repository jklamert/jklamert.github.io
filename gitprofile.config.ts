// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jklamert', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'FieldLogIQ Classic',
          description:
            'FieldLogIQ Classic is an internal hybrid web-mobile application that specializes in natural gas project management.',
          imageUrl:
            'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b9/4e/19/b94e1981-fd87-ff19-d282-e5ba963aa26c/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp',
          link: 'https://pm.flowgis.com/',
        },
        {
          title: 'FieldLogIQ',
          description:
            "FieldLogIQ is a B2B SaSS hybrid web-mobile application that specializes in natural gas project management. This brings Magnolia River's natural gas expertise into the software marketplace. The new application features advanced geospatial tooling, GPS integration, geospatial exports, and a rich dashboard for visibility.",
          imageUrl:
            'https://app.fieldlogiq.com/images/logo.png',
          link: 'https://app.fieldlogiq.com/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jason Klamert',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/jason-klamert-5848b594/',
    email: 'jayklamert@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'Microsoft SQL Server',
    'PostgreSQL',
    'Git',
    'Docker',
    'Kubernetes',
    'CSS',
    'Framework 7',
    'Capacitor.js',
    'Cordova',
    'Tailwind',
    'Material UI',
    'Python',
    'Typescript',
  ],
  experiences: [
    {
      company: 'Magnolia River Services, Inc.',
      position: 'Software Developer',
      from: 'December 2018',
      to: 'Present',
      companyLink: 'https://www.magnolia-river.com/',
    },
    {
      company: 'Magnolia River Services, Inc.',
      position: 'Junior Software Developer',
      from: 'January 2018',
      to: 'December 2018',
      companyLink: 'https://www.magnolia-river.com/',
    },
    {
      company: 'Centene',
      position: 'IT Intern - Web Services',
      from: 'May 2016',
      to: 'January 2018',
      companyLink: 'https://www.centene.com/',
    },
    {
      company: 'Centene',
      position: 'IT Intern - Web Services',
      from: 'May 2015',
      to: 'August 2015',
      companyLink: 'https://www.centene.com/',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'University of Missouri - St. Louis',
      degree: 'Bachelors of Science in Computer Science',
      from: '2012',
      to: '2017',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
