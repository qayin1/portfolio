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
  UnorderedList,
  ListItem,
  Select,
} from '@chakra-ui/react';
import { FaCss3, FaGit, FaHtml5, FaJs, FaNpm, FaReact } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import weatherapp from './assets/weatherapp.png';
import weatherappmobile from './assets/weatherappmobile.png';
import './style/global.css';
import theme from './config/theme';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

import eu from './assets/eu.jpg';
import IconHover from './components/IconHover';

function App() {
  const [mobile, setMobile] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = event => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

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
              height={mobile ? '140px' : '100%'}
              position={'fixed'}
              paddingInline={'20px'}
              top="0"
              left="0"
              justifyContent={'space-between'}
            >
              <Box>
                <HStack>
                  <Image
                    borderRadius="80px"
                    src={eu}
                    h={mobile ? '100px' : '200px'}
                    w={mobile ? '100px' : '200px'}
                    alt=""
                    marginTop={mobile ? 'initial' : '50px'}
                    mr={'12px'}
                  />
                  <Select value={language} onChange={handleLanguageChange}>
                    <option style={{ color: '#000000' }} value="en">
                      English
                    </option>
                    <option style={{ color: '#000000' }} value="pt">
                      Português
                    </option>
                  </Select>
                </HStack>
              </Box>
              <Stack
                marginTop={mobile ? '0' : '0'}
                alignContent={mobile ? 'center' : 'start'}
                alignItems={mobile ? 'center' : 'start'}
              >
                <ScrollLink
                  to="sobreSection"
                  smooth={true}
                  duration={500}
                  offset={mobile ? -160 : -70}
                  style={{ cursor: 'pointer' }}
                >
                  {t('sobre')}
                </ScrollLink>
                <ScrollLink
                  to="experienciaSection"
                  smooth={true}
                  duration={500}
                  offset={mobile ? -160 : -70}
                  style={{ cursor: 'pointer' }}
                >
                  {t('experiencia')}
                </ScrollLink>
                <ScrollLink
                  to="habilidadeSection"
                  smooth={true}
                  duration={500}
                  offset={mobile ? -160 : -70}
                  style={{ cursor: 'pointer' }}
                >
                  {t('habilidades')}
                </ScrollLink>
                <ScrollLink
                  to="projetoSection"
                  smooth={true}
                  duration={500}
                  offset={mobile ? -160 : -70}
                  style={{ cursor: 'pointer' }}
                >
                  {t('projetos')}
                </ScrollLink>
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
                <Select value={language} onChange={handleLanguageChange}>
                  <option style={{ color: '#000000' }} value="en">
                    English
                  </option>
                  <option style={{ color: '#000000' }} value="pt">
                    Português
                  </option>
                </Select>
                <Image
                  borderRadius="80px"
                  src={eu}
                  h={mobile ? '100px' : '200px'}
                  w={mobile ? '100px' : '200px'}
                  alt=""
                  marginTop={mobile ? '20px' : '50px'}
                  marginBottom={mobile ? 'initial' : '20px'}
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
                  offset={mobile ? 80 : -70}
                  style={{ cursor: 'pointer' }}
                >
                  {t('sobre')}
                </ScrollLink>
                <ScrollLink
                  to="experienciaSection"
                  smooth={true}
                  duration={500}
                  offset={mobile ? 80 : -70}
                  style={{ cursor: 'pointer' }}
                >
                  {t('experiencia')}
                </ScrollLink>
                <ScrollLink
                  to="habilidadeSection"
                  smooth={true}
                  duration={500}
                  offset={mobile ? 80 : -70}
                  style={{ cursor: 'pointer' }}
                >
                  {t('habilidades')}
                </ScrollLink>
                <ScrollLink
                  to="projetoSection"
                  smooth={true}
                  duration={500}
                  offset={mobile ? 80 : -70}
                  style={{ cursor: 'pointer' }}
                >
                  {t('projetos')}
                </ScrollLink>
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
            <Text
              fontFamily="Roboto"
              fontWeight="bold"
              fontSize={mobile ? '20px' : '30px'}
            >
              {t('nome')}
            </Text>
            <Text
              fontFamily="Roboto"
              fontWeight="bold"
              fontSize={mobile ? '16px' : '24px'}
              marginBottom={mobile ? '10px' : '20px'}
            >
              {t('cargo')}
            </Text>
            <HStack>
              <Text fontWeight={'bold'} fontFamily="Roboto">
                {t('contato')}
              </Text>
              <Text>(22) 974031962 / cain.dev@protonmail.com</Text>
            </HStack>

            <Text fontFamily="Roboto" marginTop={mobile ? '10px' : '30px'}>
              {t('sobremim')}
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
              {t('experienciacaps')}
            </Text>

            <Text fontFamily="Roboto" fontSize="25px" fontWeight="bold">
              {t('tipodetrabalho')}
            </Text>

            <Text
              fontFamily="Roboto"
              color="#2F4F4F"
              fontSize="20px"
              marginBottom={mobile ? '6px' : '14px'}
            >
              {t('cargodotrabalho')}
            </Text>

            <Text marginBottom={mobile ? '4px' : '6px'}>
              {t('descriçaodotrabalho')}
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
              {t('habilidadecaps')}
            </Text>
            <Text
              marginBottom={mobile ? '4px' : '6px'}
              fontFamily="Roboto"
              fontSize="25px"
              fontWeight="bold"
            >
              {t('ferramentas')}
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
              {t('fortes')}
            </Text>
            <Text>{t('interfaces')}</Text>
            <Text>{t('versao')}</Text>
            <Text>{t('bibliotecas')}</Text>
            <Text>{t('responsivos')}</Text>
          </Stack>
          <Stack id="projetoSection" minHeight="100vh">
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
              {t('projetocaps')}
            </Text>
            <Stack maxWidth={'180px'}>
              <Link
                fontSize={'28px'}
                w={'auto'}
                textDecoration={'underline'}
                color={'#0000ff'}
                href="https://weather-app-seven-beta-35.vercel.app"
                isExternal
              >
                Weather app
              </Link>
            </Stack>

            <Text>{t('descriçaoweather')}</Text>
            {mobile ? (
              <>
                <VStack>
                  <Image
                    borderRadius={'20px'}
                    boxSize={'300px'}
                    sizes="200px"
                    objectFit="cover"
                    src={weatherappmobile}
                    alt="weather app print"
                  />
                  <Stack>
                    <Text fontWeight={'bold'} fontSize={'20px'}>
                      {t('recursoprincipal')}
                    </Text>
                    <UnorderedList spacing={3}>
                      <ListItem>{t('lista1')}</ListItem>
                      <ListItem>{t('lista2')}</ListItem>
                      <ListItem>{t('lista3')}</ListItem>
                      <ListItem>{t('lista4')}</ListItem>
                    </UnorderedList>
                    <Text mt={'8px'} fontWeight={'bold'} fontSize={'20px'}>
                      {t('tecnologias')}
                    </Text>
                    <UnorderedList spacing={3}>
                      <ListItem>{t('linguagem')}</ListItem>
                      <ListItem>{t('frameworks')}</ListItem>
                      <ListItem>{t('api')}</ListItem>
                      <ListItem>{t('outros')}</ListItem>
                    </UnorderedList>
                  </Stack>
                </VStack>{' '}
              </>
            ) : (
              <>
                {' '}
                <HStack>
                  <Image
                    borderRadius={'20px'}
                    boxSize={'500px'}
                    sizes="200px"
                    objectFit="cover"
                    src={weatherapp}
                    alt="weather app print"
                  />
                  <Stack>
                    <Text fontWeight={'bold'} fontSize={'20px'}>
                      {t('recursoprincipal')}
                    </Text>
                    <UnorderedList spacing={3}>
                      <ListItem>{t('lista1')}</ListItem>
                      <ListItem>{t('lista2')}</ListItem>
                      <ListItem>{t('lista3')}</ListItem>
                      <ListItem>{t('lista4')}</ListItem>
                    </UnorderedList>
                    <Text mt={'8px'} fontWeight={'bold'} fontSize={'20px'}>
                      {t('tecnologias')}
                    </Text>
                    <UnorderedList spacing={3}>
                      <ListItem>{t('linguagem')}</ListItem>
                      <ListItem>{t('frameworks')}</ListItem>
                      <ListItem>{t('api')}</ListItem>
                      <ListItem>{t('outros')}</ListItem>
                    </UnorderedList>
                  </Stack>
                </HStack>
              </>
            )}
          </Stack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
