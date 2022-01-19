const express = require("express")
const router = express.Router()
const Train = require("../models/train.api")
const Airport = require("../models/aiport.model")
const Album = require("../models/album.model")
const Song= require("../models/song.model")
router.post("/trains", async (req, res) => {
    try{
        const train = await Train.create(req.body)
        res.send(train)
    } catch (err) {
        console.log(err.message)
    res.send(err.message)
}
})
router.post("/airport", async (req, res) => {
    try{
        const airport = await Airport.create(req.body)
        res.send(airport)
    } catch (err) {
        
    res.send(err.message)
}
})
router.post("/album", async (req, res) => {
    try{
        const album = await Album.create(req.body)
        res.send(album)
    } catch (err) {
        
    res.send(err.message)
}
})
router.patch("/album/:id", async (req, res) => {
    try{
        const album = await Album.findByIdAndUpdate(req.params.id,req.body)
        res.send(album)
    } catch (err) {
        
    res.send(err.message)
}
})
router.post("/song", async (req, res) => {
    try{
        const song = await Song.create(req.body)
        res.send(song)
    } catch (err) {
        
    res.send(err.message)
}
})
router.get('/trains', async (req, res) => {
	try {
		const train = await Train.find({ "name": { $regex: req.query.name, $options: "i" } }).lean().exec();

		return res.send(train);
	} catch (err) {
		return res.send(err.message);
	}
});
router.get('/airports', async (req, res) => {
	try {
		const airport = await Airport.find({ "city_name": { $regex: req.query.name, $options: "i" } }).lean().exec();
		
		return res.send(airport);
	} catch (err) {
		return res.send(err.message);
	}
});


router.get('/home', async (req, res) => {
	try {
		const page = +req.query.page || 1;
	const size = 3;
	const offset = (page - 1) * size;
	// const total = await Album.find().skip(offset).limit(size).lean().exec();
	// const totalUser = await User.find().countDocuments();
		let album;
		let total;
		if (req.query.title) {
			album = await Album.find({ "title": { $regex: req.query.title, $options: "i" } }).lean().limit(size).exec();
			total = await Album.find({ "title": { $regex: req.query.title, $options: "i" } }).lean().exec();
			
		} else {
			total=await Album.find({ "genre": { $regex: req.query.name === "All" ? "" : req.query.name, $options: "i" } })
			album = await Album.find({ "genre": { $regex: req.query.name === "All" ? "" : req.query.name, $options: "i" } }).sort({ year: +req.query.sort }).skip(offset).limit(size).lean().exec();
		  
		}
		const pages = Math.ceil(total.length / size);
	
		res.send({ album ,pages:pages})
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('/song', async (req, res) => {
	try {
		const song = await Song.find({ "artist": { $regex: req.query.title, $options: "i" } }).lean().exec();
		
		return res.send(song);
	} catch (err) {
		return res.send(err.message);
	}
});
router.patch("/song/:id", async (req, res) => {
    try{
        const song = await Song.findByIdAndUpdate(req.params.id,req.body)
        res.send(song)
    } catch (err) {
        
    res.send(err.message)
}
})
module.exports=router