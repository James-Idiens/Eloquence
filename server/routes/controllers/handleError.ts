import { Response } from 'express'

// centralised error response function
const handleError = (
  res: Response,
  statusCode: number,
  errorMessage: string
) => {
  console.error(errorMessage)
  res.status(statusCode).json({ error: errorMessage })
}

export default handleError
