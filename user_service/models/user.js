const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')


const userScheme = new mongoose.Schema({
    email :{
        type:String,
        required: [true,'provide email.. email must'],
        unique: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('enter valid email address')
            }
        }
    },
    password:{
        type:String,
        trim:true,
        minlength: 8,
        required:[true, 'please provide password min 8 char']
        
    },
    role:{
        type: String,
        enum: ['user','admin'],
        default: 'user'
    },
    isVerified:{
        type: Boolean,
        default: false       
    },
    enable2FA:{
        type: Boolean,
        default: false
    },
    secret2FA:{
        type: String,
    
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    loginDevices:{
        type: [String]
    },
    binanceKey: {
        default:{},
        apiKey:{
            type: [String]
        },
        apiSecret:{
            type: String
        }
    },
    resetPasswordToken:{
        type: String,
        required: false
    },
    resetPasswordExpires:{
        type:Date,
        required: false
    },
    tokens:[{
        token:{
            type:String,
            required:true     
        }
    }]

})

/*
userScheme.methods.generateAuthToken = async function(){
    const user = this
    const token = await jwt.sign({_id : user._id.toString()}, process.env.JWT_SECRET)

    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
*/
// Sign JWT and return
userScheme.methods.generateAuthToken = async function(){
    const user = this
    const token = await jwt.sign({_id : user._id.toString()}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE
    })
    //console.log(token)
    return token
}

// check email and password match
userScheme.statics.findByCredentials = async(email,password)=>{
    const user = await User.findOne({email})
    if(!user){
        throw new Error('invalid email')
    }
    const check = await bcrypt.compare(password,user.password)
    if(!check){
        throw new Error('invalid credentials')
    }
    return user
}  

//resetPasswordToken using crypto
userScheme.methods.generatePasswordReset = async function() {
    const user = this
    user.resetPasswordToken = crypto.randomBytes(20).toString('hex')
    user.resetPasswordExpires = Date.now() + 3600000 //expires in an hour
}

// Encrypt password using bcrypt
userScheme.pre('save',async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next()
})

const User = mongoose.model('userDetails',userScheme)

module.exports = User
