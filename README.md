# Water My Plants v1.0.0

Backend Project for Lambda&#39;s Build Week API Repository, deployed Link is https://lambda-water-my-plants.herokuapp.com

- [Auth](#auth)
	- [Logs the User Into Water My Plants](#logs-the-user-into-water-my-plants)
	- [Registers a new user for Water My Plants](#registers-a-new-user-for-water-my-plants)
	
- [Plants](#plants)
	- [Get All Plants for Currently Logged In User](#get-all-plants-for-currently-logged-in-user)
	- [Adds a Plant to the Current Logged In User](#adds-a-plant-to-the-current-logged-in-user)
	


# Auth

## Logs the User Into Water My Plants

<p>Logs the User into Water My Plants</p>

	POST /api/auth/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>User's username</p>							|
| password			| String			|  <p>User's password</p>							|

### Success Response

Success-Response:

```
{
  "message": "Welcome back James Starks!",
  "token": "",
  "user" : {
    "id": 4,
    "firstName": "James",
    "lastName": "Starks",
    "username": "iwishiwastony",
    "phoneNumber": "8005551212"
  }
}
```
### Error Response

Error-Response:

```
{
  "message": "Invalid Credentials"
}
```
Error-Response:

```
{
  "message": "The username has not been registered"
}
```
## Registers a new user for Water My Plants

<p>Registers a new user</p>

	POST /api/auth/register


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| firstName			| String			|  <p>The User's first name</p>							|
| lastName			| String			|  <p>The User's last name</p>							|
| username			| String			|  <p>The User's username</p>							|
| password			| String			|  <p>The User's password</p>							|
| phoneNumber			| String			|  <p>The User's phoneNumber</p>							|

### Success Response

Success-Response:

```
{
  "id": 4,
  "firstName": "James",
  "lastName": "Starks",
  "username": "iwishiwastony",
  "phoneNumber": "8005551212"
}
```
### Error Response

Error-Response:

```
{
  "message": "The username has already been taken"
}
```
# Plants

## Get All Plants for Currently Logged In User

<p>Gets the Plants for the Current User</p>

	GET /api/plants


### Error Response

Error-Response:

```
{
  "message": "Unauthorized"
}
```
## Adds a Plant to the Current Logged In User



	POST /api/plants


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| String			|  <p>The Plant's Name</p>							|
| type			| String			|  <p>The Plant's Type</p>							|
| location			| String			|  <p>The Plant's Location</p>							|
| waterSchedule			| String			|  <p>The Plant's Watering Schedule Frequency</p>							|

### Success Response

Success-Response:

```
{
  "id": 10,
  "name": "Tulip",
  "type": "Flower",
  "location": "Front Yard",
  "waterSchedule": "Once Daily",
  "nextWatering": "2019-10-23T00:40:00.056Z",
  "userId": 4
}
```
### Error Response

Error-Response:

```
{
  "message": "Unauthorized"
}
```

