const adService = require("../services/adService")
const User = require("../models/User")
const Ad = require("../models/Ad")


class AdController {
    async createDir(req, res) {
        try {
            const {name, parent} = req.body
            const ad = new Ad({name, parent, user: User.id})
            const parentAd = await Ad.findOne({__id: parent})
            if(!parentAd) {
                ad.path = name
                await adService.createDir(ad)
            } else {
                ad.path = `${parentAd.path} \\ ${ad.name}`
                await adService.createDir(ad)
                parentAd.childs.push(ad.__id)
                await parentAd.save()
            }
            await parentAd.save()
            return res.json(ad)
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
        }
    }
}

module.exports = new AdController()