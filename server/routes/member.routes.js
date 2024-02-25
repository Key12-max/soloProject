const memberController = require("../controller/member.controller")

module.exports = (app) => {
    app.post("/api/home/addMember",memberController.addNewMember);
    app.post("/api/login", memberController.getAMemberByEmail);
    app.get("/api/home", memberController.displayAllMember);
    app.get("/api/oneMember/:id" , memberController.getAMemberById);
    app.put("/api/home/edit/:id", memberController.updateMemberInfo);
    app.delete("/api/delete/:id", memberController.deleteMember);
    
};