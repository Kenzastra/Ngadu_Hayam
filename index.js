import express  from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import NgaduRoute from "./routes/NgaduRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(NgaduRoute);
app.listen(2000, ()=> console.log("Server Jalan"));