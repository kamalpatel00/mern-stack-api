const express = require('express');
var router = express.Router();
var { PostMessage } = require('../models/postMessage');
var objectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
  PostMessage.find((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        'Error while retrieving all records :' +
          JSON.stringify(err.undefined, 2)
      );
  });
});

router.post('/', (req, res) => {
  var newRecord = new PostMessage({
    title: req.body.title,
    message: req.body.message,
  });
  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        'Error while Creating new records :' + JSON.stringify(err.undefined, 2)
      );
  });
});

router.put('/:id', (req, res) => {
  if (!objectId.isValid(req.params.id)) {
    return res
      .status(400)
      .send('No record found with given id' + req.params.id);
  }
  var updatedRecord = {
    title: req.body.title,
    message: req.body.message,
  };

  PostMessage.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else
        console.log(
          'Error while Updating records :' + JSON.stringify(err.undefined, 2)
        );
    }
  );
});

router.delete('/:id', (req, res) => {
  if (!objectId.isValid(req.params.id)) {
    return res.status(400).send('No records with Given ID' + req.params.id);
  }
  PostMessage.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        'Error while a Deleting records :' + JSON.stringify(err.undefined, 2)
      );
  });
});

module.exports = router;
