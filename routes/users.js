var express = require('express');
var router = express.Router();



router.get('/', (req, res) => {
    // res.send("hello, ");
    res.render('users', {   
        name: "这是首页"
    });
})
router.get('/:name', (req, res) => {

    // res.send("hello, ");
    res.render('users', {   
        name: req.params.name
    });
})

module.exports = router;