import { useState, useEffect, ChangeEvent, useCallback } from 'react'
import { Link } from 'react-router-dom'

import arrow from '@/assets/images/icons/arrow.svg'
import edit from '@/assets/images/icons/edit.svg'
import trash from '@/assets/images/icons/trash.svg'
import sad from '@/assets/images/sad.svg'
import { Contact } from '@/common/types/api'
import { fetchContacts } from '@/services/api/contacts'

import Button from '@/components/Button'
import Loader from '@/components/Loader'

import * as S from './styles'

const ContactsList = () => {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [orderBy, setOrderBy] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true)
      const contactsList = await fetchContacts({ searchTerm, orderBy })

      setHasError(false)
      setContacts(contactsList)
    } catch (error) {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }, [orderBy, searchTerm])

  useEffect(() => {
    loadContacts()
  }, [loadContacts])

  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'))
  }

  const handleChangeSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleTryAgain = () => loadContacts()

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

      <S.Header hasError={hasError}>
        {!hasError && (
          <strong>
            {contacts.length} {contacts.length === 1 ? ' contato' : 'contatos'}
          </strong>
        )}

        <Link to="/new">Novo Contato</Link>
      </S.Header>

      {hasError && (
        <S.ErrorContainer>
          <img src={sad} alt="Sad" />

          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>

            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </S.ErrorContainer>
      )}

      {!hasError && (
        <>
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
        </>
      )}
    </S.Container>
  )
}

export default ContactsList
