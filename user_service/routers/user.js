const express = require('express')
const auth = require('../middleware/auth')
const {
    register,
    login,
    conformEmail,
    qrcode,
    verify2fa,
    logout,
    logoutAll,
    userProfile,
    recover,
    resetPassword,
    removeDevice,
    //resendEmail,
    //changePassword,
    detailsUpdate
} = require('../controllers/user')


const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.post('/recover', recover)
router.post('/passwordReset/:token',resetPassword)
router.get('/confirmEmail/:id',conformEmail)
//router.post('/resendEmail',resendEmail)
router.get('/QRcode',auth,qrcode)
router.post('/login/verify',auth, verify2fa)
router.post('/logout', auth, logout)
router.post('/logoutAll', auth, logoutAll)
router.put('/userProfile', auth, userProfile)
router.patch('/detailsUpdate', auth, detailsUpdate)
router.delete('/removeDevice', auth, removeDevice)
//router.post('/changepassword', auth,changePassword)

module.exports = router