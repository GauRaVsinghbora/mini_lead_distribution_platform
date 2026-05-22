import mongoose,{Schema} from "mongoose";

const WebhookEventSchema = new Schema({

    eventId:{
        type:String,
        required:true,
        unique:true
    },

    processed:{
        type:Boolean,
        default:true
    }

},{
    timestamps:true
});

const WebhookEvent=
mongoose.models.WebhookEvent ||
mongoose.model(
"WebhookEvent",
WebhookEventSchema
);

export default WebhookEvent;