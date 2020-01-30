const express = require("express");
const router = express.Router();
const tvmaze = require('../data/tvmaze');

router.get('/', async (req,res) => {
    try { 
        const names = await tvmaze.getAllData();
        console.log(names);
        return res.status(200).render("home", {title:"TVMAZE",names});
    } catch (e) {
        res.status(404).json({error: e.message});
    }
})

router.get('/shows/:id', async (req,res) => {
    try { 
        const showInfo = await tvmaze.getShowById(req.params.id);
        const castInfo = await tvmaze.getCastById(req.params.id);
        const seasonInfo = await tvmaze.getShowSeasons(req.params.id);
        //console.log(names);
        return res.status(200).render("showDetails", {title:"TVMAZE",showInfo,castInfo,seasonInfo});
    } catch (e) {
        res.status(404).json({error: e.message});
    }
})

router.get('/seasons/:id/episodes', async (req,res) => {
    try { 
        const seasonInfo = await tvmaze.getSeasonById(req.params.id);
        const episodesInfo = await tvmaze.getEpisodes(req.params.id);
        //console.log(names);
        return res.status(200).render("episodes", {title:"TVMAZE",episodesInfo,seasonInfo});
    } catch (e) {
        res.status(404).json({error: e.message});
    }
})

router.post('/search', async (req,res) => {
    try { 
        let str = req.body.searchQuery;
        console.log("hello"+str);
        const searchedShows = await tvmaze.getShowByQuery(str);
        //console.log(names);
        return res.status(200).render("search",{title:"TVMAZE",searchedShows});
    } catch (e) {
        res.status(404).json({error: e.message});
    }
})




module.exports = router;