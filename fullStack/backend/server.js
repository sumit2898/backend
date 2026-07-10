import express from 'express';
const app = express();


// app.get ( ' /' , (req,res) =>{
//     res.send ( " the server is ready")
// });

app.use(express.static("dist"))

app.get( '/api/data' , (req,res) => {

    const Data = {
        "name" : "Sumit kumar",
        age :  20,
        gender :  "male"
    }

    res.send(Data)

})

const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`server at http://localhost:${port}`);
    
})