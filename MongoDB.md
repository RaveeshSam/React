# MongoDB Docs

### _Show Databases_
```sh
test> show dbs
admin    40.00 KiB
config  108.00 KiB
local    72.00 KiB
```

### _Create Collection_
```sh
test> use student
switched to db student
```

### _Insert One Data into Collection_
```sh
student> db.student.insertOne({"name": "Sam"})
{
  acknowledged: true,
  insertedId: ObjectId('664392e048780b852a46b799')
}
```

### _Checking Data Into Collection_
```sh
student> db.student.find()
[ { _id: ObjectId('664392e048780b852a46b799'), name: 'Sam' } ]
```

### _Insert One Data into Collection_
```sh
student> db.student.insertOne({rollno: "1", name: "Amit", age: "20"})
{
  acknowledged: true,
  insertedId: ObjectId('6643938a48780b852a46b79a')
}
```

### _Display Whole Collection_
```sh
student> db.student.find()
[
  { _id: ObjectId('664392e048780b852a46b799'), name: 'Sam' },
  {
    _id: ObjectId('6643938a48780b852a46b79a'),
    rollno: '1',
    name: 'Amit',
    age: '20'
  }
]
```

### _Insert Many Data into Collection_
```sh
student> db.student.insertMany([{rollno: "2", name: "Aman", age: "21"}, {rollno: "3", name: "Mohit", age: "22"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6643963e48780b852a46b79c'),
    '1': ObjectId('6643963e48780b852a46b79d')
  }
}
``` 

### _Display Whole Collection_
```sh
student> db.student.find()
[
  { _id: ObjectId('664392e048780b852a46b799'), name: 'Sam' },
  {
    _id: ObjectId('6643938a48780b852a46b79a'),
    rollno: '1',
    name: 'Amit',
    age: '20'
  },
 {
    _id: ObjectId('6643963e48780b852a46b79c'),
    rollno: '2',
    name: 'Aman',
    age: '21'
  },
  {
    _id: ObjectId('6643963e48780b852a46b79d'),
    rollno: '3',
    name: 'Mohit',
    age: '22'
  }
]
```

### _Querying Data from Collection_
```sh
student> db.student.find({age: '21'})
[
  {
    _id: ObjectId('6643963e48780b852a46b79c'),
    rollno: '2',
    name: 'Aman',
    age: '21'
  }
]
``` 

### _Update Data in Collection_
```sh
student> db.student.updateOne({name: 'Aman'}, {$set: {age: '20'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```

### _Checking Updated Data_
```sh
student> db.student.find( {name: "Aman"} )
[
  {
    _id: ObjectId('6643963e48780b852a46b79c'),
    rollno: '2',
    name: 'Aman',
    age: '20'
  }
]
```

### _Delete Data from Collection_
```sh
student> db.student.deleteOne({rollno: '2'})
{ acknowledged: true, deletedCount: 1 }
```

### _Drop Database_
```sh
student> db.dropDatabase()
{ ok: 1, dropped: 'student' }
```
