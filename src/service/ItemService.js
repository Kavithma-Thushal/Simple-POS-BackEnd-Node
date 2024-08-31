const Item = require('../model/ItemModel');
const responseUtil = require('../util/ResponseUtil');

const saveItem = async (itemDTO) => {
    const existingItem = await Item.findOne({code: itemDTO.code});
    if (existingItem) {
        return responseUtil('Duplicate Item Code: ' + itemDTO.code, 400);
    }

    const item = new Item(itemDTO);
    await item.save();
    return responseUtil('Item Saved Successfully...!', 201);
};

const searchItem = async (code) => {
    const item = await Item.findOne({code});
    if (!item) {
        return responseUtil('Item Not Found: ' + code, 404);
    }
    return responseUtil('Item Searched Successfully...!', 200, item);
};

const updateItem = async (itemDTO) => {
    const item = await Item.findOneAndUpdate({code: itemDTO.code}, itemDTO, {new: true});
    if (!item) {
        return responseUtil('Item Not Found: ' + itemDTO.code, 400);
    }
    return responseUtil('Item Updated Successfully...!', 200);
};

const deleteItem = async (code) => {
    const item = await Item.findOneAndDelete({code});
    if (!item) {
        return responseUtil('Item Not Found: ' + code, 404);
    }
    return responseUtil('Item Deleted Successfully...!', 200);
};

const loadAllItems = async () => {
    const items = await Item.find();
    if (items.length === 0) {
        return responseUtil('No Items Found in DB', 204);
    }
    return responseUtil('Items Loaded Successfully...!', 200, items);
};

const generateItemCode = async () => {
    const lastItem = await Item.findOne().sort({_id: -1}).limit(1);
    const lastCode = lastItem ? lastItem.code : 'I00-000';
    return responseUtil('Last Item Code Retrieved Successfully...!', 200, lastCode);
};

const getItemCount = async () => {
    const itemCount = await Item.countDocuments();
    return responseUtil('Item Count Retrieved Successfully...!', 200, itemCount);
};

module.exports = {
    saveItem,
    searchItem,
    updateItem,
    deleteItem,
    loadAllItems,
    generateItemCode,
    getItemCount
};