define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Logs the User Into Water My Plants",
    "version": "1.0.0",
    "name": "PostAuthLogin",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Logs the User into Water My Plants</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "{\n  \"username\": \"iwishiwastony\",\n  \"password\": \"iamironman\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>{json} user The Welcome Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"message\": \"Welcome back James Starks!\",\n  \"token\": \"\",\n  \"user\" : {\n    \"id\": 4,\n    \"firstName\": \"James\",\n    \"lastName\": \"Starks\",\n    \"username\": \"iwishiwastony\",\n    \"phoneNumber\": \"8005551212\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/auth/auth.routes.js",
    "groupTitle": "Auth",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>{json} IncorrectPassword The Password is not Correct</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>{json} UsernameNotFound The username is not in the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"The username has not been registered\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Registers a new user for Water My Plants",
    "version": "1.0.0",
    "name": "PostAuthRegister",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Registers a new user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The User's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The User's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The User's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>The User's phoneNumber</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "{\n  \"firstName\": \"James\",\n  \"lastName\": \"Starks\",\n  \"username\": \"iwishiwastony\",\n  \"password\": \"iamironman\",\n  \"phoneNumber\": \"8005551212\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>{json} user The newly Created User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\": 4,\n  \"firstName\": \"James\",\n  \"lastName\": \"Starks\",\n  \"username\": \"iwishiwastony\",\n  \"phoneNumber\": \"8005551212\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/auth/auth.routes.js",
    "groupTitle": "Auth",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>{json} UsernameTaken The username is already taken</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"The username has already been taken\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/plants/:id",
    "title": "Deletes the Plant with the provided id",
    "name": "DeletePlants",
    "version": "1.0.0",
    "group": "Plants",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Deletes the Plant with the provided id</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>The number of records deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/plants/plant.routes.js",
    "groupTitle": "Plants",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>{json} Unauthorized User is not Authenticated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/plants",
    "title": "Get All Plants for Currently Logged In User",
    "name": "GetPlants",
    "version": "1.0.0",
    "group": "Plants",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Gets the Plants for the Current User</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>{json} plants The Users current plants [ { &quot;id&quot;: 10, &quot;name&quot;: &quot;Tulip&quot;, &quot;type&quot;: &quot;Flower&quot;, &quot;location&quot;: &quot;Front Yard&quot;, &quot;waterSchedule&quot;: &quot;Once Daily&quot;, &quot;nextWatering&quot;: &quot;2019-10-23T00:40:00.056Z&quot;, &quot;userId&quot;: 4 } ]</p>"
          }
        ]
      }
    },
    "filename": "api/routes/plants/plant.routes.js",
    "groupTitle": "Plants",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>{json} Unauthorized User is not Authenticated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/plants",
    "title": "Adds a Plant to the Current Logged In User",
    "name": "PostPlants",
    "version": "1.0.0",
    "group": "Plants",
    "permission": [
      {
        "name": "token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Plant's Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The Plant's Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>The Plant's Location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "waterSchedule",
            "description": "<p>The Plant's Watering Schedule Frequency</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "{\n  \"name\": \"Tulip\",\n  \"type\": \"Flower\",\n  \"location\": \"Front Yard\",\n  \"waterSchedule\": \"Once Daily\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>{json} plant The Newly Added Plant</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\": 10,\n  \"name\": \"Tulip\",\n  \"type\": \"Flower\",\n  \"location\": \"Front Yard\",\n  \"waterSchedule\": \"Once Daily\",\n  \"nextWatering\": \"2019-10-23T00:40:00.056Z\",\n  \"userId\": 4\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/plants/plant.routes.js",
    "groupTitle": "Plants",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>{json} Unauthorized User is not Authenticated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/plants/:id",
    "title": "Updates the Plant Information with the provided Plant Id",
    "name": "PutPlants",
    "version": "1.0.0",
    "group": "Plants",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Updates the Plant Information with the provided Plant Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Plant's Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The Plant's Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>The Plant's Location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "waterSchedule",
            "description": "<p>The Plant's Watering Schedule Frequency</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "nextWatering",
            "description": "<p>Next time the Plant needs to be watered</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "{\n  \"waterSchedule\": \"Twice Daily\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>{json} updatedPlant The updated Plant Information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\": 10,\n  \"name\": \"Tulip\",\n  \"type\": \"Flower\",\n  \"location\": \"Front Yard\",\n  \"waterSchedule\": \"Once Daily\",\n  \"nextWatering\": \"2019-10-23T00:40:00.056Z\",\n  \"userId\": 4\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/plants/plant.routes.js",
    "groupTitle": "Plants",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>{json} Unauthorized User is not Authenticated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
