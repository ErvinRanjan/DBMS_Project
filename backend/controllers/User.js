import { client } from "../db";

export const userLogin=async(req,res,next)=>{
    try
    {
        const {username,password}=req.body;
        const data=await client.query(`
            SELECT username, password FROM users u
            WHERE username=$1 AND password=$2`,[username,password]);
            if(data)
            {
              return res.json({msg:"Login suceessfull",status:true}); 
            }
            else
            {
              return res.json({msg:"Login unsucesssfull",status:false});
            }
    }
    catch(err)
    {
        console.log("Error");
        next(err);
    }
}

export const userRegister=async(req,res,next)=>{
    try
    {
        const {username,password}=req.body;
        const data=await client.query(`
            SELECT username, password FROM users u
            WHERE username=$1`,[username]);
            if(data)
            {
              return res.json({msg:"User already exists",status:false}); 
            }
            else
            {
                await client.query(`INSERT INTO users(username,password)
                                                   VALUES($1,$2)
                                                    RETURNING userId
                  `, [username, password]);
    
              return res.json({msg:"Registartion sucesssfull",status:true});
            }
    }
    catch(err)
    {
        console.log("Error");
        next(err);
    }
}

export const updateUserDetails=async(req,res,next)=>{
    try 
    {
        const { userId, firstName, middleName, lastName, about } = req.body;
        await client.query(`
            UPDATE users
            SET firstName = $1,
            middleName = $2,
            lastName = $3,
            about = $4
            WHERE userId = $5
            `,
            [firstName, middleName, lastName, about, userId]
        );

        return res.json({ msg: "User details updated successfully", status: true });
    } catch (err) {
        console.error("Error updating user details:", err);
        next(err);
    }

}