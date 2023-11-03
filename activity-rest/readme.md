# Exercise Tracker REST API

This express app runs on port `3000` and can be started by running `npm start`
in the current directory. It handles the http requests described below.

The schema for each of the requests is as follows:

```javascript
{
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  unit: { type: String, required: true },
  date: { type: String, required: true }
}
```

## Create (an exercise)

By making a `POST` request to `http://localhost:3000/exercises`

**example request body**

```json
{
    "name": "Squat",
    "reps": 10,
    "weight": 30,
    "unit": "lbs",
    "date": "06-24-21"
}
```

**example response**

```json
{
    "_id": "6138029d460ade05682e86da",
    "name": "Squat",
    "reps": 10,
    "weight": 30,
    "unit": "lbs",
    "date": "06-24-21",
    "__v": 0
}
```

## Read (all exercises)

By making a `GET` request to `http://localhost:3000/exercises`

**example response**

```
[
    {
        "_id": "6138029d460ade05682e86da",
        "name": "Squat",
        "reps": 10,
        "weight": 30,
        "unit": "lbs",
        "date": "06-24-21",
        "__v": 0
    },
    ...
]
```



## Update (an exercise)

By making a `PUT` request to `http://localhost:3000/exercises/{{deadliftID}}`
where `{{deadliftID}}` is the `_id` of the document in the database returned
from a previous request.

**example request body**

```json
{
    "name": "Deadlift",
    "reps": 12,
    "weight": 30,
    "unit": "lbs",
    "date": "06-25-21"
}
```

**example response**

```
{
    "_id": "6138040a460ade05682e8705",
    "name": "Deadlift",
    "reps": 12,
    "weight": 30,
    "unit": "lbs",
    "date": "06-25-21"
}
```


## Delete (an exercise)

By making a `DELETE` request to
`http://localhost:3000/exercises/{{deadliftID}}` where `{{deadliftID}}` is the
`_id` of the document in the database returned from a previous request.
