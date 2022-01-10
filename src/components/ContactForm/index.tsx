import { ChangeEvent, FormEvent, useState } from 'react'

import { useErrors } from '@/hooks'
import { formatPhone, isEmailValid } from '@/utils'

import Button from '@/components/Button'
import FormGroup from '@/components/FormGroup'
import Input from '@/components/Input'
import Select from '@/components/Select'

import * as S from './styles'

interface ContactFormProps {
  buttonLabel: string
}

const ContactForm = ({ buttonLabel }: ContactFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors()

  const isFormValid = name && errors.length === 0

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' })
    } else {
      removeError('name')
    }
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'Email inválido' })
    } else {
      removeError('email')
    }
  }

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPhone(formatPhone(event.target.value))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = { name, email, phone, category }
  }

  return (
    <S.Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type="text"
          error={!!getErrorMessageByFieldName('name')}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          error={!!getErrorMessageByFieldName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          pattern="[0-9 ]+"
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </S.Form>
  )
}

export default ContactForm
