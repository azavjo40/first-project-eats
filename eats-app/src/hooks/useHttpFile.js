// my hooks http fetch запрос к сервер
import { header } from 'express-validator'
import {useState, useCallback} from 'react'

export const useHttpFile = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const requestFile = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json' 
      }
     

      const response = await fetch(url, {method, body, headers})
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так')
      }

      setLoading(false)

      return data
    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])

  const clearError = useCallback(() => setError(null), [])

  return { loading, requestFile, error, clearError }
}