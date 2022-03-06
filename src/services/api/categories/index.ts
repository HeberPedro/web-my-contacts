import { Category } from '@/common/types/api'
import api from '@/services/api/request'

export const fetchCategories = async () => {
  const { data } = await api.get<Category[]>('/categories?&_sort=name')

  return data
}
