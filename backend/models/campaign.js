import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema({
    userName: String,
    campaignName: { type: String, required: true },
    description: { type: String, required: true },
    goal: { type: Number, required: true },
    imageUrl: { type: String, required: true },
  });
export const Campaign = mongoose.model("campaigns", CampaignSchema);
