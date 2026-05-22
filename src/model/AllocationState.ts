import mongoose,{Schema} from "mongoose";

const AllocationStateSchema =
new Schema({

serviceType:{
    type:String,
    required:true
},

currentIndex:{
    type:Number,
    default:0
}

});

const AllocationState =
mongoose.models.AllocationState ||
mongoose.model(
"AllocationState",
AllocationStateSchema
);

export default AllocationState;