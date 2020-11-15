GET /_cat/indices
GET bulkcreate-index01/_search
GET bulkcreate-index01/_search
{
  "query": {
    "term": {
      "lastname": {
        "value": "Bates"
      }
    }
  }
}
GET bulkcreate-index01/_search
{
  "query": {
    "match": {
      "address": "Court"
    }
  }
}
GET bulkcreate-index01/_search
{
  "_source": ["firstname","lastname","age","address"], 
  "query": {
    "match": {
      "address": "Court"
    }
  }
}
GET bulkcreate-index01/_search
{
  "_source": ["firstname","lastname","age","address"], 
  "query": {
    "range": {
      "age": {
        "gte": 32,
        "lte": 33
      }
    }
  }
}