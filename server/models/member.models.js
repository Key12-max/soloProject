const mongoose = require("mongoose");

const MemberShema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required:[true , "Membership name is required"],
            minLength: [2,"Membership Name must be at least two character"]
        },
        churchName: {
            type: String,
            required:[true , "Membership Church Name is required"],
            minLength: [2,"Membership Church Name must be at least two character"]

        },
        date: {
            type: Number,
        //   required:[true, "enter the start date of your membership"]
        },
        email: {
            type: String,
            required:[5,"Email must be greater than five characters"]

        },
        membershipFee: {
            type: String,
            enum: ["Paying", "Not Paying"]
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Member", MemberShema);