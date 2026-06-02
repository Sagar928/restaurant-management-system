const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({
    menuItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
        required: true,
    },

    itemName: {
        type: String,
        required: true,
    },

    quantity: {
        type: Number,
        required: true,
        min: 1,
    },

    price: {
        type: Number,
        required: true,
    },
})

const orderSchema = mongoose.Schema({
    orderNumber: {
      type: String,
      unique: true,
    },

    tableNumber: {
      type: Number,
      required: true,
    },

    items: [orderItemSchema],

    totalAmount: {
      type: Number,
      default: 0,
    },

    estimatedPreparationTime: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: [
        "PENDING",
        "PREPARING",
        "READY",
        "SERVED",
        "COMPLETED",
        "CANCELLED",
      ],
      default: "PENDING",
    },
    
},{
    timestamps: true,
  }
)

module.exports = mongoose.model('Order', orderSchema);