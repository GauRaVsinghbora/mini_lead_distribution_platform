import mongoose, { Schema } from "mongoose";

const ProviderSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    monthlyQuota: {
      type: Number,
      default: 10
    },

    leadsReceived: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Provider =
  mongoose.models.Provider ||
  mongoose.model(
    "Provider",
    ProviderSchema
  );

export default Provider;