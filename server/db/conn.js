const mongoose = require(`mongoose`);

const DB = process.env.DATABASE;

//"mongodb+srv://umesh112:umesh112@cluster0.awjjk.mongodb.net/mernstacks?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log("no connection"));
