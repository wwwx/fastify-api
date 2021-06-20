const fastify = require('fastify')({logger: true})
const { v4: uuidv4 } = require('uuid')

const PORT = 3000

fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'fastify-api'
        }
    }
})

fastify.get('/', (request, reply) => {
    return { "title": "Hello world;", "id": uuidv4() }
})

const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (err) { 
        fastify.log.error(err)
        process.exit(1)
    }
}


start()