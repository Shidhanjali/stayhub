const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
 
  propertyName: {
    type: String,
    required: true,
  },
  numberOfRooms: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
  },
  isFurnished: {
    type: String,
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  placesNearby: {
    type: [String],
    required: true,
  },
  propertyImage:{
    type: String,
    required: true,
  }
});

const PropertyModel = mongoose.model('PropertyModel', propertySchema);

module.exports = PropertyModel;
