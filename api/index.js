const app = require('express')()
const axios = require('axios');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
 });

app.get('/api', (req, res) => {
  axios.get('https://api.meetup.com/Toronto-Code-Mentoring/events?page=4')
  .then(response=>{
    // handle success
    res.send(response.data)
  })
})


module.exports = app;


