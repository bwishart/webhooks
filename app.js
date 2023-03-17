const express = require('express')
const handleRisk = require('./operations/risk')


const PORT = 8000           // port to listen on

const app = express()
app.use(express.json());

// JSON body logger middleware, logs incoming json bodies
app.use((req, res, next) => {
    console.log("Request body:");
    console.log(JSON.stringify(req.body));
    next();
});

// debugger

const index = '<ul><li><a href="/risk">/risk</a></li>\
                   <li><a href="/help">/help</a></li>\
                   </ul>'


app.get('', (req, res) => {
    res.send(index)
})

app.get('/help', (req, res) => {
    res.send('<h2>Help page</h2>')
})

app.get('/risk', (req, res) => {
    // handleRisk(req, res)
    res.send('GET is not supported, use POST')
})

app.post('/risk', (req, res) => {
    if (!req.body) {
        res.send('req.body is undefined')
        console.log('req.body is undefined')
    } else {
       handleRisk(req, res)
    }
})

app.get('*', (req, res) => {
    res.sendStatus(404)
    res.send({
        msg: 'URL not found'
    })
})


app.listen(PORT, () => {
    console.log('Server is up on port:' + PORT.toString())
})

