/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9j22ciqxaug1oce")

  collection.createRule = "users = @request.auth.id"
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9j22ciqxaug1oce")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
