const jwt = require('jsonwebtoken')

const User = require('../models/user')

const auth = async(req,res,next)=>{
    try {
        //console.log('auth function')
        //const token = req.header('Authorization').replace('Bearer ','')
        const token = req.cookies.token
        //console.log('in auth func', token)
        const decode = await jwt.verify(token, process.env.JWT_SECRET)
        //console.log(decode)
        //const user = await User.findOne({_id:decode._id,'tokens.token':token})
        const user = await User.findOne({_id:decode._id})
        //console.log(user)
        if(!user){
            throw new Error('user invalid')
        }

        req.token = token
        req.user = user
        next()
        
    } catch (error) {
        res.status(401).send({error:'please authenticate'})

    }
}

module.exports = auth