const dbConnect = require('./node_29th_dbConnect')

// promise hanlde using then()
// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.log(data)
//     })
// })

// promise hanfle using async awiat

const main =  async ()=>{
    let data =  await dbConnect()
    data =await data.find().toArray()
    console.log(data)

}
main()