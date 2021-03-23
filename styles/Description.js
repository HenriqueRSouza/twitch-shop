import styled from 'styled-components'

export const DescriptionContainer = styled.div`
  display: grid;

  margin: auto;

  grid-template-columns: repeat(3, 33,3333% 33,3333% 33,3333%)
`;
export const DescriptionText = styled.div`
  display: grid;

  margin: 10% auto auto auto;

  text-align: start;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const DescriptionImage = styled.div`

`;
export const DescImage = styled.img`
  width: 100px;
`;
export const DescriptionProfile = styled.div`
  display: flex;

  margin: 10% auto auto auto;

  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const ImageProfile = styled.img`
  width: 100px;

  border-radius: 50%;
`;
export const TextProfile = styled.h1`
  display: flex;

  margin: auto auto auto 5%;

  text-align: center;
  justify-content: center;
  align-items: center;
`;