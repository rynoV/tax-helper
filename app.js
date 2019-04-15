const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const { exec } = require('child_process')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/fill', handlePost)

function handlePost(req, res) {
  const { body } = req
  const runPerl = exec(
    `perl ./perl/fillFormFields.plx '${JSON.stringify(body)}'`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`)
        return
      }
      console.log(`stdout: ${stdout}`)
      console.log(`stderr: ${stderr}`)
    }
  )

  runPerl.once('exit', (code, signal) => {
    res.redirect('/download')
  })
}

app.get('/api/download', (req, res) => res.download('./resources/output.pdf'))

const port = process.env.PORT || 5000
app.listen(port)

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/404.html'))
})

console.log('App is listening on port ' + port)
