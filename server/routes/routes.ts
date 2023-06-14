import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.send('Welcome to the homepage')
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
