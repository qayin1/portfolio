import React from 'react';
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
} from '@chakra-ui/react';
import './style/global.css';
import theme from './config/theme';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import eu from './assets/eu.jpg';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box display="flex">
        <Box
          bg="#191970"
          color="white"
          width="250px"
          position="fixed"
          height="100%"
          padding="20px"
          top="0"
          left="0"
        >
          <Box>
            <Image
              borderRadius="80px"
              src={eu}
              h={'200px'}
              w={'200px'}
              alt=""
              marginTop={'50px'}
            />
          </Box>
          <Stack
            marginTop={'20px'}
            alignContent={'center'}
            alignItems={'center'}
          >
            <ScrollLink
              to="sobreSection"
              smooth={true}
              duration={500}
              offset={-70}
              style={{ cursor: 'pointer' }}
            >
              Sobre
            </ScrollLink>
            <ScrollLink
              to="experienciaSection"
              smooth={true}
              duration={500}
              offset={-70}
              style={{ cursor: 'pointer' }}
            >
              Experiência
            </ScrollLink>
            <Text cursor={'pointer'}>Habilidades</Text>
            <Text cursor={'pointer'}>Projetos</Text>
          </Stack>
        </Box>

        <Box marginRight={'200px'} marginLeft="350px" padding="20px">
          <Stack
            id="sobreSection"
            alignContent={'center'}
            justifyContent={'center'}
            minHeight={'100vh'}
          >
            <Text fontFamily={'Roboto'} fontWeight={'bold'} fontSize={'30px'}>
              Carlos Alberto Gomes de Souza Junior
            </Text>
            <Text fontFamily={'Roboto'}>
              Contato: (22) 974031962 / cain.dev@protonmail.com
            </Text>

            <Text fontFamily={'Roboto'} marginTop={'30px'}>
              Com 24 anos de idade, minha jornada no desenvolvimento web teve
              início no início de 2022, quando decidi explorar esse empolgante
              mundo por conta própria. Rapidamente mergulhei nos estudos e, em
              questão de meses, estava aplicando meus conhecimentos como
              desenvolvedor front-end em uma startup. Essa experiência inicial
              solidificou minha paixão pela programação e me impulsionou a
              buscar um curso de tecnólogo em desenvolvimento full-stack.
            </Text>
          </Stack>
          <Stack id="experienciaSection" minHeight={'100vh'}>
            <Divider
              orientation="horizontal"
              borderColor="#191970"
              width="100%"
            />

            <Text
              marginBlock={'30px'}
              fontFamily={'Roboto'}
              fontSize={'40px'}
              fontWeight={'bold'}
            >
              EXPERIÊNCIA
            </Text>

            <Text fontFamily={'Roboto'} fontSize={'25px'} fontWeight={'bold'}>
              Freelance para uma startup
            </Text>

            <Text
              fontFamily={'Roboto'}
              color={'#2F4F4F'}
              fontSize={'20px'}
              marginBottom={'14px'}
            >
              Desenvolvedor FrontEnd
            </Text>

            <Text marginBottom={'6px'}>
              Como desenvolvedor FrontEnd, transformei designs do Figma em
              aplicações web funcionais. Minhas responsabilidades incluíram o
              desenvolvimento de formulários, garantindo a responsividade e
              implementando validações com Yup. Aprimorei minhas habilidades em
              JavaScript, aprofundando meu conhecimento em hooks, como useState
              e useEffect.
            </Text>
            <Text>07/2022 - 03/2023</Text>
          </Stack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
