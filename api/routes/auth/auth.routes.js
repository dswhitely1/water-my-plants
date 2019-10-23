const authRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../../../data/models/user/user.model');
const generatePassword = require('../../utils/generatePassword');
const generateToken = require('../../utils/genearteToken');

/**
 * @apiDefine IncorrectPassword
 * @apiError 401 {json} IncorrectPassword The Password is not Correct
 * @apiErrorExample {json} Error-Response:
 * {
 *   "message": "Invalid Credentials"
 * }
 */

/**
 * @apiDefine UsernameTaken
 * @apiError 400 {json} UsernameTaken The username is already taken
 * @apiErrorExample {json} Error-Response:
 * {
 *   "message": "The username has already been taken"
 * }
 */

/**
 * @apiDefine UsernameNotFound
 * @apiError 404 {json} UsernameNotFound The username is not in the database
 * @apiErrorExample {json} Error-Response:
 * {
 *   "message": "The username has not been registered"
 * }
 */

/**
 * @api {post} /api/auth/register Registers a new user for Water My Plants
 * @apiUse UsernameTaken
 * @apiVersion 1.0.0
 * @apiName PostAuthRegister
 * @apiGroup Auth
 * @apiPermission none
 * @apiDescription Registers a new user
 * @apiParam {String} firstName The User's first name
 * @apiParam {String} lastName The User's last name
 * @apiParam {String} username The User's username
 * @apiParam {String} password The User's password
 * @apiParam {String} phoneNumber The User's phoneNumber
 * @apiParamExample {json} Sample-Request:
 * {
 *   "firstName": "James",
 *   "lastName": "Starks",
 *   "username": "iwishiwastony",
 *   "password": "iamironman",
 *   "phoneNumber": "8005551212"
 * }
 * @apiSuccess 201 {json} user The newly Created User
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "id": 4,
 *   "firstName": "James",
 *   "lastName": "Starks",
 *   "username": "iwishiwastony",
 *   "phoneNumber": "8005551212"
 * }
 */

function register(req, res) {
  Users.findBy({ username: req.body.username })
    .then(foundUser => {
      if (foundUser.length === 0) {
        const newPassword = generatePassword(req.body.password);
        Users.add({ ...req.body, password: newPassword })
          .then(newUser => {
            const sentUser = {
              id: newUser[0].id,
              firstName: newUser[0].firstName,
              lastName: newUser[0].lastName,
              username: newUser[0].username,
              phoneNumber: newUser[0].phoneNumber,
            };
            res.status(201).json(sentUser);
          })
          .catch(err => res.status(500).json(err));
      } else {
        res
          .status(400)
          .json({ message: 'The username has already been taken' });
      }
    })
    .catch(err => res.status(500).json(err));
}

/**
 * @api {post} /api/auth/login Logs the User Into Water My Plants
 * @apiUse IncorrectPassword
 * @apiUse UsernameNotFound
 * @apiVersion 1.0.0
 * @apiName PostAuthLogin
 * @apiGroup Auth
 * @apiPermission none
 * @apiDescription Logs the User into Water My Plants
 * @apiParam {String} username User's username
 * @apiParam {String} password User's password
 * @apiParamExample {json} Sample-Request:
 * {
 *   "username": "iwishiwastony",
 *   "password": "iamironman"
 * }
 * @apiSuccess 200 {json} user The Welcome Message
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "message": "Welcome back James Starks!",
 *   "token": "",
 *   "user" : {
 *     "id": 4,
 *     "firstName": "James",
 *     "lastName": "Starks",
 *     "username": "iwishiwastony",
 *     "phoneNumber": "8005551212"
 *   }
 * }
 */

function login(req, res) {
  Users.findBy({ username: req.body.username })
    .then(foundUser => {
      if (foundUser.length !== 0) {
        if (bcrypt.compareSync(req.body.password, foundUser[0].password)) {
          const token = generateToken(foundUser[0]);
          const user = {
            id: foundUser[0].id,
            firstName: foundUser[0].firstName,
            lastName: foundUser[0].lastName,
            username: foundUser[0].username,
            phoneNumber: foundUser[0].phoneNumber,
          };
          res.json({
            message: `Welcome back ${user.firstName} ${user.lastName}!`,
            token,
            user,
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      } else {
        res
          .status(404)
          .json({ message: 'The username has not been registered' });
      }
    })
    .catch(err => res.status(500).json(err));
}

authRouter.post('/register', register).post('/login', login);

module.exports = authRouter;
