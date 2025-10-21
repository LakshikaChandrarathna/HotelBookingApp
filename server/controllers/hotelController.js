import Hotel  from "../models/Hotel";
import { User } from "../models/User.js";

export const registerHotel = async (req,res) => {
    try {
        const {name, addres,contact,city} = req.body;
        const owner = req.eser._id

        //check if user alredy registered
        const hotel = await Hotel.findOne({owner})
        if(hotel){
            return res.json({success: false, message: "Hotel Already Registered"})
        }
        await Hotel.create({name, address, contact, city, owner});

        await User.findByIdAndUpdate(owner, {role: "hotelOwner"});
    } catch (error) {
        res.json({success: false, message:"Hotel Registered Successfully"})
        
    }
}