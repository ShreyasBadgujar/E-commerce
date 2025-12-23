import express from 'express'
import { registerUser } from '../controller/registerUser'

const router = express.Router()

router.get('/create', registerUser)

export {router}