import AdModel from '../models/Ad.js'

export const getLastCategory = async (req, res) => {
  try {
    const ads = await AdModel.find().limit(5).exec();

    const category = ads
      .map((obj) => obj.category)
      .flat()

    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить объявления',
    });
  }
};

export const getAll = async (req, res) => {
    try {
        const ads = await AdModel.find().populate('user').exec();
        res.json(ads)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Не удалось получить статьи"
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const adId = req.params.id
        
        AdModel.findOneAndUpdate(
            {
              _id: adId,
            },
            {
              $inc: { viewsCount: 1 },
            },
            {
              returnDocument: 'after',
            }
          )
            .then((doc) => {
              res.json(doc);
            })
            .catch((err) => {
              console.log(err);
              res.status(404).json({ message: 'Объявление не найдено' });
            });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Не удалось получить объявления"
        })
    }
}

export const remove = async (req, res) => {
    AdModel.findByIdAndDelete(req.params.id)
      .then(() => {
        res.send({ message: 'Ad deleted successfully.' });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ message: 'Error deleting ad.' });
      });
  };
        

export const create = async (req, res) => {
    try {
        const doc = new AdModel({
            name: req.body.name,
            photo: req.body.photo,
            category: req.body.category,
            price: req.body.price,
            priceDay: req.body.priceDay,
            priceWeek: req.body.priceWeek,
            priceMonth: req.body.priceMonth,
            city: req.body.city,
            address: req.body.address,
            user: req.user.id
        })

        const ad = await doc.save()
        console.log(ad)

        res.json(ad)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Не удалось создать объявление"
        })
    }
}

export const update = async (req, res) => {
    try {
        const adId = req.params.id
       await AdModel.updateOne({
            _id: adId
        }, {
            name: req.body.name,
            photo: req.body.photo,
            category: req.body.category,
            price: req.body.price,
            priceDay: req.body.priceDay,
            priceWeek: req.body.priceWeek,
            priceMonth: req.body.priceMonth,
            city: req.body.city,
            address: req.body.address,
        })
      .then(() => {
        res.send({ message: 'Ad updated successfully.' });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ message: 'Error updating ad.' });
      });
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Не удалось обновить объявление"})
    }
}