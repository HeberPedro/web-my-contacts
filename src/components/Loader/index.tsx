import ReactDOM from 'react-dom'

import * as S from './styles'

const loaderRoot = document.getElementById('loader-root') as HTMLElement

const Loader = ({ isLoading = false }) => {
  if (!isLoading) {
    return null
  }

  return ReactDOM.createPortal(
    <S.Overlay>
      <div className="loader" />
    </S.Overlay>,
    loaderRoot
  )
}

export default Loader
