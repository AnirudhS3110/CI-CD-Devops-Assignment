import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    return res.json({
        name:"Anirudh S",
        rollnumber:"2023BCS0019"
    })
})

app.listen(3000, ()=>console.log("Listening on port 3000"));