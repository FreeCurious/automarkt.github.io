const express = require ('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message:'car retrieved'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message:'car posted'
       });
});

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message:'car updated'
       });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message:'car removed'
       });
});

module.exports = router;