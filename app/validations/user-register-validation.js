const User = require('../models/user-model')
const userRegisterValidationSchema = {
    username: {
        exists: {
            errorMessage: ' username is  required'
        },

        notEmpty: {
            errorMessage: 'username cannot be  required'
        },
        trim: true
    },
    email: {
        exists: {
            errorMessage: 'email should  required'
        },
        notEmpty: {
            errorMessage: 'email cannot  be required'
        },
        isEmail: {
            errorMessage: 'email should be a valid format'
        },
        custom: {
            options: async function (value) {
                const user = await User.findOne({ email: value })
                if (user) {
                    throw new Error('email already taken')
                } else {
                    return true
                }
            }
        },
        trim: true,
        normalizeEmail: true
    },
    password: {
        exists: {
            errorMessage: ' passward is  required'
        },
        notEmpty: {
            errorMessage: 'password cannot be   required'
        },
        isLength: {
            options: { min: 8, max: 120 },
            errorMessage: 'password should be between 8 - 120 characters'
        },
        trim: true
    },
    role: {
        exists: {
            errorMessage: ' role is  required'
        },
        notEmpty: {
            errorMessage: 'role cannot be required'
        },
        isIn: {
            options: [['candidate', 'recruiter']],
            errorMessage: 'role should either be a candidate or recruiter'
        },
        trim: true

    }
}

module.exports = userRegisterValidationSchema