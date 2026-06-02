const Menu = require('../models/Menu');

//CREATE MENU FOR ORDER
const createMenuItem = async (req, res) => {
   try {
    const menuItem = await Menu.create(req.body);

    res.status(201).json({
      success: true,
      data: menuItem,
    })
   } catch(error) {
      res.json({
         message: error.message,

      })
   }
}

//GET ALL THE MENU ITEMS
const getMenuItems = async (req, res) => {
   try {
      const items = await Menu.find();

       res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
   }  catch (error) {
    res.status(500).json({
      message: error.message,
    });
   }    
}

//CHECK FOR THE ITEM
const getMenuItem = async (req, res) => {
  try {
    const item = await Menu.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Menu item not found",
      });
    }

    res.status(200).json(item);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//UPDATE MENU ITEM
const updateMenuItem = async (req, res) => {
  try {
    const item = await Menu.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!item) {
      return res.status(404).json({
        message: "Menu item not found",
      });
    }

    res.status(200).json(item);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//DELETE ITEM FROM MENU
const deleteMenuItem = async (req, res) => {
  try {
    const item = await Menu.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Menu item not found",
      });
    }

    await item.deleteOne();

    res.status(200).json({
      message: "Menu item deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//GET ITEMS BY PRICE
const getItemByPrice = async (req, res) => {
   try{
      const item = await Menu.findById(req.params.price);

      if(!item){
         return res.status(500).json({
            message: "Menu item not found",
         })
      }
      

      res.status(200).json(item);

   } catch (error) {
    res.status(500).json({
      message: error.message,
    });
   }
}


module.exports = {
  createMenuItem,
  getMenuItems,
  getMenuItem,
  updateMenuItem,
  deleteMenuItem,
};