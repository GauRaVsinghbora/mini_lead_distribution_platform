import mongoose,{Schema} from "mongoose";

const ServiceSchema = new Schema(
{
    name:{
        type:String,
        required:true,
        unique:true
    }
},
{
    timestamps:true
}
);

const Service =
mongoose.models.Service ||
mongoose.model(
"Service",
ServiceSchema
);

export default Service;