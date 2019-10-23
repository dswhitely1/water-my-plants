const plantRouter = require('express').Router();
const Plants = require('../../../data/models/plant/plant.model');
const restricted = require('../../utils/restricted');

/**
 * @apiDefine Unauthorized
 * @apiError 401 {json} Unauthorized User is not Authenticated
 * @apiErrorExample {json} Error-Response:
 * {
 *   "message": "Unauthorized"
 * }
 */
/**
 * @api {get} /api/plants Get All Plants for Currently Logged In User
 * @apiUse Unauthorized
 * @apiName GetPlants
 * @apiVersion 1.0.0
 * @apiGroup Plants
 * @apiPermission token
 * @apiDescription Gets the Plants for the Current User
 * @apiSuccess 200 {json} plants The Users current plants
 * [
 *  {
 *    "id": 10,
 *    "name": "Tulip",
 *    "type": "Flower",
 *    "location": "Front Yard",
 *    "waterSchedule": "Once Daily",
 *    "nextWatering": "2019-10-23T00:40:00.056Z",
 *    "userId": 4
 *  }
 * ]
 */

function allUserPlants(req, res) {
  Plants.findBy({ userId: req.user.id })
    .then(plants => res.json(plants))
    .catch(err => res.status(500).json(err));
}

/**
 * @api {post} /api/plants Adds a Plant to the Current Logged In User
 * @apiUse Unauthorized
 * @apiName PostPlants
 * @apiVersion 1.0.0
 * @apiGroup Plants
 * @apiPermission token
 * @apiParam {String} name The Plant's Name
 * @apiParam {String} type The Plant's Type
 * @apiParam {String} location The Plant's Location
 * @apiParam {String} waterSchedule The Plant's Watering Schedule Frequency
 * @apiParamExample {json} Sample-Request:
 * {
 *   "name": "Tulip",
 *   "type": "Flower",
 *   "location": "Front Yard",
 *   "waterSchedule": "Once Daily"
 * }
 * @apiSuccess 201 {json} plant The Newly Added Plant
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "id": 10,
 *   "name": "Tulip",
 *   "type": "Flower",
 *   "location": "Front Yard",
 *   "waterSchedule": "Once Daily",
 *   "nextWatering": "2019-10-23T00:40:00.056Z",
 *   "userId": 4
 * }
 */

function addPlant(req, res) {
  Plants.add({ ...req.body, userId: req.user.id })
    .then(newPlant => {
      res.status(201).json(newPlant[0]);
    })
    .catch(err => res.status(500).json(err));
}

/**
 * @api {put} /api/plants/:id Updates the Plant Information with the provided Plant Id
 * @apiUse Unauthorized
 * @apiName PutPlants
 * @apiVersion 1.0.0
 * @apiGroup Plants
 * @apiPermission token
 * @apiDescription Updates the Plant Information with the provided Plant Id
 * @apiParam {String} name The Plant's Name
 * @apiParam {String} type The Plant's Type
 * @apiParam {String} location The Plant's Location
 * @apiParam {String} waterSchedule The Plant's Watering Schedule Frequency
 * @apiParam {DateTime} nextWatering Next time the Plant needs to be watered
 * @apiParamExample {json} Sample-Request:
 * {
 *   "waterSchedule": "Twice Daily"
 * }
 * @apiSuccess 200 {json} updatedPlant The updated Plant Information
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "id": 10,
 *   "name": "Tulip",
 *   "type": "Flower",
 *   "location": "Front Yard",
 *   "waterSchedule": "Once Daily",
 *   "nextWatering": "2019-10-23T00:40:00.056Z",
 *   "userId": 4
 * }
 */

function updatePlant(req, res) {
  Plants.update(req.params.id, req.body).then(updatedPlant=>res.json(updatedPlant)).catch(err=>res.status(500).json());
}

/**
 * @api {delete} /api/plants/:id Deletes the Plant with the provided id
 * @apiUse Unauthorized
 * @apiName DeletePlants
 * @apiVersion 1.0.0
 * @apiGroup Plants
 * @apiPermission token
 * @apiDescription Deletes the Plant with the provided id
 * @apiSuccess {Integer} count The number of records deleted
 * @apiSuccessExample {json} Success-Response:
 * 1
 */

function deletePlant(req, res) {
  Plants.remove(req.params.id).then(count=>res.json(count)).catch(err=>res.status(500).json(err));
}

plantRouter
  .get('/', restricted, allUserPlants)
  .post('/', restricted, addPlant)
  .put('/:id', updatePlant)
  .delete('/:id', deletePlant);

module.exports = plantRouter;
