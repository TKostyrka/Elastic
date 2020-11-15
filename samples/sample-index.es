// create an index
PUT /sample-index01
GET /sample-index01

// create a document
PUT /sample-index01/_doc/1
{
  "name": "my first ES document",
  "message": "Hello Elastic!"
}

// check the index definition - new fields in the mapping section
GET /sample-index01
GET /sample-index01/_mappings

// check the document
GET /sample-index01/_doc/1
GET /sample-index01/_source/1

// create second document with new fields
PUT /sample-index01/_doc/2
{
  "name": "my second ES document",
  "message": "Hello once again.",
  "purpose": "tutorial"
}
// check the mappings, query the index
GET /sample-index01/_mappings
GET /sample-index01/_search
GET /sample-index01/_search
{
  "query": {
    "term": {
      "_id": 2
    }
  }
}
GET /sample-index01/_search
{
  "query": {
    "term": {
      "_id": 2
    }
  }
}
// drop the index
DELETE /sample-index01