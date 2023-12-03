const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8080;


let dummyPBFTConsensusData = {
    primary_id: 1,
    numberOfReplicas: 4,
    phases: 
        [
            {
                phase: "New-Txns",
                senders: [5],
                receivers: [1]
            },
            {
                phase: "Pre-Prepare",
                senders: [1],
                receivers: [1,2,3,4]
            },
            {
                phase: "Prepare",
                senders: [1],
                receivers: [1,2,3,4]
            },
            {
                phase: "Prepare",
                senders: [2],
                receivers: [1,2,3,4]
            },
            {
                phase: "Prepare",
                senders: [3],
                receivers: [1,2,3,4]
            },
            {
                phase: "Prepare",
                senders: [4],
                receivers: [1,2,3,4]
            },
            {
                phase: "Commit",
                senders: [1],
                receivers: [1,2,3,4]
            },
            {
                phase: "Commit",
                senders: [2],
                receivers: [1,2,3,4]
            },
            {
                phase: "Commit",
                senders: [3],
                receivers: [1,2,3,4]
            },
            {
                phase: "Commit",
                senders: [4],
                receivers: [1,2,3,4]
            },
            {
                phase: "Response",
                senders: [1,2,3,4],
                receivers: [5]
            }
        ]
}

const app = express();
app.use(cors());
app.get("/api/data/", (req, res) => {
    const key1 = req.query.key;
    const key2 = req.query.value;
    res.json(dummyPBFTConsensusData);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});