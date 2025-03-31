const dbConnect = require('./node_29th_dbConnect');

const Delete = async () =>{
    const data = await dbConnect();
    const result =  await data.deleteOne({name:'max 3'})
    console.log(result);
}
Delete();