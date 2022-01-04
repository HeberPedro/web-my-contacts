import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import arrow from '@/assets/images/icons/arrow.svg'
import edit from '@/assets/images/icons/edit.svg'
import trash from '@/assets/images/icons/trash.svg'
import api from '@/services/api'

import * as S from './styles'

interface Contact {
  id: number
  name: string
  email?: string
  phone?: string
  category?: string
}

const ContactsList = () => {
  const [contacts, setContacts] = useState<Contact[]>([])

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get<Contact[]>('/contacts')

      setContacts(data)
    })()
  }, [])

  return (
    <S.Container>
      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </S.InputSearchContainer>

      <S.Header>
        <strong>{contacts.length} Contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        {contacts.map((contact) => (
          <S.Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category && <small>{contact.category}</small>}
              </div>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </S.Card>
        ))}
      </S.ListContainer>
    </S.Container>
  )
}

export default ContactsList
