import React from 'react';
import {
    Container,
    Divider,
    SlideFade,
    Heading,
    Flex,
    Header,
    Stack,
    Box,
    VStack,
    useColorMode,
    Text
} from '@chakra-ui/react';
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillStar } from 'react-icons/ai';
import { MotionBox } from '../utils/motion';
import { companies, educations } from '../constant';
import CompanyCard from '../components/CompanyCard';
import { UnderlinedText } from '../components/UnderlinedText';
import Paragraph from '../components/Paragraph';

function About() {
    const { colorMode } = useColorMode();

    return (
        <div className={styles.container}>
            <Head>
                <title>About Me</title>
                <meta name="description" content="Teo | Mobile Application Developer" />
                <link rel="icon" href="/Arup.png" />
            </Head>

            <main>
                <Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
                    <SlideFade in offsetX={80}>
                        <Box>
                            <UnderlinedText>
                                <Flex alignItems={'center'}>
                                    <Stack pr={3}>
                                        <AiFillStar size={'30px'} />
                                    </Stack>
                                    <Heading>About Me</Heading>
                                </Flex>
                            </UnderlinedText>

                            <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                            I'm a Engineering Student Currently I Am Pusing  My B-Tech In IT .
                            I am passionate about coding and solving problems through code, 
                            and I am excited to work alongside other amazing programmers and learn so much more!
                            </Paragraph>

                            <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                            I am a self-taught programmer and I am currently learning Fullstack Web Development.
                            I am also learning Mobile Application Development.


                            </Paragraph>    

                            {/* <Flex alignItems="center" my={10}>
                                <UnderlinedText>
                                    <Flex alignItems={'center'}>
                                        <Stack pr={3}>
                                            <BsFillBriefcaseFill size={'30px'} />
                                        </Stack>

                                        <Heading>Career</Heading>
                                    </Flex>
                                </UnderlinedText>
                            </Flex> */}

                            <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={5}>
                                {companies.map((company, index) => (
                                    <MotionBox whileHover={{ y: -5 }} key={index}>
                                        <CompanyCard
                                            key={index}
                                            title={company.title}
                                            role={company.role}
                                            skills={company.skills}
                                            period={company.period}
                                            logo={company.logo}
                                            url={company.url}
                                            colorMode={colorMode}
                                        />
                                    </MotionBox>
                                ))}
                            </VStack>

                            <Flex alignItems="center" my={10}>
                                <UnderlinedText>
                                    <Flex alignItems="center">
                                        <Stack pr={3}>
                                            <FaGraduationCap size={'30px'} />
                                        </Stack>
                                        <Heading>Education</Heading>

                                    </Flex>

                                </UnderlinedText>

                            </Flex>

                            <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={5}>
                                {educations.map((education, index) => (
                                    <MotionBox whileHover={{ y: -5 }} key={index}>
                                        <CompanyCard
                                            key={index}
                                            title={education.title}
                                            role={education.role}
                                            skills={education.skills}
                                            period={education.period}
                                            logo={education.logo}
                                            url={education.url}
                                            colorMode={colorMode}
                                        />
                                    </MotionBox>
                                ))}
                            </VStack>

                        </Box>
                    </SlideFade>
                </Container>

            </main>
        </div>
    )
}

export default About;

