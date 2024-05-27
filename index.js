const express = require("express");
const app = express();
const fetchData = require("./services/DataFetcher");
const transformData = require("./services/DataTransformer");
const EXTERNAL_API = "";

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get("/getData", async (req, res, next) => {
 
  try {
    let fetched = await fetchData();
    res.status(200);
    res.send(transformData(fetched));

  } catch (error) {
    console.error("Error fetching data:", error);
   
    res.send({error:true,message:error.message,status:error.status});
    res.status(404);
  }
  

 
});
