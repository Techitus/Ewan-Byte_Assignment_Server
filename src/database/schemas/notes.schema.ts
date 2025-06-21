
const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true
    },  
        content : {
            type : String
        },
        
        createdAt: {
            type: Date,
            default: Date.now     
          },
        updatedAt: {
            type: Date,
            default: Date.now     
          }


        
    }
)

module.exports = mongoose.model('note', noteSchema)
export default noteSchema;
