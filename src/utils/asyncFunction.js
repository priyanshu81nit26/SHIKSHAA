// asyncFunction is higher order function and thus can accepts function as parameter

// promise format :
const asyncFunction=(requestHnadler)=>{
    (req,res,next)=>{
        Promise
        .resolve(requestHnadler(req,res,next))
        .catch((err)=>next(err))
    }
}


// async try catch format :

/*
const asyncFunction=(fun)=>async (req,res,next)=>{
    try {
        await  fun(req,res,next)
    } catch (error) {
        res.status(err.code || 404).json({
            message:"error occured",
            success:false
        })
    }
}
*/

export {asyncFunction}
