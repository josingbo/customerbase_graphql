const express = require('express')
const app = express()
const schema = require('./schema')

const expressGraphQL = require('express-graphql')

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

const port = process.env.PORT || 4000

app.listen(`${port}`, () => {
    console.log(`Server running on port ${port}`)
})