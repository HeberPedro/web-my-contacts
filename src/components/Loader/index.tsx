import ReactDOM from 'react-dom'

import Spinner from '../Spinner'
import * as S from './styles'

const loaderRoot = document.getElementById('loader-root') as HTMLElement

const Loader = ({ isLoading = false }) => {
  if (!isLoading) {
    return null
  }

  return ReactDOM.createPortal(
    <S.Overlay>
      <Spinner size={90} />
    </S.Overlay>,
    loaderRoot
  )
}

export default Loader
