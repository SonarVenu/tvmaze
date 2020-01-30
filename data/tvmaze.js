  
const axios = require('axios');

const getAllData = async () => {
    const url = 'http://api.tvmaze.com/shows';
    const res = await axios.get(url);

    return res.data;
}

const getShowById = async (id) => {
    const url = 'http://api.tvmaze.com/shows/' + id;
    const res = await axios.get(url);

    return res.data;
}

const getCastById = async (id) => {
    const url = 'http://api.tvmaze.com/shows/' + id + '/cast';
    const res = await axios.get(url);

    return res.data;
} 

const getShowSeasons = async (id) => {
    const url = 'http://api.tvmaze.com/shows/' + id + '/seasons';
    const res = await axios.get(url);

    return res.data;
}

const getSeasonById = async (id) => {
    const url = 'http://api.tvmaze.com/seasons/' + id;
    const res = await axios.get(url);

    return res.data;
}

const getShowByQuery = async (str) => {
    const url = 'http://api.tvmaze.com/search/shows?q=' + str;
    const res = await axios.get(url);

    return res.data;
}

const getEpisodes = async (id) => {
    const url = 'http://api.tvmaze.com/seasons/' + id + '/episodes';
    const res = await axios.get(url);

    return res.data;
}


module.exports = {
    getAllData,
    getShowById,
    getCastById,
    getShowSeasons,
    getSeasonById,
    getShowByQuery,
    getEpisodes
}