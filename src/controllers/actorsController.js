const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Actor.findAll()
            .then((actors) => {
                return res.render('genresList',{
                    actors
                })
            })
            .catch(error => console.log(error))
    },
    new : (req,res) => {

    },
    recomended : (req,res) => {

    },
    detail : (req,res) => {
        db.Genre.findByPk(req.params.id)
        .then((genre) => {
            return res.render("genresDetail",{
                genre
            })
        })
        .catch((error) => console.log(error)); 
    }
}