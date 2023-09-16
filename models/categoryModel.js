const { default: mongoose } = require("mongoose");


const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    slug:{
        type:String,
        lowercase:true
    }
})

export default mongoose.model("category",categorySchema)