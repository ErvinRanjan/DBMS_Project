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
        const { username, firstName, middleName, lastName, about } = req.body;
        await client.query(`
            UPDATE users
            SET firstName = $1,
            middleName = $2,
            lastName = $3,
            about = $4
            WHERE userId = $5
            `,
            [firstName, middleName, lastName, about, username]
        );

        return res.json({ msg: "User details updated successfully", status: true });
    } catch (err) {
        console.error("Error updating user details:", err);
        next(err);
    }

}

export const updateSkills=async(req,res,next)=>{
    try
    {
        const {userId,skills}=req.body;
        await client.query(`
            DELETE FROM skills
            WHERE userId=$1`,[userId]);
        
            const skillInsertPromises = skills.map(skill => {
                return client.query(`
                    INSERT INTO skills (skillId, userId, skill)
                    VALUES (gen_random_uuid(), $1, $2)
                `, [userId, skill]);
            });
    
            // Wait for all inserts to complete.
            await Promise.all(skillInsertPromises);
    }
    catch(err)
    {
        console.log("Error");
        next(err);
    }
}

export const getUserPage=async(req,res,next)=>{
    try {
        const {username}=req.params;
        const result=await client.query(`
            SELECT * FROM users
            WHERE username=$1`,[username]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ msg: "User not found", status: false });
        }
        return res.status(200).json({ user: result.rows[0], status: true });
    }
    catch(err)
    {
        console.log("Error");
            next(err);
        
    }
}