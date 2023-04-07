import Router from 'express'
const router = new Router()
import Ad from '../models/Ad.js'


router.post('/addNew',
    
    async (req, res) => {

    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({message: "Uncorrect request", errors})
        }
        
        const {name, photo, category, price, priceDay, priceWeek, priceMonth, city, address } = req.body


        const adnew = new Ad({importname, photo, category, price, priceDay, priceWeek, priceMonth, city, address})
        await adnew.save()
        return res.json({message: "Ad был успешно создан :3"})

    } catch (error) {
        console.log(error)
        res.send({message: "Server error!"})
    }
})

export default router