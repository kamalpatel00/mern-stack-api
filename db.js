const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/postManagerDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection successed");
    } else {
      console.log(
        "Error in Connection MongoDB: " + JSON.stringify(err.undefined, 2)
      );
    }
  }
);
