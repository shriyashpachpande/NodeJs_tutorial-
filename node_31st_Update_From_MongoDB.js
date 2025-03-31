const dbConnect = require('./node_29th_dbConnect');

const UpdateOne = async () =>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name : 'max pro 5 +'},
        { $set: {name : 'max pro 5 ', price:99999,brand :'micromax'}}
    );
    console.log(result);
}
UpdateOne();