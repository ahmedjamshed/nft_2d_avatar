const express = require("express");
const memjs = require('memjs')
const router = express.Router();


const mc = memjs.Client.create(process.env.MEMCACHIER_SERVERS, {
    failover: true,  // default: false
    timeout: 1,      // default: 0.5 (seconds)
    keepAlive: true  // default: false
})

const getKey = async (uniqueID) => {
    try {
        const { value } = await mc.get(uniqueID)
        if(value)
            return value.toString('utf-8')
        else return null
    } catch (e) {
        return null
    }
}

router.get("/", async (req, res) => {
    const { uniqueID } = req.query;
    if (await getKey(uniqueID)) return res.status(200).send({ "result": true })
    return res.status(200).send({ "result": false })
});

router.post("/", async (req, res) => {
    const { uniqueID } = req.body;
    try {
        if (await getKey(uniqueID)) return res.status(200).send({ "result": false })
        await mc.set(uniqueID, 'someUser', { expires: 0 })
        return res.status(200).send({ "result": true })
    } catch (e) {
        return res.status(400).send({ "result": false })
    }
});

module.exports = router;