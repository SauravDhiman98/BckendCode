const User = require('../Models/User')
const router = require('express').Router()

router.post('/user', async (req, res)=>
{
    try{
   
    const findUser  = await User.findOne(
        {
           name: req.body.name  
        })

    if(findUser == null)
    {
        const Userdata = new User(req.body)
        const UserDetails = await Userdata.save();
        res.status(200).json(UserDetails)
    }
    else if(findUser != null)
    {
    res.status(200).json(findUser)
    }
    
    }
    catch(err)
    {
        console.log(err);
        res.status(401).json(err)
    }
})

// router.post('/getuserdata', async (req, res)=>
// {
//     try{
   
//     //const Userdata = new User(req.body)
//     const findUser  = await User.findById(
//         {
//            _id:req.body._id   
//         })
//     console.log(findUser)
//    // const UserDetails = await Userdata.save();
//     res.status(200).json(findUser)
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(401).json(err)
//     }
// })
module.exports = router;