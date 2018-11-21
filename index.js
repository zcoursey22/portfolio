const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/getTest', (req, res) => {
  res.send('Proxy connected');
});

app.post('/api/postTest', (req, res) => {
  console.log(`${req.body.name} sent you an email: "${req.body.message}" with the email address ${req.body.email}.`);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
