'use strict'

const initApp = require('./src/app')

const app = initApp()

app.listen(process.env.PORT || 8080, () => console.log(`Example app listening!`))