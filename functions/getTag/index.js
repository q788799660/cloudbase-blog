
const cloud = require("@cloudbase/node-sdk");
const app = cloud.init({
    env: cloud.SYMBOL_CURRENT_ENV,
  });
const db = app.database();
const _ = db.command;
exports.main = async (event, context) => {
  let tag = event.tag;
  return db.collection('articles').where({
    tag: _.in([tag])
  }).get();
}
