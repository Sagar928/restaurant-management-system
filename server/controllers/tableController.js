const Table = require('../models/Table');

//CREATE TABLE
//API - http://localhost:5000/api/tables
const createTable = async (req, res) => {
    try {
        const { tableNumber,status,currentOrderId } = req.body;

        const existingTable = await Table.findOne({ tableNumber });

        if (existingTable) {
            return res.status(400).json({
                success: false,
                message: "Table already exists",
            });
        }

        const table = await Table.create({
            tableNumber,status,currentOrderId
        });

        return res.status(201).json({
            success: true,
            message: "Table created successfully.",
            data: table,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


//GET ALL TABLES
//API - http://localhost:5000/api/tables
const getAllTables = async (req, res) => {
    try {
        const tables = await Table.find().sort({ tableNumber: 1 });

        res.status(200).json({
            success: true,
            count: tables.length,
            data: tables,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
}

//GET SINGLE TABLE
//http://localhost:5000/api/tables/:tableNumber
const getTableById = async (req, res) => {
    try {
        const table = await Table.findOne({ tableNumber: req.params.tableNumber })

        if (!table) {
            return res.status(404).json({
                success: false,
                message: "Table not found",
            });
        }

        res.status(200).json({
            success: true,
            data: table,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = {createTable, getAllTables, getTableById};