import { ReactNode, ReactNodeArray } from 'react'

import Spinner from '../Spinner'
import * as S from './styles'

interface FormGroupProps {
  children: ReactNode | ReactNodeArray
  error?: string
  isLoading?: boolean
}

const FormGroup = ({ children, error, isLoading }: FormGroupProps) => {
  return (
    <S.Container>
      <div className="form-item">
        {children}

        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>

      {error && <small>{error}</small>}
    </S.Container>
  )
}

export default FormGroup
