// const tokenObj=require("../Token/token");
// const middleware=(req,res,next)=>{
//     if(tokenObj.token==req.headers.token)
//     {
//         next();
//     }
//     else{
//         res.json({msg:"middleware fail....."});
//     }
// };
// module.exports=middleware;


const tokenObj = require("../Token/token");
const jwtToken = require("jsonwebtoken");

const middleware = (req, res, next) => {
    if (tokenObj.token == req.headers.token)
    {
     
        jwtToken.verify(tokenObj.token, 'Gautam', function(err, decoded) {
            if(err){
                res.json({token:"expire"});
            }
            else
            {
               
                next();
                res.json({token:"valid"});
            }
          });
          
    
         
    }
    else {
        res.json({ msg: "fail in module1.....!" })
    }
}


module.exports = middleware;