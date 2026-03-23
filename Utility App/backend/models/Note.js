import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Note", noteSchema);
