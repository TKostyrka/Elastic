GET /_cat/indices
GET /order/_mapping

GET order/_search
{
  "size": 0,
  "aggs": {
    "status_terms": {
      "terms": {
        "field": "status"
      }
    }
  }
}

GET order/_search
{
  "size": 0,
  "aggs": {
    "status_terms": {
      "terms": {
        "field": "status"
      },
      "aggs": {
        "status_statistics": {
          "stats": {
            "field": "total_amount"
          }
        }
      }
    }
  }
}

GET order/_search
{
  "size": 0,
  "query": {
    "range": {
      "total_amount": {
        "gte": 100
      }
    }
  }, 
  "aggs": {
    "status_terms": {
      "terms": {
        "field": "status"
      },
      "aggs": {
        "status_statistics": {
          "stats": {
            "field": "total_amount"
          }
        }
      }
    }
  }
}

GET order/_search
{
  "size": 0,
  "aggs": {
    "my_filter": {
      "filters": {
        "filters": {
          "store_all": {"term":{ "sales_channel": "store"}},
          "completed_all": {"term":{ "status": "completed"}}
        }
      },
      "aggs": {
          "status_statistics": {
            "stats": {
              "field": "total_amount"
          }
        }
      }
    }
  }
}