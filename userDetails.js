const mongoose = require("mongoose");
const UserDetailSchema = new mongoose.Schema (

    {
        uname: String,
        email: String,
        phoneNo: String,
        
    },
    {
      collection "UserInfo" ,  
    }
);
mongoose.model( "UserInfo",UserDetailSchema);