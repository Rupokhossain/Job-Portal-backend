const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion } = require("mongodb");


// middleware
app.use(cors());
app.use(express.json());

// const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster01.4eony5i.mongodb.net/?appName=Cluster01`;

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster01.4eony5i.mongodb.net/?appName=Cluster01`;

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-tzdtele-shard-00-00.4eony5i.mongodb.net:27017,ac-tzdtele-shard-00-01.4eony5i.mongodb.net:27017,ac-tzdtele-shard-00-02.4eony5i.mongodb.net:27017/?ssl=true&replicaSet=atlas-djp1lh-shard-0&authSource=admin&appName=Cluster01`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const jobCollection = client.db("carrerCode").collection("jobs");

    // jobs api
    app.get("/jobs", async (req, res) => {
      const cursor = jobCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
      



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Carrer Code Cooking");
});

app.listen(port, () => {
  console.log(`Carrer Code Server is running on port ${port}`);
});
