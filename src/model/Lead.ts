import mongoose, { Schema } from "mongoose";

const LeadSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    city: {
      type: String,
      required: true
    },

    serviceType: {
      type: String,
      enum: [
        "Service1",
        "Service2",
        "Service3"
      ],
      required: true
    },

    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
);


LeadSchema.index(
  {
    phone: 1,
    serviceType: 1
  },
  {
    unique: true
  }
);

const Lead =
  mongoose.models.Lead ||
  mongoose.model(
    "Lead",
    LeadSchema
  );

export default Lead;