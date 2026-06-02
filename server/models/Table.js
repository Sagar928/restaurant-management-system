const mongoose = require('mongoose')

const tableSchema = mongoose.Schema(
    {
        tableNumber: {
            type: Number,
            required: true,
            unique: true,
        },
        status: {
            type: String,
            enum: [
                "AVAILABLE",
                "OCCUPIED",
                "BILL_PENDING",
                "CLEANING",
            ],
            default: "AVAILABLE",
        },
        currentOrderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Table", tableSchema);