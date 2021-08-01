const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      message: {
        type: String,
      },
    },
  ],
});

// we are hashing the password
// UserSchema.pre("save", async function (next) {
//   console.log("password hashing proccess");
//   if (this.isModified("password")) {
//     console.log("password hash");
//     this.password = bcrypt.hash(this.password, 12);
//     this.cpassword = bcrypt.hash(this.cpassword, 12);
//   }
//   next();
// });
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);

    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

//we are create token
UserSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);

    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

//store the message
UserSchema.methods.addMessage = async function (name, email, phone, message) {
  try {
    console.log("addmessage colled");
    this.messages = this.messages.concat({ name, email, phone, message });
    console.log(`addmessage save se pahale ${this.messages}`);
    await this.save();
    console.log("addmessage save se Baad");
    return this.messages;
  } catch (err) {
    console.log(err);
  }
};

//collection create
const User = mongoose.model("USER", UserSchema);

module.exports = User;
