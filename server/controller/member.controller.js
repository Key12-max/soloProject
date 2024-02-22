const Member = require('../models/member.models')

module.exports = {
    addNewMember: (req, res) =>{
        console.log("new Member",req.body)
        Member.create(req.body)
        .then((newMember) =>{
            res.json(newMember)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },
    displayAllMember: (req, res) => {
        Member.find({})
        .then((allMembers) => {
            res.json(allMembers)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },
    deleteMember: (req, res)=>{
        Member.deleteOne({ _id: req.params.id})
        .then((result)=>{
            res.json(result)
        })
        .catch((error)=>{
            res.status(500).json(error)
        })
    },
    updateMemberInfo: (req, res)=>{
        Member.findOneAndUpdate({ _id: req.params.id},req.body, { new: true, runValidators: true})
        .then((updatedInfo)=>{
            res.json(updatedInfo)
        })
        .catch((error)=>{
            res.status(500).json(error)
        })
    },
    getAMemberById: (req, res)=>{
        Member.findById({ _id: req.params.id}, req.body)
        .then(AMember=>{
            res.json(AMember)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    },
    getAMemberByEmail: (req, res)=>{
        Member.findOne({email: req.params.email}, req.body)
        console.log(req.params.email)
        .then(userName=>{
            res.json(userName)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    }
}
