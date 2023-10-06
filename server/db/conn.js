const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/newCrud", {
   
    useNewUrlParser: true,
    useUnifiedTopology:true
}
).then(() => 
    console.log("sucessfull")).catch((e) =>
    console.log(e));