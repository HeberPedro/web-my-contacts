import { useState } from 'react'

interface Error {
  field: string
  message: string
}

export const useErrors = () => {
  const [errors, setErrors] = useState<Error[]>([])

  const setError = ({ field, message }: { field: string; message: string }) => {
    const errorAlreadyExists = errors.find((error) => error.field === field)

    if (errorAlreadyExists) {
      return
    }

    setErrors((prevState) => [...prevState, { field, message }])
  }

  const removeError = (fieldName: string) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName)
    )
  }

  const getErrorMessageByFieldName = (fieldName: string) => {
    return errors.find((error) => error.field === fieldName)?.message
  }

  return { errors, setError, removeError, getErrorMessageByFieldName }
}
