db.getCollection("students").find({})

//Q 3
db.getCollection("students").insertOne(
{
    "name": "John",
    "dateOfBirth": "1990-01-01T00:00:00Z",
    "subjects": ["Application frameworks", "Computer architecture"]
}
)

//Q 4
db.getCollection("students").find({"name": "John"})

//Q 6
db.getCollection("students").updateOne({},{$push:{"subjects":"Distributed Computing"}})

//Q 7
db.getCollection("students").insertMany([
{
    "name": "Smith",
    "dateOfBirth": "1991-01-01T00:00:00Z",
    "subjects": ["Application frameworks", "Computerarchitecture"],
    "isActive": true
},
{
    "name": "Jane",
    "dateOfBirth": "1990-01-01T00:00:00Z",
    "subjects": ["Application frameworks", "Computerarchitecture"],
    "isActive": true    
}
])

//Q 8
db.getCollection("students").updateOne({"name":"Smith", "isActive":true},{$push:{"subjects":"Distributed Systems"}})

//Q 9
db.getCollection("students").updateOne({"name":"John"},{$set:{"isActive":true}})

//Q 10
db.getCollection("students").deleteOne({"name":"John"}) 
