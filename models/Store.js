const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const slug = require("slugs");

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a store name"
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  tags: [String],
  created: {
    type: Date,
    default: Date.now
  },
  location: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: [
      {
        type: Number,
        required: "Please enter coordinates"
      }
    ],
    address: {
      type: String,
      required: "Please enter an address"
    }
  },
  photo: String
});

storeSchema.pre("save", async function(next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slug(this.name);
  // Find other stores with a slug of 'name', 'name1', 'name2' etc!
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, "i");
  const storesWithSlugs = await this.constructor.find({ slug: slugRegEx });
  if (storesWithSlugs.length) {
    this.slug = `${this.slug}-${storesWithSlugs.length + 1}`;
  }
  next();
});

storeSchema.statics.getTagsList = function() {
  return this.aggregate([
    { $unwind: "$tags" },
    { $group: { _id: "$tags", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]);
};

module.exports = mongoose.model("Store", storeSchema);
