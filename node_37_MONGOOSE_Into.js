const mongoose = require('mongoose');

const main = async()=>{
    await mongoose.connect('mongodb://localhost:27017/e-comm');
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number
    });

    const productsModel = mongoose.model('products',ProductSchema);
    let data = new productsModel({
        name: 'Realme-14 R 5G',
        price: 152000
    })
    let result = await data.save();
    console.log(result);
}
main();