# Water My Plants v1.0.0

Backend Project for Lambda&#39;s Build Week API Repository, deployed Link is https://lambda-water-my-plants.herokuapp.com

- [Auth](#auth)
	- [Logs the User Into Water My Plants](#logs-the-user-into-water-my-plants)
	- [Registers a new user for Water My Plants](#registers-a-new-user-for-water-my-plants)
	
- [Plants](#plants)
	- [Deletes the Plant with the provided id](#deletes-the-plant-with-the-provided-id)
	- [Get All Plants for Currently Logged In User](#get-all-plants-for-currently-logged-in-user)
	- [Adds a Plant to the Current Logged In User](#adds-a-plant-to-the-current-logged-in-user)
	- [Updates the Plant Information with the provided Plant Id](#updates-the-plant-information-with-the-provided-plant-id)
	


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

## Deletes the Plant with the provided id

<p>Deletes the Plant with the provided id</p>

	DELETE /api/plants/:id


### Success Response

Success-Response:

```
1
```
### Error Response

Error-Response:

```
{
  "message": "Unauthorized"
}
```
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
## Updates the Plant Information with the provided Plant Id

<p>Updates the Plant Information with the provided Plant Id</p>

	PUT /api/plants/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| String			|  <p>The Plant's Name</p>							|
| type			| String			|  <p>The Plant's Type</p>							|
| location			| String			|  <p>The Plant's Location</p>							|
| waterSchedule			| String			|  <p>The Plant's Watering Schedule Frequency</p>							|
| nextWatering			| DateTime			|  <p>Next time the Plant needs to be watered</p>							|

### Success Response

Success-Response:

```
{
  "id": 10,
  "name": "Tulip",
  "type": "Flower",
  "location": "Front Yard",
  "waterSchedule": "Twice Daily",
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

