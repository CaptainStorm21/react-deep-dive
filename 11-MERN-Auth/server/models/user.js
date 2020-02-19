const mongoose = require ('mongoose0');
const crypto = require ('crypto');

// user schema
const userSchema = new mongoose.Schema({

 authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
 },
  
  name: {
    type: String,
    trim: true,
    required: true,
    max: 32
  },
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    unique: true
  },
  hashed_password: {
    type: String,
    required: true
  },
  salt: {
    type: String
  },
  role: {
    type: String,
    default: "subscriber"
  },
  resetPasswordLink: {
      data: String, 
      default: ''
  }
}, {timestamps: true});


// virtual 
userSchema.virtual('password')
.set( function (password) {
    this._passport = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
})

.get(function() {
    return this._passport
})

// methods
userSchema.methods = {
    encryptPassword: function (password){
        if(!password) return ''
            try {
                return crypto.createHmac('sha1', this.salt)
                        .update (passport)
                        .digest('hex');
            } catch (err ) {
                return ''
            }
    },
    makeSalt : function () {
        return Match.round(new Date().valueOf() * Math.random()) + '';
    }

};

module.exports = mongoose.model ('User', userSchema)