const mongoose = require("mongoose");

const validateEmail = function(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};
const MemberShema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required:[true , "Membership name is required"],
            minLength: [2,"Members Name must be at least two character"]
        },
        churchName: {
            type: String,
            required:[true , "Membership Church Name is required"],
            minLength: [2,"Members Church Name must be at least two character"]

        },
        date: {
            type: Date,
            min:'1987-09-28',
            required:[true, "enter the begning date of your membership"]
        },
        email: {
            type: String,
            required:[true,"Please enter your email"],
            validate:[validateEmail, "Please enter a valid email"],
            unique: true

        },
        membershipFee: {
            type: String,
            enum: ["Paying", "Not Paying"]
        },
        password: {
            type: String,
            required:[true,"Enter your password"]
        }
        
    }
);
module.exports = mongoose.model("Member", MemberShema);