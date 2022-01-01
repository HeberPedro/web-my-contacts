import { ReactNode, ReactNodeArray } from 'react'

import * as S from './styles'

interface FormGroupProps {
  children: ReactNode | ReactNodeArray
  error?: string
}

const FormGroup = ({ children, error }: FormGroupProps) => {
  return (
    <S.Container>
      {children}
      {error && <small>{error}</small>}
    </S.Container>
  )
}

export default FormGroup
