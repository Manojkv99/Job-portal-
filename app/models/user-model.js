const mongoose = require('mongoose')
const { Schema, model } = mongoose


const userSchema = new Schema({
    username: String,
    email: String,
    passward: String,
    role: String
})

const user = model('User', userSchema)
module.exports = User