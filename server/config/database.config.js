const mongoose = require('mongoose');
uri= "client";

mongoose.connect(`mongodb://localhost/${uri}`,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

    .then(()=>console.log("You're now in the mainframe . . ."))
    .catch((err)=> console.log("There is an error. ", err))