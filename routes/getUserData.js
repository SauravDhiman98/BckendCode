const User = require('../Models/User');
const router = require('express').Router();

router.get('/getuserdata', async (req, res)=>
{
    try{
   
    //const Userdata = new User(req.body)
    
    
   // const UserDetails = await Userdata.save();
    res.status(200).json(UserDetails)
    }
    catch(err)
    {
        console.log(err);
        res.status(401).json(err)
    }
})

module.exports = router;