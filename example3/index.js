let express = require('express')
let app = express()

app.use(express.static(__dirname + '/www'));

app.listen(3000, function () {
    console.log('Listening on port 3000...')
})
