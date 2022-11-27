import { SiDart, SiFirebase, SiPowershell, SiGmail, SiVisualstudiocode, SiFastapi} from 'react-icons/si';
import { FaReact, FaGitAlt, FaAndroid, FaJava, FaLinkedin, FaStackOverflow, FaMedium, FaGithub, FaHtml5, FaCss3,FaPhp,FaNode ,FaPython} from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import { FiMail } from "react-icons/fi";

const menuLinks = [
    { name: "About Me", route: "/about" },
    // { name: "Experience", route: "/experience" },
    { name: "Projects", route: "/projects" },
    { name: 'Github', route: '/github' },
    { name: 'Articles', route: '/article' },
    { name: "Contact", route: "/contact" },
]

const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Arup Mandal. All Rights Reserved.`,
    author: {
        name: "Arup Mandal",
        accounts: [
            {
                url: "https://github.com/arupmandal",
                icon: <FaGithub />,
                name: "Github",
                type: "gray"
            },
            {
                url: "https://www.linkedin.com/in/iamarupmandal/",
                icon: <FaLinkedin />,
                name: "Linkedin",
                type: "linkedin"
            },
            {
                url: "https://stackoverflow.com/",
                icon: <FaStackOverflow />,
                name: "StackOverflow",
                type: "orange"
            },
            {
                url: "https://iamarupmandal.medium.com/",
                icon: <FaMedium />,
                name: "Medium",
                type: "gray"
            },
            {
                url: "mailto:cyberboyarup@gmail.com",
                icon: <SiGmail />,
                name: "Gmail",
                type: "red"
            }
        ]
    }
}

const resume = {
    url: "https://drive.google.com/file/d/1rbe1pfzh0f3TDuIGYgCkHPfAIdTLyPFb/view?usp=share_link",
    icon: <CgAlbum />,
    name: "Resume"
}

const techStacks = [
    {
        name: "HTML",
        icon: <FaHtml5 fontSize="20px" />,
        url: "https://www.w3schools.com/html/",
    },
    {
        name: "CSS",
        icon: <FaCss3 fontSize="20px" />,
        url: "https://www.w3schools.com/css/",
    },
    {
        name: "PHP",
        icon: <FaPhp fontSize="20px" />,
        url: "https://www.php.net/",
    },
    {
        name: "React",
        icon: <FaReact fontSize="20px" />,
        url: "https://reactjs.org/",
    },

    {
        name: "Android",
        icon: <FaAndroid fontSize="20px" />,
        url: "https://www.android.com/",
    },
    {
        name: "Node Js",
        icon: <FaNode fontSize="20px" />,
        url: "https://reactnative.dev/",
    },
    {
        name: "Dart",
        icon: <SiDart fontSize="20px" />,
        url: "https://dart.dev/",
    },
    {
        name: "Python",
        icon: <FaPython fontSize="20px" />,
        url: "https://www.python.org/",
    },
    {
        name: "VS Code",
        icon: <SiVisualstudiocode fontSize="20px" />,
        url: "https://code.visualstudio.com/",
    },
    {
        name: "Firebase",
        icon: <SiFirebase fontSize="20px" />,
        url: "https://firebase.google.com/",
    },
    {
        name: "Github & GitLab",
        icon: <FaGitAlt fontSize="20px" />,
        url: "https://www.gitlab.com/",
    },
    {
        name: "powershell",
        icon: <SiPowershell fontSize="20px" />,
        url: "https://learn.microsoft.com/en-us/powershell/",
    },
    {
        name: "API",
        icon: <SiFastapi fontSize="20px" />,
        url: "https://en.wikipedia.org/wiki/API",
    },
]

const companies = [
    // {
    //     title: "Qumon Intelligence",
    //     alt: "qumon image",
    //     url: 'https://www.qumonintelligence.com/',
    //     role: "Mobile Application Developer",
    //     skills: ["Kotlin", "Java", "Android", "Javascript", "React", "React Native"],
    //     period: "Aug 2020 - Present",
    //     logo: '/qumon.png'
    // },
    // {
    //     title: "TimeTec Cloud Sdn Bhd",
    //     alt: "timetec image",
    //     url: "https://www.timeteccloud.com/",
    //     role: "Mobile Application Developer Intern",
    //     skills: ["Java", "Android", "C#", "Appium Automation Testing", "AWS"],
    //     period: "Jul 2019 - Jan 2020",
    //     logo: '/timetec.png'
    // }
]

const educations = [
    {
        title: "Bankura Unnayani Institute of Engineering (BUIE)",
        alt: "BUIE image",
        url: 'https://www.utm.my/',
        role: "Bachelor's Degree in Information technology",
        skills: ["Pursing", "Python", "DSA", "Networking", "Web Development"],
        period: "Aug 2022 - Present",
        logo: '/BUIE.jpeg'
    },
    {
        title: "Iswar Chandra Vidyasagar Polytechnic(ICVP)",
        alt: "ICVP image",
        url: 'https://en.wikipedia.org/wiki/Ishwar_Chandra_Vidyasagar_Polytechnic/',
        role: "Diploma-Computer Science & Technology (CST)",
        skills: ["Parcentage - 72%"],
        period: "Aug 2019 - July 2022",
        logo: '/icvp.jpeg'
    },
]

const liveProjects = [
    // {
    //     name: 'ShareMe',
    //     imageUrl: 'https://shareme-delta.vercel.app/',
    //     alt: 'ShareMe',
    //     summary: 'Enterprise ready live-chat base customer support & engagement software',
    //     Live: 'https://shareme-delta.vercel.app/',
    //     SourceCode: 'https://github.com/cyberboyarup/ShareMe'
    // },
    // {
    //     name: 'ChativoV',
    //     imageUrl: 'https://play-lh.googleusercontent.com/5U5s7sSIuzP6CygPkU2ZYxyOXT-MKv7oiyweGKHgkEgVameOcYt44rnXqCTWZJNZgVqn=s360-rw',
    //     alt: 'chativo-v',
    //     summary: 'Live-chat specifically designed for visitors to communicate with real-time agent instantly',
    //     playstore: 'https://play.google.com/store/apps/details?id=io.chativo.visitor',
    //     appstore: 'https://apps.apple.com/us/app/chativov/id1595519177'
    // }
]



export { menuLinks, techStacks, siteConfig, resume, companies, educations, liveProjects }