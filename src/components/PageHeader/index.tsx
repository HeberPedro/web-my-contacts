import { Link } from 'react-router-dom'

import arrow from '@/assets/images/icons/arrow.svg'

import * as S from './styles'

interface PageHeaderProps {
  title: string
}

const PageHeader = ({ title }: PageHeaderProps) => (
  <S.Container>
    <Link to="/">
      <img src={arrow} alt="Back" />
      <span>Voltar</span>
    </Link>
    <h1>{title}</h1>
  </S.Container>
)

export default PageHeader
