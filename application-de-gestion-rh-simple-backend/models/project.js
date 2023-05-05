const mongoose=require('mongoose');
let Project = mongoose.model(
    'Project',
    {
        name:String,
        proglanguage:String,
        technology:String,
        codelink:String,
        ciTools: String,
        cdTools: String
    }
)


module.exports=Project;