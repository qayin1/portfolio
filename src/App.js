import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Image,
  VStack,
  HStack,
  Code,
  Grid,
  Stack,
  Divider,
  CheckboxIcon,
} from '@chakra-ui/react';
import { FaCss3, FaGit, FaHtml5, FaJs, FaNpm, FaReact } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './style/global.css';
import theme from './config/theme';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import eu from './assets/eu.jpg';
import IconHover from './components/IconHover';

function App() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Box display="flex">
        {mobile ? (
          <>
            <HStack
              bg="#191970"
              color="white"
              width={mobile ? '100%' : '250px'}
              position="fixed"
              height={mobile ? '150px' : '100%'}
              padding="20px"
              top="0"
              left="0"
              justifyContent={'space-between'}
            >
              <Box>
                <Image
                  borderRadius="80px"
                  src={eu}
                  h={mobile ? '100px' : '200px'}
                  w={mobile ? '100px' : '200px'}
                  alt=""
                  marginTop={mobile ? '20px' : '50px'}
                />
              </Box>
              <Stack
                marginTop={mobile ? '20px' : '0'}
                alignContent={mobile ? 'center' : 'start'}
                alignItems={mobile ? 'center' : 'start'}
              >
                <ScrollLink
                  to="sobreSection"
                  smooth={true}
                  duration={500}
                  offset={mobile ? -20 : -70}
                  style={{ cursor: 'pointer' }}
                >
                  Sobre
                </ScrollLink>
                <ScrollLink
                  to="experienciaSection"
                  smooth={true}
                  duration={500}
                  offset={mobile ? -20 : -70}
                  style={{ cursor: 'pointer' }}
                >
                  Experiência
                </ScrollLink>
                <ScrollLink
                  to="habilidadeSection"
                  smooth={true}
                  duration={500}
                  offset={mobile ? -20 : -70}
                  style={{ cursor: 'pointer' }}
                >
                  Habilidades
                </ScrollLink>
                <Text cursor={'pointer'}>Projetos</Text>
              </Stack>
            </HStack>
          </>
        ) : (
          <>
            {' '}
            <Box
              bg="#191970"
              color="white"
              width={mobile ? '100%' : '250px'}
              position="fixed"
              height={mobile ? '200px' : '100%'}
              padding="20px"
              top="0"
              left="0"
            >
              <Box>
                <Image
                  borderRadius="80px"
                  src={eu}
                  h={mobile ? '100px' : '200px'}
                  w={mobile ? '100px' : '200px'}
                  alt=""
                  marginTop={mobile ? '20px' : '50px'}
                />
              </Box>
              <Stack
                marginTop={mobile ? '20px' : '0'}
                alignContent={mobile ? 'center' : 'start'}
                alignItems={mobile ? 'center' : 'start'}
              >
                <ScrollLink
                  to="sobreSection"
                  smooth={true}
                  duration={500}
                  offset={mobile ? -20 : -70}
                  style={{ cursor: 'pointer' }}
                >
                  Sobre
                </ScrollLink>
                <ScrollLink
                  to="experienciaSection"
                  smooth={true}
                  duration={500}
                  offset={mobile ? -20 : -70}
                  style={{ cursor: 'pointer' }}
                >
                  Experiência
                </ScrollLink>
                <ScrollLink
                  to="habilidadeSection"
                  smooth={true}
                  duration={500}
                  offset={mobile ? -20 : -70}
                  style={{ cursor: 'pointer' }}
                >
                  Habilidades
                </ScrollLink>
                <Text cursor={'pointer'}>Projetos</Text>
              </Stack>
            </Box>
          </>
        )}

        <Box
          marginRight={mobile ? '0' : '200px'}
          marginLeft={mobile ? '0' : '350px'}
          padding={mobile ? '10px' : '20px'}
        >
          <Stack
            id="sobreSection"
            alignContent={mobile ? 'center' : 'center'}
            justifyContent={mobile ? 'center' : 'center'}
            minHeight="100vh"
          >
            <Text fontFamily="Roboto" fontWeight="bold" fontSize="30px">
              Carlos Alberto Gomes de Souza Junior
            </Text>
            <Text fontFamily="Roboto" fontWeight="bold" fontSize="22px">
              {' '}
              PROGRAMADOR FRONTEND
            </Text>
            <Text fontFamily="Roboto">
              Contato: (22) 974031962 / cain.dev@protonmail.com
            </Text>

            <Text fontFamily="Roboto" marginTop={mobile ? '20px' : '30px'}>
              Com 24 anos de idade, minha jornada no desenvolvimento web teve
              início no início de 2022, quando decidi explorar esse empolgante
              mundo por conta própria. Rapidamente mergulhei nos estudos e, em
              questão de meses, estava aplicando meus conhecimentos como
              desenvolvedor front-end em uma startup. Essa experiência inicial
              solidificou minha paixão pela programação e me impulsionou a
              buscar um curso de tecnólogo em desenvolvimento full-stack.
            </Text>
          </Stack>
          <Stack id="experienciaSection" minHeight="100vh">
            <Divider
              orientation="horizontal"
              borderColor="#191970"
              width="100%"
            />

            <Text
              marginBlock={mobile ? '20px' : '30px'}
              fontFamily="Roboto"
              fontSize="40px"
              fontWeight="bold"
            >
              EXPERIÊNCIA
            </Text>

            <Text fontFamily="Roboto" fontSize="25px" fontWeight="bold">
              Freelance para uma startup
            </Text>

            <Text
              fontFamily="Roboto"
              color="#2F4F4F"
              fontSize="20px"
              marginBottom={mobile ? '6px' : '14px'}
            >
              Desenvolvedor FrontEnd
            </Text>

            <Text marginBottom={mobile ? '4px' : '6px'}>
              Como desenvolvedor FrontEnd, transformei designs do Figma em
              aplicações web funcionais. Minhas responsabilidades incluíram o
              desenvolvimento de formulários, garantindo a responsividade e
              implementando validações com Yup. Aprimorei minhas habilidades em
              JavaScript, aprofundando meu conhecimento em hooks, como useState
              e useEffect.
            </Text>
            <Text>07/2022 - 03/2023</Text>
          </Stack>
          <Stack id="habilidadeSection" minHeight="100vh">
            <Divider
              orientation="horizontal"
              borderColor="#191970"
              width="100%"
            />
            <Text
              marginBlock={mobile ? '20px' : '30px'}
              fontFamily="Roboto"
              fontSize="40px"
              fontWeight="bold"
            >
              HABILIDADES
            </Text>
            <Text
              marginBottom={mobile ? '4px' : '6px'}
              fontFamily="Roboto"
              fontSize="25px"
              fontWeight="bold"
            >
              Linguagens de programação e ferramentas:
            </Text>
            <Stack
              marginBottom={mobile ? '40px' : '80px'}
              display="flex"
              flexDirection="row"
            >
              <IconHover icon={<FaHtml5 />} size="40px" />
              <IconHover icon={<FaCss3 />} size="40px" />
              <IconHover icon={<FaJs />} size="40px" />
              <IconHover icon={<FaReact />} size="40px" />
              <IconHover icon={<FaGit />} size="40px" />
              <IconHover icon={<FaNpm />} size="40px" />
            </Stack>
            <Text fontFamily="Roboto" fontSize="25px" fontWeight="bold">
              Pontos fortes:
            </Text>
            <Text>
              Interfaces/aplicações web usando React, HTML, CSS, JavaScript,
              Typescript.
            </Text>
            <Text>Controle de versão: Git</Text>
            <Text>Bibliotecas: ChakraUi, yup</Text>
            <Text>Sites rápidos e responsivos.</Text>
          </Stack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
