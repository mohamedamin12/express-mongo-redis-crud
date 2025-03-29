const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const redis = require("redis");
const redisClient = redis.createClient();

redisClient.connect();

exports.createProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);
  return res.json(product);
});

exports.getAll = asyncHandler(async (req, res, next) => {
  const cacheProducts = await redisClient.get("products");
  if (cacheProducts) {
    console.log("from redis ");
    return res.json(JSON.parse(cacheProducts));
  }
  const products = await Product.find();
  await redisClient.set("products", JSON.stringify(products), { EX: 60 });
  return res.json(products);
});