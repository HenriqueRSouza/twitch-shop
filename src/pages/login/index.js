import {LoginContainer, LogoImg, Tittle, Paragraph, Button, Image, TextsLogin, ImageTwitch} from '../../../styles/Login'
import Link from 'next/link'

const Login = () => {
  return(
    <LoginContainer>
      <TextsLogin>
        <LogoImg>
          <Image src="/RostoComFOne.png"/>
        </LogoImg>
        <Tittle>
          HikeApp
        </Tittle>

        <Paragraph>
          App que auxilia os streamers
        </Paragraph>

        <Link href="/home" passHref>
          <Button>
            Venha participar
            <ImageTwitch src="/Twitch.png"/>
          </Button>
        </Link>
      </TextsLogin>
    </LoginContainer>
  );
}

export default Login;