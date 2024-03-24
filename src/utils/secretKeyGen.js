import {appendFile} from "fs"
import crypto from "node:crypto";

function generateSecretKey(){
    const randomKey = crypto.randomBytes(32).toString('hex');
    const secretKey = `\nJWT_SECRET=${randomKey}`
    appendFile("E:/Personal Projects/auth-backend-v1/.env", secretKey,()=>{
        console.log("Done!")
    });
}

generateSecretKey();