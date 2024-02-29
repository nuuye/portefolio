import React, { useEffect, useState } from 'react';
import './App.scss';

import photo from '../src/images/photo3.png';
import calculatorGIF from '../src/images/calculatorGIF.gif';
import dominion from '../src/images/dominionCapture.png';
import obisGIF from '../src/images/obisGIF.gif';
import IconContainer from './components/iconContainer/iconContainer';
import cppPicture from '../src/images/c++.png';
import javaPicture from '../src/images/java.png';
import pythonPicture from '../src/images/python.png';
import cmakePicture from '../src/images/cmake.png';
import htmlPicture from '../src/images/html.png';
import cssPicture from '../src/images/css.png';
import jsPicture from '../src/images/js.png';
import tsPicture from '../src/images/ts.png';
import reactPicture from '../src/images/react.png';
import materialPicture from '../src/images/material.png';
import antPicture from '../src/images/ant.png';
import projexPicture from '../src/images/projex.jpg';
import nodejsPicture from '../src/images/nodejs.png';
import postmanPicture from '../src/images/postman.png';
import postgrePicture from '../src/images/postgre.png';
import projexMobile from '../src/images/projexMobile.png';
import dominionMobile from '../src/images/dominionMobile.png';
import obisMobile from '../src/images/obisMobile.gif';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import IconLabelButtons from './components/IconLabelButton/IconLabelButtons';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Button from '@mui/material/Button';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import InterestsIcon from '@mui/icons-material/Interests';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TranslateIcon from '@mui/icons-material/Translate';

const customPresentationButtonStyle = {
    textTransform: 'none',
    whiteSpace: 'normal',
    textAlign: 'left',
    borderRadius: 4,
    lineHeight: 1.4,
    color: '#2b86ff',
};

function App() {
    const [display, setDisplay] = useState<string>('0');
    const [softwareBorderRightVisible, setSoftwareBorderRightVisible] =
        useState(false);
    useState(false);
    const [frontBorderRightVisible, setFrontBorderRightVisible] =
        useState(true);
    const [backBorderRightVisible, setBackBorderRightVisible] = useState(true);

    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(
                prevScrollPos > currentScrollPos || currentScrollPos < 50
            );
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const scrollToSection = (sectionId: string) => {
        const targetElement = document.getElementById(sectionId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="App">
            <header className={visible ? '' : 'hidden'}>
                <button
                    className="homeButton"
                    onClick={() => scrollToSection('firstContainerSection')}
                >
                    <HomeIcon sx={{ fontSize: 32, color: '#2b86ff' }} />
                </button>
                <div className="rightButtons">
                    <IconLabelButtons
                        Variant="text"
                        onClick={() => scrollToSection('projectsSection')}
                    >
                        Projects
                    </IconLabelButtons>
                    <IconLabelButtons
                        Variant="text"
                        onClick={() => scrollToSection('skillsSection')}
                    >
                        Skills
                    </IconLabelButtons>
                    <IconLabelButtons
                        Variant="text"
                        onClick={() => scrollToSection('experienceSection')}
                    >
                        Experience
                    </IconLabelButtons>
                    <IconLabelButtons
                        Icon={<ArrowForwardIosRoundedIcon />}
                        onClick={() => scrollToSection('contactSection')}
                    >
                        Contact
                    </IconLabelButtons>
                </div>
            </header>
            <body>
                <div className="mainContainer" id="firstContainerSection">
                    <div className="leftContainer">
                        <div className="preContainer">
                            <div className="imgContainer">
                                <Avatar
                                    alt="Thomas"
                                    src={photo}
                                    sx={{ width: 175, height: 175 }}
                                />
                            </div>
                        </div>
                        <div className="textContainer">
                            <span>Thomas Mostowfi</span>
                            <span>Computer Science Engineering student</span>
                            <span>23 years old</span>
                        </div>
                        <div className="contactContainer">
                            <div className="temporaryDiv">
                                <div>
                                    <div className="infoContainer">
                                        <IconContainer background="#373743">
                                            <ConnectWithoutContactIcon
                                                sx={{ color: '#2b86ff' }}
                                            />
                                        </IconContainer>
                                        <Button
                                            variant="text"
                                            sx={customPresentationButtonStyle}
                                        >
                                            Socials skills <br />
                                            Sociable, dedicated and rigorous
                                        </Button>
                                    </div>
                                    <div className="infoContainer">
                                        <IconContainer background="#373743">
                                            <TranslateIcon
                                                sx={{
                                                    width: '40',
                                                    height: '40',
                                                    color: '#2b86ff',
                                                }}
                                            />
                                        </IconContainer>
                                        <Button
                                            variant="text"
                                            sx={customPresentationButtonStyle}
                                        >
                                            Languages <br />
                                            English (toeic 830 ≈ B2), French
                                            (fluent)
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <a
                                        href="https://github.com/nuuye"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="infoContainer">
                                            <IconContainer background="#373743">
                                                <GitHubIcon
                                                    sx={{ color: '#2b86ff' }}
                                                />
                                            </IconContainer>
                                            <Button
                                                variant="text"
                                                sx={
                                                    customPresentationButtonStyle
                                                }
                                            >
                                                GitHub <br />
                                                https://github.com/nuuye
                                            </Button>
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.google.it/maps/place/All.+Romain+Rolland,+Lille,+France/@50.6267358,3.1040364,17.78z/data=!4m6!3m5!1s0x47c2d60f49407d3b:0xd64549875962c68b!8m2!3d50.6267597!4d3.1052631!16s%2Fg%2F1v6qgsfq?entry=ttu"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="infoContainer">
                                            <IconContainer background="#373743">
                                                <LocationOnIcon
                                                    sx={{ color: '#2b86ff' }}
                                                />
                                            </IconContainer>
                                            <Button
                                                variant="text"
                                                sx={
                                                    customPresentationButtonStyle
                                                }
                                            >
                                                Location <br />
                                                Hellemmes, Lille - France
                                            </Button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div>
                            <span className="headerText">About me</span>
                        </div>
                        <div className="presentationContainer">
                            <p>
                                Hello, my name is Thomas Mostowfi and I am
                                actively seeking a full-time <b>6 months</b>{' '}
                                internship opportunity starting from{' '}
                                <b>March, 2024</b>.
                            </p>
                            <p>
                                My educational background revolves around
                                Computer Science and Mathematics, equipping me
                                with a solid foundation in these fields. My
                                skillset includes proficiency in
                                <b> React, C++, and Java</b>, which I have honed
                                through dedicated training and practical
                                application.
                            </p>
                            <p>
                                I am eager to contribute my knowledge and skills
                                to a dynamic team while further developing my
                                abilities in a real-world professional setting
                                during this internship.
                            </p>
                        </div>
                        <div className="backgroundContainer">
                            <div className="firstBackgroundContainer">
                                <div className="titleContainer">
                                    <IconContainer background="#373743">
                                        <SchoolIcon color="primary" />
                                    </IconContainer>
                                    <span>Education (Graduation in 2024)</span>
                                </div>
                                <div className="listContainer">
                                    <List dense={true} sx={{ paddingTop: 0 }}>
                                        <ListItem divider>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon
                                                    fontSize="small"
                                                    sx={{ color: '#ffffffad' }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    color: '#ffffffad',
                                                }}
                                                secondaryTypographyProps={{
                                                    color: '#ffffff67',
                                                }}
                                                primary="Sapienza Università di Roma, Rome, Italie"
                                                secondary={
                                                    'I went to La Sapienza for 6 months to study computer science.'
                                                }
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon
                                                    fontSize="small"
                                                    sx={{ color: '#ffffffad' }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    color: '#ffffffad',
                                                }}
                                                secondaryTypographyProps={{
                                                    color: '#ffffff67',
                                                }}
                                                primary="Polytech Paris-Saclay, Orsay, Paris"
                                                secondary={
                                                    'I chose the Computer Science specialty and I aim to work in the field of programming or cyber-security.'
                                                }
                                            />
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                            <div className="secondBackgroundContainer">
                                <div className="titleContainer">
                                    <IconContainer background="#373743">
                                        <InterestsIcon
                                            sx={{ color: '#2b86ff' }}
                                        />
                                    </IconContainer>
                                    <span>Interest</span>
                                </div>
                                <div className="listContainer">
                                    <List dense={true} sx={{ paddingTop: 0 }}>
                                        <ListItem divider>
                                            <ListItemIcon>
                                                <FitnessCenterIcon
                                                    fontSize="small"
                                                    sx={{ color: '#ffffffad' }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    color: '#ffffffad',
                                                }}
                                                secondaryTypographyProps={{
                                                    color: '#ffffff67',
                                                }}
                                                primary="Sports"
                                                secondary={'Tennis, gym'}
                                            />
                                        </ListItem>
                                        <ListItem divider>
                                            <ListItemIcon>
                                                <QueryStatsIcon
                                                    fontSize="small"
                                                    sx={{ color: '#ffffffad' }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    color: '#ffffffad',
                                                }}
                                                secondaryTypographyProps={{
                                                    color: '#ffffff67',
                                                }}
                                                primary="Trading"
                                                secondary={''}
                                            />
                                        </ListItem>
                                        <ListItem divider>
                                            <ListItemIcon>
                                                <ArticleIcon
                                                    fontSize="small"
                                                    sx={{ color: '#ffffffad' }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    color: '#ffffffad',
                                                }}
                                                secondaryTypographyProps={{
                                                    color: '#ffffff67',
                                                }}
                                                primary="Technology news"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <TravelExploreIcon
                                                    fontSize="small"
                                                    sx={{ color: '#ffffffad' }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    color: '#ffffffad',
                                                }}
                                                secondaryTypographyProps={{
                                                    color: '#ffffff67',
                                                }}
                                                primary="Traveling"
                                            />
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondContainer" id="projectsSection">
                    <span>Projects</span>
                    <div className="firstProject">
                        <div className="firstProjectContainer">
                            <img
                                src={calculatorGIF}
                                alt="calculatorPhoto"
                                className="calculatorIMG"
                            />
                        </div>
                        <div className="firstProjectSecondContainer">
                            <div className="firstProjectTextContainer">
                                <div>
                                    <p>
                                        This project is a replica of the classic
                                        Windows Calculator built using React.js.
                                    </p>
                                    <p>
                                        The goal of this project was to create a
                                        functional and visually similar version
                                        <br />
                                        of the original calculator using modern
                                        web development technologies.
                                    </p>
                                    <p>
                                        The calculator features all the basic
                                        functions such as addition, subtraction,
                                        <br />
                                        multiplication, and division, as well as
                                        advanced functions.
                                    </p>
                                    <p>
                                        The user interface has been designed to
                                        closely match the original calculator,
                                        <br />
                                        with a simple and easy-to-use layout.
                                    </p>
                                </div>
                            </div>
                            <div className="projectIconContainer">
                                <a
                                    href="https://github.com/nuuye/my-calculator"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <IconContainer
                                        background="#383939"
                                        tooltip="See the code"
                                    >
                                        <GitHubIcon sx={{ color: '#2b86ff' }} />
                                    </IconContainer>
                                </a>
                                <IconLabelButtons
                                    Variant="outlined"
                                    textTransform="none"
                                >
                                    React.js
                                </IconLabelButtons>
                                <IconLabelButtons
                                    Variant="outlined"
                                    textTransform="none"
                                >
                                    TypeScript
                                </IconLabelButtons>
                                <IconLabelButtons
                                    Variant="outlined"
                                    textTransform="none"
                                >
                                    Scss
                                </IconLabelButtons>
                            </div>
                        </div>
                    </div>
                    <div className="diviser"></div>
                    <div className="secondProject">
                        <div className="secondProjectSecondContainer">
                            <div className="secondProjectTextContainer">
                                <div>
                                    <p>
                                        This project is a command-line
                                        implementation of the popular card game
                                        Dominion, created using C++.
                                    </p>
                                    <p>
                                        Dominion is a deck-building card game
                                        known for its strategic depth and
                                        intricate card interactions.
                                    </p>
                                    <p>
                                        The primary objective of this project
                                        was to replicate the gameplay experience
                                        of Dominion for two players in a
                                        text-based format.
                                    </p>
                                    <p>
                                        The user interface is designed for ease
                                        of use within the command-line
                                        environment, allowing players to input
                                        their actions and make strategic
                                        decisions through simple text-based
                                        commands.{' '}
                                    </p>
                                </div>
                            </div>
                            <div className="projectIconContainer">
                                <a
                                    href="https://github.com/nuuye/Dominion-Game"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <IconContainer
                                        background="#383939"
                                        tooltip="See the code"
                                    >
                                        <GitHubIcon sx={{ color: '#2b86ff' }} />
                                    </IconContainer>
                                </a>
                                <IconLabelButtons
                                    Variant="outlined"
                                    textTransform="none"
                                >
                                    C++
                                </IconLabelButtons>
                                <IconLabelButtons
                                    Variant="outlined"
                                    textTransform="none"
                                >
                                    CMake
                                </IconLabelButtons>
                            </div>
                        </div>
                        <div className="secondProjectContainer">
                            <img src={dominion} alt="Dominion_Project" />
                            <img
                                src={dominionMobile}
                                alt="DominionMobilePicture"
                                className="dominionMobile"
                            />
                        </div>
                    </div>
                    <div className="diviser"></div>
                    <div className="thirdProject">
                        <div className="thirdProjectContainer">
                            <img src={obisGIF} alt="obisProjectGIF" />
                            <img
                                src={obisMobile}
                                alt="obisProjectGIFMobile"
                                className="obisMobile"
                            />
                        </div>
                        <div className="thirdProjectSecondContainer">
                            <div className="thirdProjectTextContainer">
                                <div>
                                    <p>
                                        An application showing data from the
                                        Ocean Biodiversity Information System
                                        (OBIS) on a 3D globe.{' '}
                                        <p>
                                            You can choose the species and
                                            specify a date range.
                                        </p>
                                        <p>
                                            Mooving the globe is possible and
                                            the interface was made using scene
                                            builder.
                                        </p>
                                    </p>
                                </div>
                            </div>
                            <div className="projectIconContainer">
                                <IconContainer
                                    background="#383939"
                                    tooltip="See the code"
                                >
                                    <GitHubIcon sx={{ color: '#2b86ff' }} />
                                </IconContainer>
                                <IconLabelButtons
                                    Variant="outlined"
                                    textTransform="none"
                                >
                                    Java
                                </IconLabelButtons>
                                <IconLabelButtons
                                    Variant="outlined"
                                    textTransform="none"
                                >
                                    JavaFX
                                </IconLabelButtons>
                                <IconLabelButtons
                                    Variant="outlined"
                                    textTransform="none"
                                >
                                    Scene Builder
                                </IconLabelButtons>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="thirdContainer" id="skillsSection">
                    <span className="skillsTitle">Skills</span>
                    <div className="skillsContainer">
                        <div className="skillsTitleContainer">
                            <div
                                onClick={() => {
                                    setDisplay('0');
                                    setSoftwareBorderRightVisible(false);

                                    setFrontBorderRightVisible(true);

                                    setBackBorderRightVisible(true);
                                }}
                                style={{
                                    boxShadow: 'none',
                                    border: softwareBorderRightVisible
                                        ? 'none'
                                        : '2px solid #323030',
                                    borderRight: softwareBorderRightVisible
                                        ? '2px solid #323030'
                                        : 'none',
                                    borderTop: softwareBorderRightVisible
                                        ? 'none'
                                        : '1px solid #323030',
                                }}
                            >
                                Software Development
                            </div>
                            <div
                                onClick={() => {
                                    setDisplay('1');
                                    setSoftwareBorderRightVisible(true);

                                    setFrontBorderRightVisible(false);

                                    setBackBorderRightVisible(true);
                                }}
                                style={{
                                    boxShadow: 'none',
                                    border: frontBorderRightVisible
                                        ? 'none'
                                        : '2px solid #323030',
                                    borderRight: frontBorderRightVisible
                                        ? '2px solid #323030'
                                        : 'none',
                                }}
                            >
                                Front-end Web
                            </div>
                            <div
                                onClick={() => {
                                    setDisplay('2');
                                    setSoftwareBorderRightVisible(true);

                                    setFrontBorderRightVisible(true);

                                    setBackBorderRightVisible(false);
                                }}
                                style={{
                                    boxShadow: 'none',
                                    border: backBorderRightVisible
                                        ? 'none'
                                        : '2px solid #323030',
                                    borderRight: backBorderRightVisible
                                        ? '2px solid #323030'
                                        : 'none',
                                }}
                            >
                                Back-end Web
                            </div>
                        </div>
                        <div
                            className="SoftwareSkillsContainer"
                            style={{
                                display: display === '0' ? 'flex' : 'none',
                            }}
                        >
                            <div className="iconContainer">
                                <a
                                    href="https://en.wikipedia.org/wiki/C%2B%2B"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={cppPicture} alt="cpp logo" />
                                    <span>C++</span>
                                </a>

                                <a
                                    href="https://en.wikipedia.org/wiki/Java_(programming_language)"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={javaPicture}
                                        alt="java logo"
                                        className="javaLogo"
                                    />
                                    <span>Java</span>
                                </a>

                                <a
                                    href="https://www.python.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={pythonPicture}
                                        alt="python logo"
                                    />
                                    <span>Python</span>
                                </a>

                                <a
                                    href="https://cmake.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={cmakePicture} alt="cmake logo" />
                                    <span>CMake</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className="FrontSkillsContainer"
                            style={{
                                display: display === '1' ? 'flex' : 'none',
                            }}
                        >
                            <div className="iconContainer">
                                <a
                                    href="https://en.wikipedia.org/wiki/HTML"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={htmlPicture} alt="html logo" />
                                    <span>HTML</span>
                                </a>

                                <a
                                    href="https://en.wikipedia.org/wiki/CSS"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={cssPicture}
                                        alt="css logo"
                                        className="cssLogo"
                                    />
                                    <span>CSS</span>
                                </a>

                                <a
                                    href="https://en.wikipedia.org/wiki/JavaScript"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={jsPicture} alt="js logo" />
                                    <span>JavaScript</span>
                                </a>

                                <a
                                    href="https://www.typescriptlang.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={tsPicture} alt="ts logo" />
                                    <span>TypeScript</span>
                                </a>

                                <a
                                    href="https://react.dev/"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ height: '65px' }}
                                >
                                    <img src={reactPicture} alt="react logo" />
                                    <span>React</span>
                                </a>

                                <a
                                    href="https://ant.design/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={antPicture} alt="ant logo" />
                                    <span>Ant Design</span>
                                </a>

                                <a
                                    href="https://mui.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={materialPicture}
                                        alt="materialUI logo"
                                    />
                                    <span>Material UI</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className="BackSkillsContainer"
                            style={{
                                display: display === '2' ? 'flex' : 'none',
                            }}
                        >
                            <div className="iconContainer">
                                <a
                                    href="https://www.postgresql.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={postgrePicture}
                                        alt="postgre logo"
                                        className="postgreLogo"
                                    />
                                    <span>PostgreSQL</span>
                                </a>
                                <a
                                    href="https://www.postman.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={postmanPicture}
                                        alt="postman logo"
                                    />
                                    <span>Postman</span>
                                </a>
                                <a
                                    href="https://en.wikipedia.org/wiki/Node.js"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={nodejsPicture}
                                        alt="nodejs logo"
                                    />
                                    <span>NodeJS</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fourthContainer" id="experienceSection">
                    <span className="ExperienceTitle">Experience</span>
                    <div className="firstExperience">
                        <div className="textImageContainer">
                            <div className="firstExperienceContainer">
                                <img src={projexPicture} alt="ProjexPicture" />
                                <img
                                    src={projexMobile}
                                    alt="ProjexMobilePicture"
                                    className="projexMobile"
                                />
                            </div>
                            <div className="companyTitle">
                                <span className="companyTitle">
                                    Groupe Projex
                                </span>
                                <span className="roleTitle">
                                    developper intern
                                </span>
                            </div>
                        </div>
                        <div className="firstExperienceExplanation">
                            <div className="firstExperienceText">
                                <p>
                                    I did an internship in an IT center and I
                                    was able to learn HTML, CSS, JavaScript and
                                    the basics of React.
                                </p>

                                <p>
                                    One year later, I joined Projex again in
                                    order to master React (along with
                                    TypeScript), the NextJS framework and
                                    manipulate databases.
                                </p>
                                <p>
                                    I also familiarized myself with project
                                    management tools such as Jibra or Gitlab.
                                </p>
                            </div>
                            <div className="projectIconContainer">
                                <IconLabelButtons
                                    Variant="outlined"
                                    textTransform="none"
                                >
                                    React.js
                                </IconLabelButtons>
                                <IconLabelButtons
                                    Variant="outlined"
                                    textTransform="none"
                                >
                                    TypeScript
                                </IconLabelButtons>
                                <IconLabelButtons
                                    Variant="outlined"
                                    textTransform="none"
                                >
                                    SCSS & Ant Design
                                </IconLabelButtons>
                                <IconLabelButtons
                                    Variant="outlined"
                                    textTransform="none"
                                >
                                    Next.js
                                </IconLabelButtons>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fifthContainer" id="contactSection">
                    <span className="contactTitle">Contact</span>
                    <div className="preContactContainer">
                        <div className="contactContainer">
                            <div className="emailContainer">
                                <IconContainer background="#373743" size={45}>
                                    <EmailIcon sx={{ color: '#2b86ff' }} />
                                </IconContainer>
                                <Button
                                    variant="text"
                                    sx={customPresentationButtonStyle}
                                >
                                    Email <br />
                                    thomassmostowfi@gmail.com
                                </Button>
                            </div>
                            <div className="phoneContainer">
                                <IconContainer background="#373743" size={45}>
                                    <PhoneIcon sx={{ color: '#2b86ff' }} />
                                </IconContainer>
                                <Button
                                    variant="text"
                                    sx={customPresentationButtonStyle}
                                >
                                    Phone Number <br />
                                    +33(0)7 50 53 36 90
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="endText">
                    <span>
                        © Built by Thomas Mostowfi using React.js, SCSS and
                        Material UI.
                    </span>
                </div>
            </body>
        </div>
    );
}

export default App;
