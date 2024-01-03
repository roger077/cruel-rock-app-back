import {User, Artist} from '../models/index.js'

const verifyArtist = async (req,res,next)=>{
    const {idArtist} = req.params;
    try{
        if(!idArtist)
            throw Error("No Artist id provided");
        if(!Artist.findByPk(idArtist))
            throw Error("Artist not found")
        
        next()
    } catch (error) {
        return res.status(401).send({ message: error.message });
    }
}
export default verifyArtist;
