const express = require('express')
const path = require('path')

const app = express()

const distDir =path.join(__dirname,'../', 'build')

console.log(distDir)
app.use(express.static(distDir));

app.get('/api/*', (req, res) => {
  res.json({
    data: 'this will have a nice API'
  })
})

app.listen(process.env.PORT || 8080, () => console.log(`Example app listening!`))