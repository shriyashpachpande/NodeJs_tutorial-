module.exports =  reqFilter = (req,resp,next)=>{
        if(!req.query.age){
            resp.send("Please provid a age")
        }
        else if(req.query.age<18){
            resp.send("You are not allowed to enter this page")
        }
        else{
            next()
        }
    }