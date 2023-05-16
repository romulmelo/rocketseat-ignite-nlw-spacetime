import fastify from 'fastify'

import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async (request, response) => {
  try {
    const users = await prisma.user.findMany()

    return response.send(users).status(200)
  } catch (e) {
    return response.send(e).status(400)
  }
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('Server is running! 🚀'))
