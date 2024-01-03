import {Viewer,User, Artist, Admin} from "../../models/index.js"

export const postAdmin = async (req,res) =>{
    try{
        const {
            //User fields
            username,
            password,
            email,
            profilePicture,
            locationLatitude,
            locationLongitude  
        } = req.body;

        const user = await User.create({
            username,
            password,
            email,
            profilePicture,
            locationLatitude,
            locationLongitude
        })

        await Admin.create({
            UserEmail:user.email
        });
        return res.status(200).send({message: "User created successfully!"})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export const getAdministrators = async (req,res)=>{
    try{
        const foundAdministrators = await Admin.findAll({
            include:[
                {
                    model:User
                }
            ]
        });
        res.status(200).send({administrators:foundAdministrators})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}
