
import {
  mobile,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Support",
    company_name: "IT Evolution Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developed interactive forms with advanced functionality, utilizing JavaScript and Adobe Acrobat to create four interactive forms for LC Abelheim with conditional statements, enhancing user experience and data accuracy.",
      "Designed customized Odoo invoice templates for various companies, leveraging Python and Django to align the templates with individual branding and operational requirements.",
      "Efficiently managed Odoo databases for Heimdall Ltd., applying database management skills to set up databases, configure modules, and ensure smooth system functionality.",
      "Maintained and enhanced WordPress websites, using HTML, CSS, and JavaScript to update website content, implement design changes, resolve technical issues, and integrate new features.",
      "Provided comprehensive IT support, including desktop, Odoo, and Microsoft 365 support, effectively resolving client issues and demonstrating strong problem-solving skills.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Hexakomb",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2022 - August 2023",
    points: [
      "Optimized Firestore database performance by 50%, utilizing Python, Django, and Firestore to improve query execution, resulting in faster data retrieval and cost reduction.",
      "Developed a Django-based application for task management, showcasing Python and Django expertise to create a user-friendly interface for efficient task tracking.",
      "Implemented RESTful API with third-party services, utilizing Python, Django, and APIs to achieve a 30% faster response time, enhancing overall application efficiency.",
      "Constructed a robust, scalable database architecture for the WAKA gym system, using MySQL and database management skills to support 1000+ users, ensuring seamless member data and workout plan management.",
      "Collaborated with the marketing team, demonstrating teamwork and communication skills, to design a strategy that increased Hexakomb's audience by 5% within three months.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Global Purpose Enterprise",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - March 2023",
    points: [
      "Collaborated with the development team on cutting-edge projects utilizing React.js and TypeScript to build responsive and user-friendly web applications",
      "Participated in agile development practices, attending daily stand-ups and contributing to sprint planning and retrospectives.",
      "Actively engaged in continuous learning, staying up-to-date with industry trends and best practices in software development.",
      "Demonstrated strong adaptability and time management skills while working remotely, effectively contributing to the team's objectives.",
      "Gained hands-on experience in TypeScript development and contributed to the implementation of key features, ensuring optimal performance and functionality.",
    ],
  },
  {
    title: "Data Monitoring",
    company_name: "Victoria Beachcomber Resorts&Spa Hotels",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Mar 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Aqua Springs Mauritius",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Nov 2021",
    points: [
      "Utilized Adobe Photoshop and Adobe Illustrator to create captivating graphic designs and motion graphics, enhancing visual appeal and engagement in marketing materials.",
      "Collaborated with the team to design and produce compelling social media content, showcasing graphic design expertise to drive brand awareness and audience engagement.",
      "Developed eye-catching marketing collateral, including brochures and posters, while adhering to brand guidelines, ensuring consistent visual identity and reinforcing product branding strategies.",
      "Contributed to maintaining brand consistency across platforms, skillfully integrating typography, composition, layout, and color in alignment with Aqua Springs' visual identity.",
      "Actively participated in social media marketing efforts, displaying skills in content creation and visual storytelling to attract and retain followers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Odoo",
    description:
      "Created Invoices, Reports and Modules in Odoo 16 ",
    tags: [
      {
        name: "odoo",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "#",
  },
  {
    name: "To do application",
    description:
      "An application to manage users tasks(create,read, update and delete)",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "html&css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/pascagihozo/to_do_app",
  },
  {
    name: "Island Salt Mauritius",
    description:
      "Re-designed the website footer to align with the brand guidelines",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "workproject",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://islandsalt.mu",
  },
  
  {
    name: "Sanlam Private Wealth",
    description:
      "Re-designed the website, added new forms and protected them with captcha Recaptcha to avoid spam entries",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "workproject",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://sanlamprivatewealth.mu",
  },
  {
    name: "Safari Solve",
    description:
      "A comprehensive travel platform that uses API to allow users to check prices in different cities and be able to compare them cities.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/pascagihozo/wdt-safari_solve",
  },
  {
    name: "Valley Nuts",
    description:
      "Re-designed the website to properly align with the brand and added address into the footer",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "workproject",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://valleynuts.net",
  },
];

export { services, technologies, experiences, testimonials, projects };