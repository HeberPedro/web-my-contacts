import ContactForm from '@/components/ContactForm'
import PageHeader from '@/components/PageHeader'

import * as S from './styles'

const EditContact = () => {
  return (
    <S.Container>
      <PageHeader title="Editar Heber Victor" />

      <ContactForm buttonLabel="Salvar alterações" />
    </S.Container>
  )
}

export default EditContact
