const Resolution = require("../models/resolutions");

const getAllResolution = async (req, res) => {
    // console.log("hit");
    try {
        // console.log(req.userId);
        const allResolution = await Resolution.find({userId: req.userId});
        // console.log(allResolution);   
        res.status(200).json({success: true, allResolution});     
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

const createResolution = async (req, res) => {
    try {
        const resolutionBody = req.body;
        await Resolution.create({
            title: resolutionBody.title,
            description: resolutionBody.description,
            userId: req.userId
        })

        res.status(201).json({
            msg: "resolution created successfully"
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

const monthlyUpdatesResolution = async (req, res) => {
    try {
        const { id } = req.params;
        const { month, update } = req.body;
        await Resolution.findByIdAndUpdate(id, {$push: {monthlyUpdates : {month, update}}});
        res.json({
            msg: "Resolution updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

module.exports = {
    createResolution,
    monthlyUpdatesResolution,
    getAllResolution
}
