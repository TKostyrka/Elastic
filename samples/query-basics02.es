GET /_cat/indices

GET bulkcreate-index01/_search

GET bulkcreate-index01/_search
{
  "query": {
    "bool": {
      "must": [
        {"range": {"age": {"gte": 30, "lte": 35}}},
        {"match": {"address": "Court"}}
      ]
    }
  }
}

GET bulkcreate-index01/_search
{
  "query": {
    "bool": {
      "must": [
        {"range": {"age": {"gte": 30, "lte": 35}}},
        {"match": {"address": "Court"}}
      ],
      "must_not": [
        {"terms": {"state":["MD", "UT"]}}
      ]
    }
  }
}