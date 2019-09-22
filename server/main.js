const express = require('express')

const app = express()

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.get('/api/*', (req, res) => {
  res.json({
    data: 'this will have a nice API'
  })
})

app.listen(process.env.PORT || 8080, () => console.log(`Example app listening!`))