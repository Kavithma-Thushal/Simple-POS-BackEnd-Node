const responseUtil = require('../util/ResponseUtil');
const itemModel = require('../model/ItemModel');

const saveItem = async (itemDTO) => {
    const existingItem = await itemModel.findOne({code: itemDTO.code});
    if (existingItem) {
        return responseUtil('Duplicate Item Code: ' + itemDTO.code, 400);
    }

    const item = new itemModel(itemDTO);
    await item.save();
    return responseUtil('Item Saved Successfully...!', 201);
};

const searchItem = async (code) => {
    const item = await itemModel.findOne({code});
    if (!item) {
        return responseUtil('Item Not Found: ' + code, 404);
    }
    return responseUtil('Item Searched Successfully...!', 200, item);
};

const updateItem = async (itemDTO) => {
    const item = await itemModel.findOneAndUpdate({code: itemDTO.code}, itemDTO, {new: true});
    if (!item) {
        return responseUtil('Item Not Found: ' + itemDTO.code, 400);
    }
    return responseUtil('Item Updated Successfully...!', 200);
};

const deleteItem = async (code) => {
    const item = await itemModel.findOneAndDelete({code});
    if (!item) {
        return responseUtil('Item Not Found: ' + code, 404);
    }
    return responseUtil('Item Deleted Successfully...!', 200);
};

const loadAllItems = async () => {
    const items = await itemModel.find();
    if (items.length === 0) {
        return responseUtil('No Items Found in DB', 204);
    }
    return responseUtil('Items Loaded Successfully...!', 200, items);
};

const generateItemCode = async () => {
    const lastItem = await itemModel.findOne().sort({_id: -1}).limit(1);
    const lastCode = lastItem ? lastItem.code : 'I00-000';
    return responseUtil('Last Item Code Retrieved Successfully...!', 200, lastCode);
};

const getItemCount = async () => {
    const itemCount = await itemModel.countDocuments();
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