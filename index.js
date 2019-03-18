const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const {Champion} = require('./Champion');

const app = express();
app.use(json());
app.use(cors());

app.post('/champion', (req, res) => {
  const {id, nick, description, image, icon, skins, basicStates, abilities} = req.body;
  const newChampion = new Champion({
    id,
    nick,
    description,
    image,
    icon,
    skins,
    basicStates,
    abilities
  })
  newChampion.save().then(c => {
    res.send({
      success: true,
      champion: c
    })
  }).catch(e => {
    res.send({
      success: false,
      message: e.message
    })
  });
})

app.get('/champion', (req, res) => {
  Champion.find({}).then(champions => {
    res.send({
      success: true,
      champions
    })
  }).catch(e => {
    res.send({
      success: false,
      message: e.message
    })
  });
})

app.listen('4000', () => console.log('Sever started'))