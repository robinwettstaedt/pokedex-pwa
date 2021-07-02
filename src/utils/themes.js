import { createGlobalStyle } from 'styled-components';

const types = {
  electric: '#F9C13E',
  grass: '#85BF79',
  poison: '#8F30C9',
  normal: '#D6D6D6',
  fire: '#E77341',
  water: '#4C83ED',
  fighting: '#A65E48',
  ground: '#CFA462',
  flying: '#AEA5E5',
  psychic: '#D6757B',
  bug: '#A5CB68',
  rock: '#9D7753',
  dark: '#584E44',
  dragon: '#5857B1',
  steel: '#9F9EA7',
  fairy: '#C96DC0',
  ghost: '#6B539D',
  ice: '#70DDE4',
};

export const darkTheme = {
  primaryBackgroundColor: '#242632',
  primaryCardBackgroundColor: '#242632',
  primaryFontColor: '#fff',
  secondaryFontColor: 'rgba(255, 255, 255, 0.5)',
  primaryBorderValue: '1px solid rgba(255, 255, 255, 0.2)',
  primaryBorderRadius: '20px',
  tabletBorderRadius: '30px',
  primaryBoxShadowValue: '0px 0px 10px rgba(0, 0, 0, 0.5)',
  outsideMobilePaddingLeftRight: '0.8rem',
  outsideTabletPaddingLeftRight: '1.2rem',
  outsideDesktopPaddingLeftRight: '1.6rem',
  ...types,
};

export const lightTheme = {
  primaryBackgroundColor: '#E5E5E5',
  primaryCardBackgroundColor: '#fff',
  primaryFontColor: '#5a5a5a',
  secondaryFontColor: 'rgba(90, 90, 90, 0.5)',
  primaryBorderValue: 'none',
  primaryBorderRadius: '20px',
  tabletBorderRadius: '30px',
  primaryBoxShadowValue: 'none',
  outsideMobilePaddingLeftRight: '0.8rem',
  outsideTabletPaddingLeftRight: '1.2rem',
  outsideDesktopPaddingLeftRight: '1.6rem',
  ...types,
};

export const GlobalStyles = createGlobalStyle`
  *{
     font-family: 'Inter', sans-serif;
     box-sizing: border-box;
     margin: 0;
     padding: 0;      
   }
   
   body {
     background-color: ${(props) =>
       props.theme === 'dark' ? '#242632' : '#E5E5E5'};
     overflow-x: hidden;
   }

`;
