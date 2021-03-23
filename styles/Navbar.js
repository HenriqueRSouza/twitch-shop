import styled from "styled-components"
export const NavbarContainer = styled.nav`
  width: 100%;
  max-height: 15vh;

  display: grid;
  grid-template-columns: repeat(2, 70% 30%);
  margin: auto;

  background: linear-gradient(90deg, #F28482 -1.08%, rgba(242, 132, 130, 0.7) 99.99%, rgba(242, 132, 130, 0.51) 100%);
  overflow: hidden;
  
`;
export const NavTittle = styled.h1`
  display: flex;

  margin: auto;
  font-family: "Chango";
  font-size: 30px;
`;
export const NavImage = styled.img`
  width: 64px;
  height: 64px;

  display: flex;
  margin: 15px auto 15px auto;

  justify-content: center;
  text-align: center;
  align-items: center;

  padding: 5px;
  background: #EEE3AB;
  border-radius: 50px;

  cursor: pointer;
`;