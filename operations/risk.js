express = require('express')


const handleRisk = (req, res) => { 
    // if (req.query.qs) {
    //     console.log('queryString:' + req.query.qs + ':')

    const operation = req.body.operation
    if (!operation) {
        console.log('handleAssessment: req.body.operation undefined')
        res.send('handleAssessment: req.body.operation undefined')
        return
    }
    console.log('operation: ', operation)

    const parameters = req.body.parameters
    if (!parameters) {
        console.log('handleAssessment: req.body.parameters undefined')
        res.send('handleAssessment: req.body.parameters undefined')
        return
    }
    console.log('parameters: ', parameters)
    const username = parameters.username
    console.log('username:', username)

    const category = 'test'
    const score = '80'
    const whResponse = {
        "attributes": {
            "XFE-IP-Category": category,
            "XFE-IP-Score": score
        },
        "integrationId": "50eb741b-885c-4621-8c32-b514d2bada76",
        "result": { 
            "action" : "ACTION_MFA_ALWAYS",
            "message" : "Risk response returned from handleRisk webhook response"
        },
        "version": "1.1"
    }
    res.send(whResponse).json
}

module.exports = handleRisk

