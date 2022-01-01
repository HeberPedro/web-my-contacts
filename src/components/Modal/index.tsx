import ReactDOM from 'react-dom'

import Button from '@/components/Button'

import * as S from './styles'

interface ModalProps {
  danger?: boolean
}

const modalRoot = document.getElementById('modal-root') as HTMLElement

const Modal = ({ danger = false }: ModalProps) => {
  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Container danger={danger}>
        <h1>Título</h1>

        <p>Corpo do Modal</p>

        <S.Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    modalRoot
  )
}

export default Modal
