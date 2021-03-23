import {MainContainer, MainText, MainBar, MainDescript} from '../../../styles/Main'
import ExperienceBar from '../../componets/ExperienceBar'
import Description from '../Description'

const Main = () => {
  return(
    <MainContainer>
      <MainText>
        <MainBar>
          <ExperienceBar />
        </MainBar>

        <MainDescript>
          <Description />
        </MainDescript>
      </MainText>
    </MainContainer>
  );
}

export default Main;