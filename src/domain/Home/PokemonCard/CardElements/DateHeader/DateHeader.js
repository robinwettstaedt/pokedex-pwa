import React, { useContext } from 'react';
import {
  Wrapper,
  PhraseWrapper,
  CatchPhrase,
  IMG,
  TimeWrapper,
  Date,
} from './styles/styles';

import { ThemeChangeContext } from '../../../../../contexts/ThemeChangeContext';

const DateHeader = ({ first, date }) => {
  const { theme } = useContext(ThemeChangeContext);
  return (
    <Wrapper>
      <PhraseWrapper>
        {first ? (
          <CatchPhrase>Latest Catch</CatchPhrase>
        ) : (
          <CatchPhrase>Previous Catch</CatchPhrase>
        )}
        {theme === 'dark' && (
          <IMG
            src={process.env.PUBLIC_URL + `/icons/pokeball-white.png`}
            alt={`Ball indicating the Pokemon is caught`}
          />
        )}

        {theme === 'light' && (
          <IMG
            src={process.env.PUBLIC_URL + `/icons/pokeball-grey.png`}
            alt={`Ball indicating the Pokemon is caught`}
          />
        )}
      </PhraseWrapper>
      <TimeWrapper>
        {theme === 'dark' && (
          <IMG
            src={process.env.PUBLIC_URL + `/icons/clock-white.png`}
            alt={'a clock icon'}
          />
        )}

        {theme === 'light' && (
          <IMG
            src={process.env.PUBLIC_URL + `/icons/clock-grey.png`}
            alt={'a clock icon'}
          />
        )}
        <Date>{date}</Date>
      </TimeWrapper>
    </Wrapper>
  );
};

export default DateHeader;
