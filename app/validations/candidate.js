
const candidateValidationSchema = {
    useerId: {},
    firstName: {
        in:['body']
        exists:{
            errorMessage:'firstName is required'
        },
        notEmpty:{
            reeorMessage:'firstName cannot be empty'
        }
        trim:true
    },
    lastName:{},
    mobile:{},
    adderess:{}

}
module.exports= candidateValidationSchema
