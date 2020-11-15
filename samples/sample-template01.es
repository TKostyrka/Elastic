GET _cat/indices
GET _cat/templates

PUT _index_template/sample-template
{
  "index_patterns": ["sample-*"],
  "template": {
    "settings": {
      "number_of_shards": 1
      },
    "mappings": {
      "properties": {
        "@timestamp": {"type": "date"},
        "name": {"type": "keyword"},
        "message": {"type": "text"},
        "purpose": {"type": "text"}
        }
      }
    }
}

GET _cat/templates
GET _cat/templates/sample-template
GET /_index_template/sample-template

PUT /sample-index02
GET /sample-index02/_mappings

PUT /sample-index02/_doc/1
{
  "name": "my first ES document",
  "message": "Hello Elastic!"
}

GET /sample-index02/_doc/1
GET /sample-index02/_source/1

PUT /sample-index02/_doc/2
{
  "name": "my second ES document",
  "message": "Hello once again.",
  "new_field": "check what happens in the mappings"
}

GET /sample-index02/_doc/2
GET /sample-index02/_source/2

GET /sample-index02/_mappings


DELETE /sample-index02
DELETE /_index_template/sample-template