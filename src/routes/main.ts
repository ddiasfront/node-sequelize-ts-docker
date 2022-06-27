import express from 'express';
let router = express.Router();

router.get('/', (req, res) => {
    res.send('Main page loadedz');
})

export default router;