const express = require('express')
//const path = require('path')

// módulos criados
const routes = require('./routes')

const app = express()

// habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))


// habilita server para receber dados JSON
//app.use(express.json())


// definindo as rotas
app.use('/api', routes)


// executando servidor 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
