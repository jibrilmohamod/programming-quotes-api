const mongodb = require('mongodb')
const ObjectId = require('mongodb').ObjectId
const mongoUri = require('../../config.js').mongoUri

module.exports = (req, res) => {
  const _id = req.body._id
  const novaOcena = Number(req.body.novaOcena)
  if (!_id || !novaOcena) return res.send('Niste poslali obavezna polja.')

  mongodb.MongoClient.connect(mongoUri, (err, db) => {
    if(err) throw err

    db.collection('quotes').findOne({_id: new ObjectId(_id)}, (err, citat) => {
      if (err) throw err
      const {glasalo, ocena} = citat
      const noviProsek = (glasalo * ocena + novaOcena) / (glasalo + 1)
      db.collection('quotes').update(
        {_id: new ObjectId(_id)},
        {
          $set: {
            ocena: noviProsek.toFixed(1),
            glasalo: glasalo + 1
          }
        }
      )
      res.send(noviProsek.toFixed(1))
      db.close()
    })
  })
}
