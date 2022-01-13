type Error = {
  status: number
  type: string
  message: string
  error: string
}

export type ApiError = import('axios').AxiosError<Error>
