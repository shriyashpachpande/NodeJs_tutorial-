//Crud with mongoose

const mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
});

const insertInDb = async ()=>{
    const product = mongoose.model('products',ProductSchema);
    let data = new product({
        name: 'Realme 8s 5g',
        price:16500,
        brand: 'Realme',
        category: 'Mobile'
    })
    const result = await data.save();
    console.log(result);
}
insertInDb();

const updateInDb = async ()=>{
    const product = mongoose.model('products',ProductSchema);
    let data = await product.updateOne(
        {name: 'm-41'},
        {$set:{price:45000}}
    );
    console.log(data);
}
updateInDb();

const deleteInDb = async () =>{
    const product = mongoose.model('products',ProductSchema);
    let data = await product.deleteOne({name: 'Realme-13 R 5G'});
    console.log(data);
}
deleteInDb();