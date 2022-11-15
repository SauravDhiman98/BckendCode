const Topic = require('../Models/topics')
const router = require('express').Router()
const ColorCode = require('../Models/ColorCode')
router.post('/colorcode', async (req, res)=>
{
    try{
   
        console.log(req.body)
      
    const ColorData = new ColorCode(req.body)
    
    
    const colorDetails = await ColorData.save();

    const topics = await Topic.findById({_id: colorDetails.topic})
    console.log(topics)
    topics.color.push(colorDetails);
    await  topics.save();
    res.status(200).json(topics)
    }
    catch(err)
    {
            console.log(err);
        res.status(401).json(err)
    }
})

module.exports = router;