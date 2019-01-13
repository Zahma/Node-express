const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get All users !'
    });
});

router.get('/:userId', (req, res, next) => {
    const userId = req.params.userId;
    res.status(200).json({
        message: 'Get user ' + userId
    });
});

module.exports = router;