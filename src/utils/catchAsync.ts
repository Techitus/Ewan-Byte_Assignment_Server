import { Request, Response } from "express"

const catchAsyncError = (fn:Function)=>{
    return (req:Request,res:Response)=>{
        fn(req,res).catch((err:Error)=>{
            res.status(500).json({
                message:"Internal Server Error",
                errorMessage:err.message
            })
        })
    }
}
export default catchAsyncError