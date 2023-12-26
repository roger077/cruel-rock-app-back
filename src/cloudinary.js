import cloudinary from "cloudinary";

const c = cloudinary.v2;

c.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY_CLOUDINARY,
    api_secret: process.env.API_SECRET_CLOUDINARY
})

export default c;