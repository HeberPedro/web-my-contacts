import logo from '@/assets/images/logo.svg'

import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <img src={logo} alt="MyContacts" />
    </S.Container>
  )
}

export default Header
