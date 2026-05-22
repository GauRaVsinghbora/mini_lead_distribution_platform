import mongoose,{Schema} from "mongoose";

const AssignmentSchema = new Schema(
{
    leadId:{
        type:Schema.Types.ObjectId,
        ref:"Lead",
        required:true
    },

    providerId:{
        type:Schema.Types.ObjectId,
        ref:"Provider",
        required:true
    }

},
{
    timestamps:true
}
);

AssignmentSchema.index(
{
    leadId:1,
    providerId:1
},
{
    unique:true
}
);

const Assignment=
mongoose.models.Assignment ||
mongoose.model(
"Assignment",
AssignmentSchema
);

export default Assignment;