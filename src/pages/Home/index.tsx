import arrow from '@/assets/images/icons/arrow.svg'
import edit from '@/assets/images/icons/edit.svg'
import trash from '@/assets/images/icons/trash.svg'

import * as S from './styles'

const ContactsList = () => {
  return (
    <S.Container>
      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </S.InputSearchContainer>

      <S.Header>
        <strong>3 Contatos</strong>
        <a href="/new">Novo Contato</a>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Heber Victor Pedro</strong>
              <small>Instagram</small>
            </div>
            <span>heberv.pedro@gmail.com</span>
            <span>(19) 97103-8731</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>João Victor</strong>
              <small>Instagram</small>
            </div>
            <span>joão.victor@gmail.com</span>
            <span>(19) 92093-2567</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Rafael Rotiroti</strong>
              <small>Instagram</small>
            </div>
            <span>rafael.rotiroti@gmail.com</span>
            <span>(19) 92134-9867</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
      </S.ListContainer>
    </S.Container>
  )
}

export default ContactsList
