GET /_cat/indices
GET /order/_mapping

GET /order/_search
{
  "size": 0,
  "aggs": {
    "total_sales": {
      "sum": {"field": "total_amount"}
    }
  }
}

GET /order/_search
{
  "size": 0,
  "aggs": {
    "total_sales": {
      "sum": {"field": "total_amount"}
    },
    "avg_sales": {
      "avg": {"field": "total_amount"}
    },
    "min_sales": {
      "min": {"field": "total_amount"}
    },
    "max_sales": {
      "max": {"field": "total_amount"}
    }
  }
}

GET /order/_search
{
  "size": 0,
  "aggs": {
    "amount_stats": {
      "stats": {"field": "total_amount"}
    }
  }
}

GET /order/_search
{
  "size": 0,
  "aggs": {
    "total_salesmen": {
      "cardinality": {"field": "salesman.id"}
    },
    "vcount": {
      "value_count": {"field": "total_amount"}
    }
  }
}