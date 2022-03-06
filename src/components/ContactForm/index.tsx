import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import { Category } from '@/common/types/api'
import { useErrors } from '@/hooks'
import { fetchCategories } from '@/services/api/categories'
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
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors()

  const isFormValid = name && errors.length === 0

  useEffect(() => {
    async function loadCategories() {
      try {
        const categories = await fetchCategories()

        setCategories(categories)
      } catch {
      } finally {
        setIsLoadingCategories(false)
      }
    }

    loadCategories()
  }, [])

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

    const data = { name, email, phone, categoryId }
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
      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          disabled={isLoadingCategories}
        >
          <option value="">Sem categoria</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
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
