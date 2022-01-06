import { useState, useEffect, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'

import arrow from '@/assets/images/icons/arrow.svg'
import edit from '@/assets/images/icons/edit.svg'
import trash from '@/assets/images/icons/trash.svg'
import api from '@/services/api'

import Loader from '@/components/Loader'

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
  const [orderBy, setOrderBy] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true)

        const { data } = await api.get<Contact[]>(
          `/contacts?&name_like=${searchTerm}&_sort=name&_order=${orderBy}`
        )

        setContacts(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    loadContacts()
  }, [orderBy, searchTerm])

  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'))
  }

  const handleChangeSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <S.Container>
      <Loader isLoading={isLoading} />

      <S.InputSearchContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Pesquise pelo nome..."
          onChange={handleChangeSearchTerm}
        />
      </S.InputSearchContainer>

      <S.Header>
        <strong>
          {contacts.length} {contacts.length === 1 ? ' contato' : 'contatos'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </S.Header>

      {contacts.length > 0 && (
        <S.ListHeader orderBy={orderBy}>
          <header>
            <button type="button" onClick={handleToggleOrderBy}>
              <span>Nome</span>
              <img src={arrow} alt="Arrow" />
            </button>
          </header>
        </S.ListHeader>
      )}

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
    </S.Container>
  )
}

export default ContactsList
