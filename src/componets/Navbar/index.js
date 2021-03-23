import {NavbarContainer, NavTittle, NavImage} from '../../../styles/Navbar'
import Link from 'next/link'

const Navbar = () => {
  return(
    <NavbarContainer>
      <NavTittle>HikeApp</NavTittle>
        <Link href="/" passHref>
          <NavImage src="/RostoSemFoneFinal.png"/>
        </Link>
    </NavbarContainer>
  );
}

export default Navbar;