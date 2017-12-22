var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var simpleFetch = require("simple-fetch")
var PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/', function(request, response) {
  console.log(JSON.stringify(request.body))
  var token = request.body.authentications.account.token.token
  // console.log("request.body", request.body.install.options.account)
  // console.log(token)

  simpleFetch.getJson("https://slack.com/api/channels.list", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(function(account) {
      var options = request.body.install.options
      console.log("account", account)
      response.json({install: request.body.install, proceed: true})
  })
})

app.listen(PORT, function() {
  console.log("running on port " + PORT)
})