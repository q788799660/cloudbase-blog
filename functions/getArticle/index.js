const cloud = require("@cloudbase/node-sdk");
const app = cloud.init({
  env: cloud.SYMBOL_CURRENT_ENV,
});
const db = app.database()

exports.main = async (event) => {
  let { id } = event;

  return db.collection('articles').where({
    _id: id
  }).get();
}
