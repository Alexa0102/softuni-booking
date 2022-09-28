const { create } = require('../services/accomodationService')

const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Host New Accomodation'
    })
})

router.post('/', async (req, res) => {

    try {
        const result = await create(req.body)
        res.redirect('/catalog/' + result.id)

    } catch (e) {
        res.render('create', {
            title: "Request error"
        })
    }

})
module.exports = router
