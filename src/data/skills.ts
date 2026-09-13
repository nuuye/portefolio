import { Skill, SkillCategoryConfig } from '../types/skill.types';

import cppPicture from '../images/c++.png';
import javaPicture from '../images/java.png';
import pythonPicture from '../images/python.png';
import cmakePicture from '../images/cmake.png';
import htmlPicture from '../images/html.png';
import cssPicture from '../images/css.png';
import jsPicture from '../images/js.png';
import tsPicture from '../images/ts.png';
import reactPicture from '../images/react.png';
import materialPicture from '../images/material.png';
import antPicture from '../images/ant.png';
import nodejsPicture from '../images/nodejs.png';
import springBootPicture from '../images/spring-boot.svg';
import postmanPicture from '../images/postman.png';
import postgrePicture from '../images/postgre.png';
import mongoDBPicture from '../images/mongodb.svg';
import kafkaPicture from '../images/kafka.svg';
import linuxPicture from '../images/cmd.png';
import bashPicture from '../images/bash.png';
import dockerPicture from '../images/docker.svg';
import gitlabPicture from '../images/gitlab.png';
import awsPicture from '../images/aws2.webp';
import metasploitPicture from '../images/metasploit.png';
import johnTheRipperPicture from '../images/johntheripper.png';
import burpSuitePicture from '../images/burpsuite.png';
import nmapPicture from '../images/nmap.png';
import kaliLinuxPicture from '../images/kaliLinux.png';
import hydraPicture from '../images/hydra.png';

export const skills: Skill[] = [
    // Software Development
    {
        name: 'C++',
        icon: cppPicture,
        link: 'https://en.wikipedia.org/wiki/C%2B%2B',
        category: 'software',
    },
    {
        name: 'Java',
        icon: javaPicture,
        link: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
        category: 'software',
        className: 'javaLogo',
    },
    {
        name: 'Python',
        icon: pythonPicture,
        link: 'https://www.python.org/',
        category: 'software',
    },
    {
        name: 'CMake',
        icon: cmakePicture,
        link: 'https://cmake.org/',
        category: 'software',
    },

    // Frontend
    {
        name: 'HTML',
        icon: htmlPicture,
        link: 'https://en.wikipedia.org/wiki/HTML',
        category: 'frontend',
    },
    {
        name: 'CSS',
        icon: cssPicture,
        link: 'https://en.wikipedia.org/wiki/CSS',
        category: 'frontend',
        className: 'cssLogo',
    },
    {
        name: 'JavaScript',
        icon: jsPicture,
        link: 'https://en.wikipedia.org/wiki/JavaScript',
        category: 'frontend',
    },
    {
        name: 'TypeScript',
        icon: tsPicture,
        link: 'https://www.typescriptlang.org/',
        category: 'frontend',
    },
    {
        name: 'React',
        icon: reactPicture,
        link: 'https://react.dev/',
        category: 'frontend',
    },
    {
        name: 'Material UI',
        icon: materialPicture,
        link: 'https://mui.com/',
        category: 'frontend',
    },
    {
        name: 'Ant Design',
        icon: antPicture,
        link: 'https://ant.design/',
        category: 'frontend',
    },

    // Backend
    {
        name: 'Node.js',
        icon: nodejsPicture,
        link: 'https://nodejs.org/',
        category: 'backend',
    },
    {
        name: 'Spring Boot',
        icon: springBootPicture,
        link: 'https://spring.io/projects/spring-boot',
        category: 'backend',
    },
    {
        name: 'PostgreSQL',
        icon: postgrePicture,
        link: 'https://www.postgresql.org/',
        category: 'backend',
        className: 'postgreLogo',
    },
    {
        name: 'MongoDB',
        icon: mongoDBPicture,
        link: 'https://www.mongodb.com/',
        category: 'backend',
        className: 'mongodbLogo',
    },
    {
        name: 'Kafka',
        icon: kafkaPicture,
        link: 'https://kafka.apache.org/',
        category: 'backend',
    },
    {
        name: 'Postman',
        icon: postmanPicture,
        link: 'https://www.postman.com/',
        category: 'backend',
    },

    // DevOps & Cloud
    {
        name: 'Linux Commands',
        icon: linuxPicture,
        link: 'https://www.gnu.org/software/coreutils/manual/coreutils.html',
        category: 'devops',
    },
    {
        name: 'Bash scripting',
        icon: bashPicture,
        link: 'https://www.gnu.org/software/bash/manual/bash.html',
        category: 'devops',
    },
    {
        name: 'Docker',
        icon: dockerPicture,
        link: 'https://www.docker.com/',
        category: 'devops',
    },
    {
        name: 'GitLab CI/CD',
        icon: gitlabPicture,
        link: 'https://docs.gitlab.com/ci/',
        category: 'devops',
    },
    {
        name: 'AWS',
        icon: awsPicture,
        link: 'https://aws.amazon.com/',
        category: 'devops',
    },

    // Security
    {
        name: 'Kali Linux',
        icon: kaliLinuxPicture,
        link: 'https://www.kali.org/',
        category: 'security',
    },
    {
        name: 'Nmap',
        icon: nmapPicture,
        link: 'https://nmap.org/',
        category: 'security',
    },
    {
        name: 'Burp Suite',
        icon: burpSuitePicture,
        link: 'https://portswigger.net/burp',
        category: 'security',
    },
    {
        name: 'Metasploit',
        icon: metasploitPicture,
        link: 'https://www.metasploit.com/',
        category: 'security',
    },
    {
        name: 'Hydra',
        icon: hydraPicture,
        link: 'https://www.kali.org/tools/hydra/',
        category: 'security',
    },
    {
        name: 'John the Ripper',
        icon: johnTheRipperPicture,
        link: 'https://www.openwall.com/john/doc/',
        category: 'security',
    },
];

export const skillCategories: SkillCategoryConfig[] = [
    {
        id: 'software',
        label: 'Software Development',
        displayIndex: '0',
    },
    {
        id: 'frontend',
        label: 'Front-end Web',
        displayIndex: '1',
    },
    {
        id: 'backend',
        label: 'Back-end Web',
        displayIndex: '2',
    },
    {
        id: 'devops',
        label: 'DevOps & Cloud',
        displayIndex: '3',
    },
    {
        id: 'security',
        label: 'Cybersecurity Tools',
        displayIndex: '4',
    },
];
