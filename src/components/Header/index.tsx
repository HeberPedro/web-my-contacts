import logo from '@/assets/images/logo.svg'

import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <img src={logo} alt="MyContacts" />

      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </S.InputSearchContainer>
    </S.Container>
  )
}

export default Header
