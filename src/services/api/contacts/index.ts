import { Contact, ListParams } from '@/common/types/api'
import api from '@/services/api/request'

export const fetchContacts = async ({
  searchTerm,
  orderBy = 'asc',
}: ListParams) => {
  const { data } = await api.get<Contact[]>(
    `/contacts?&name_like=${searchTerm}&_sort=name&_order=${orderBy}`
  )

  return data
}

export const createContact = async (contact: Contact) =>
  await api.post('/contacts', contact)
