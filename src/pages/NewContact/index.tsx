import ContactForm from '@/components/ContactForm'
import PageHeader from '@/components/PageHeader'

import * as S from './styles'

const NewContact = () => {
  return (
    <S.Container>
      <PageHeader title="Novo Contato" />

      <ContactForm buttonLabel="Cadastrar" />
    </S.Container>
  )
}

export default NewContact
