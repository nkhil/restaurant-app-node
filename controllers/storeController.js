const mongoose = require("mongoose");
const Store = mongoose.model("Store");

exports.homepage = (req, res) => {
  res.render("homepage");
};

exports.addStore = (req, res) => {
  res.render("editStore", { title: "Add Store" });
};

exports.createStore = async (req, res) => {
  const store = await new Store(req.body).save();
  req.flash("success", `Successfully created ${store.name}`);
  res.redirect(`/store/${store.slug}`);
};

exports.getStores = (req, res) => {
  res.render("stores", { title: "Stores" });
};
