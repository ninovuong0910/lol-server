const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://abc:123@cluster0-svwfb.mongodb.net/lol?retryWrites=true';
mongoose.connect(connectionString, {useNewUrlParser: true})

const Champion = mongoose.model('Champion', {
  id: {type: String, require: true, unique: true, trim: true},
  nick: String,
  description: String,
  image: String,
  icon: String,
  skins: [String],
  basicStates: {
    health: Number,
    healthPerLevel: Number,
    healthRegen: Number,
    healthRegenPerLevel: Number,
    attackDamge: Number,
    attackDamgePerLevel: Number,
    armor: Number,
    armorPerLevel: Number,
    attackSpeed: Number,
    attackSpeedPerLevel: Number,
    magicResist: Number,
    magicResistPerLevel: Number,
    movementSpeed: Number
  },
  abilities: [
    {
      id: 0,
      name: String,
      description: String,
      icon: String,
      video: String,
    }
  ] 
});

module.exports = {Champion};