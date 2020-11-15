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
      "dynamic": false,
      "properties": {
        "@timestamp": {"type": "date"},
        "name": {"type": "keyword"},
        "message": {"type": "text"},
        "purpose": {"type": "text"}
        }
      }
    }
}

PUT /sample-index03
GET /sample-index03/_mappings

PUT /sample-index03/_doc/1
{
  "name": "my first ES document",
  "message": "Hello Elastic!",
  "new_field01": "Lets check",
  "new_field02": "if mappings",
  "new_field03": "are added for",
  "new_field04": "the new fields."
}

GET /sample-index03/_doc/1
GET /sample-index03/_source/1

GET /sample-index03/_mappings

DELETE /sample-index03
DELETE /_index_template/sample-template