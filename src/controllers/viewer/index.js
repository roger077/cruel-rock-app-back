import {Viewer,User, Artist} from "../../models/index.js"

export const postViewer = async(req,res)=>{
    try{        
        const {
            //User fields
            username,
            password,
            email,
            profilePicture,
            locationLatitude,
            locationLongitude,
            
            //Viewe fields
            genresFavorites,
            ...props
        }=req.body;
        
        const user = await User.create({
            username,
            password,
            email,
            profilePicture,
            locationLatitude,
            locationLongitude
        }).catch(e=>console.log(e))
        
        await Viewer.create({
            genresFavorites,
            UserEmail:user.email
        })

        return res.status(200).send({message: "User created successfully!"})
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
}

export const putViewer = async (req,res)=>{
    try{
        const newStateUser = {};
        const {
            //User fields
            username,
            password,
            email,
            profilePicture,
            locationLatitude,
            locationLongitude,
            
            //Viewe fields
            genresFavorites,
            ...props
        }=req.body;
        for (const key in req.user){
            req.body[key]?newStateUser = req.body[key]:null;
        }

    }catch(error){
        return res.status(500).send({"error":error.message})
    }
} 

export const followArtist = async (req,res)=>{
    try{
        const { currentUser } = req;
        const { idArtist } = req.params;
        if(!idArtist)
            throw new Error("Artist id is required");
        const foundArtist = await Artist.findByPk(idArtist,{
            include:[{
                model:Viewer
            }]
        });
        if(!foundArtist)
            throw new Error("Artist not found");
        await currentUser.Viewer.addFollowed(foundArtist)
        res.status(200).send({message:"user followed successfully"})
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
}

export const unfollowArtist = async (req,res)=>{
    try{
        const { currentUser } = req;
        const { idArtist } = req.params;
        if(!idArtist)
            throw new Error("Artist id is required");

        const foundArtist = await Artist.findByPk(idArtist,{
            include:[{
                model:Viewer
            }]
        });
        if(!foundArtist)
            throw new Error("Artist not found");
        await currentUser.Viewer.removeFollowed(foundArtist);
        res.status(200).send({message:"user unfollowed successfully"})
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
}



