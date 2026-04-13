const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");


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
    const applicationsCollection = client.db("carrerCode").collection("applications");

    // jobs api
    app.get("/jobs", async (req, res) => {

      const email = req.query.email;
      const query = {};
      if(email) {
        query.hr_email = email;
      }

      const cursor = jobCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // could be done but should not be done.

    // app.get("/jobsByEmailAddress", async (req, res) => {
    //   const email = req.query.email;
    //   const query = {hr_email: email}
    //   const result = await jobCollection.find(query).toArray();
    //   res.send(result);
    // })

    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await jobCollection.findOne(query)
      res.send(result)
    });

    app.post("/jobs", async (req, res) => {
      const newJob = req.body;
      console.log(newJob);
      const result = await jobCollection.insertOne(newJob)
      res.send(result);
    })


    // job applications related apis

    app.get("/applications", async(req, res) => {
      const email = req.query.email;

      const query = {
        applicant: email
      }

      const result = await applicationsCollection.find(query).toArray()


      // bad way to aggregate data
      for(const application of result) {
        const jobId = application.jobId;
        const jobQuery = {_id: new ObjectId(jobId)}
        const job = await jobCollection.findOne(jobQuery);
        application.company = job.company
        application.title = job.title
        application.company_logo = job.company_logo
      }

      res.send(result);
    });

    app.get("/applications/job/:job_id", async (req, res) => {
      const job_id = req.params.job_id;
      const query = {jobId: job_id}
      const result = await applicationsCollection.find(query).toArray();
      res.send(result);
    })

    app.post("/applications", async (req, res) => {
      const application = req.body;
      console.log(application)
      const result = await applicationsCollection.insertOne(application);
      res.send(result)
    });

    app.patch("/applications/:id", async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const updateDoc = {
        $set: {
          status: req.body.status
        }
      }

      const result = await applicationsCollection.updateOne(filter, updateDoc);
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
