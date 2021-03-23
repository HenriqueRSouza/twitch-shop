import { 
  DescriptionContainer, 
  DescriptionText, 
  DescriptionImage, 
  DescImage,
  DescriptionProfile,
  ImageProfile,
  TextProfile 
} from '../../../styles/Description'

const Description = () => {
  return(
    <DescriptionContainer>
      <DescriptionImage>
        <DescImage src="/RostoComFone.png"/>
      </DescriptionImage>
      
      <DescriptionProfile>
        <ImageProfile src="https://github.com/HenriqueRSouza.png" alt="Henrique Ribeiro"></ImageProfile>
        <TextProfile>Hik3Lost</TextProfile>
      </DescriptionProfile>

      <DescriptionText>
        <h1>Descrição da Live</h1>
        <p>Dia: Segunda a Sabado</p>
        <p>Hora: 8 da manha ao meio dia</p>
      </DescriptionText>
    </DescriptionContainer>
  );
}

export default Description;