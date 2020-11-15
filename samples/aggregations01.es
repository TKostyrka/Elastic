// https://logz.io/blog/elasticsearch-aggregations/

// delete /order index if exists
DELETE /order

// create /order index, provide mappings
PUT /order
{
  "mappings": {
    "properties": {
      "purchased_at":   {"type": "date"},
      "total_amount":   {"type": "double"},
      "status":         {"type": "keyword"},
      "sales_channel":  {"type": "keyword"},
      "lines": {
        "type": "nested",
        "properties": {
          "product_id": {"type": "integer"},
          "amount":     {"type": "double"},
          "quantity":   {"type": "short"}
        }
      },
      "salesman": {
        "type": "object",
        "properties": {
          "id":     {"type": "integer"},
          "name":   {"type": "text"}
        }
      }
    }
  }
}

// verify
GET /order/_mapping

// change the teminal context to the folder with orders-bulk.json
// and execute below curl command to bulk load the content:

// curl -H "Content-Type: application/json" -XPOST localhost:9200/order/_doc/_bulk?pretty --data-binary "@orders-bulk.json"

// refresh and verify
POST /order/_refresh
GET /_cat/indices/order
GET /order/_search