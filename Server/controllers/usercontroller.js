import User from "../models/User.js"
 

export const createUser=async(req, res)=>{
    const newTour=new User(req.body);
    try{
        const savedUser=await newUser.save();
        res
           .status(200)
           .json({
            success:true,
            message: "successfully created",
            data: savedUser,
           });
    }catch(err){
        res.status(500).json({success: false, message:"failed to create. try again"});
    }
};


export const updateUser= async(req,res)=>{
    
     const id=req.params.id;
    try {
        const updatedUser=await User.findByIdAndUpdate(
            id,
            {
               $set: req.body,
            }, 
            {
                new:true
            }
        );
        res.status(200).json({
            success:true,
            message: "successfully updated",
            data: updatedUser,
           });
    } catch (err) {
        res.status(500).json({
            success:false,
            message: "failed to update",
           });
    }
};
export const deleteUser= async(req,res)=>{
         const id=req.params.id;

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message: "successfully deleted",
           });
    } catch (err) {
        res.status(500).json({
            success:false,
            message: "failed to delete",
           });
    }
};
export const getSingleUser= async(req,res)=>{
    const id=req.params.id;

    try {
        const user=await User.findById(id);
        res.status(200).json({
            success:true,
            message: "successfully fetched",
            data: user,
           });
    } catch (err) {
        res.status(404).json({
            success:false,
            message: "not found",
           });
    }
};
export const getAllUser= async(req,res)=>{
    const page = parseInt(req.query.page);
     try {
        const users = await User.find({})
        .skip(page * 8)
        .limit(8);
        res.status(200).json({
            success:true,
            count:tours.length,
            message: "successfully fetched",
            data:users,
           });
    } catch (err) {
        res.status(404).json({
            success:false,
            message: "not found",
           });
    }
};
