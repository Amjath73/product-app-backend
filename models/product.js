const mongoose = require("mongoose")
const schema = mongoose.Schema(
{
    "productId":String,
    "productName":String,
    "description":String,
    "price":String
}
)

let productmodel=mongoose.model("produts",schema)
module.exports=(productmodel)