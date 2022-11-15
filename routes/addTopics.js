const Topic = require('../Models/topics')
const router = require('express').Router()
const UserData = require('../Models/User')
router.post('/topic', async (req, res)=>
{
    try{
      
    const topicsData = new Topic(req.body)
    
    
    const topicsDetails = await topicsData.save();

    const Users = await UserData.findById({_id: topicsDetails.user})
    console.log(Users)
    Users.topics.push(topicsDetails);
    await  Users.save();
    res.status(200).json(Users)
    }
    catch(err)
    {
            console.log(err);
        res.status(401).json(err)
    }
})


router.post('/gettopic', async (req, res)=>
{
    try{
      
    const topicsData = await Topic.findById({
        _id:req.body._id
    })
    
    console.log(topicsData)
   // const topicsDetails = await topicsData.save();

    // const Users = await UserData.findById({_id: topicsDetails.user})
    // console.log(Users)
    // Users.topics.push(topicsDetails);
    // await  Users.save();
    // res.status(200).json(Users)
    }
    catch(err)
    {
            console.log(err);
        res.status(401).json(err)
    }
})

module.exports = router;