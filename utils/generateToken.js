import jwt from 'jsonwebtoken'

const generateToken=(user)=>{
    return jwt.sign({email:email,id:user._id},process.env.JWT_TOKEN/*,{expiresIn:'1d'}*/)

}
export default generateToken