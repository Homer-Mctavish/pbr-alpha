/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9j22ciqxaug1oce")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rlswcgnc",
    "name": "field",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 200,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9j22ciqxaug1oce")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rlswcgnc",
    "name": "field",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 8,
      "max": 15,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
