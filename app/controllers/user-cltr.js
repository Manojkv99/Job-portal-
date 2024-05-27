const user = require('../models/user-model')
const userCltr = {}


usersCltr.register = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const body = req.body
    try {
        const user = await UserActivation.create(body)
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json({ error: 'something went wrong' })
    }
}




usersCltr.register = (req, res) => {
    res.send('user register')
}

module.exports = usersCltr
