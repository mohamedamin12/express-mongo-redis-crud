
# Express MongoDB Redis CRUD Project

This project is designed to demonstrate how to integrate **Redis** with **MongoDB** in a Node.js application. It provides a simple CRUD system with `User` and `Product` models, showcasing caching strategies to improve API performance using Redis.

---

## 🚀 **Purpose**
I created this project to help people learn how to use **Redis** with **MongoDB** effectively in a real-world scenario.

---

## 🛠️ **Technologies Used**
- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing data
- **Redis**: In-memory key-value store for caching
- **Docker**: Optional for running Redis locally
- **async-express-handler**: Middleware to handle asynchronous errors cleanly


---

## ⚙️ **Setup Instructions**
1. Clone this repository:
   ```bash
   git clone https://github.com/ibrahimabdalrhman/express-mongo-redis-crud.git
   cd express-mongo-redis-crud
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the project root and add the following:
     ```env
     MONGO_URI=mongodb://localhost:27017/express-crud
     REDIS_HOST=127.0.0.1
     REDIS_PORT=6379
     ```
4. Run MongoDB and Redis:
   - Using Docker:
     ```bash
     docker run -d --name redis-server -p 6379:6379 redis
     ```
   - Or install MongoDB and Redis locally.

5. Start the server:
   ```bash
   node app.js
   ```

---

## 📚 **API Endpoints**

### Users
| Method | Endpoint      | Description                  |
|--------|---------------|------------------------------|
| POST   | `/users`      | Create a new user            |
| GET    | `/users`      | Retrieve all users (cached)  |


### Products
| Method | Endpoint        | Description                    |
|--------|-----------------|--------------------------------|
| POST   | `/products`     | Create a new product           |
| GET    | `/products`     | Retrieve all products (cached) |


---

## 💡 **How Redis is Used**
1. **Caching**: API responses are cached in Redis to reduce database load and improve performance.
2. **Expiration**: Cached data expires after a set period (e.g., 60 seconds) to keep it fresh.
3. **Invalidation**: Cache is cleared (invalidated) when data changes (e.g., delete operations).

---

## 📦 **Folder Structure**
```
express-mongo-redis-crud/
├── .env
├── app.js
├── models/
│   ├── Product.js
├── config/
│   └── db.js
├── routes/
│   ├── productRoutes.js
├── controllers/
│   ├── productController.js
└── package.json
```

---

## 🧪 **Testing**
- Use Postman or `curl` to interact with the API.
- Example request:
  ```bash
  curl -X POST http://localhost:3000/users   -H "Content-Type: application/json"   -d '{"name": "John Doe", "email": "john@example.com", "age": 30}'
  ```

---

## 🙌 **Contributing**
Feel free to fork this repository and submit pull requests. Let's help more people learn about using Redis with MongoDB!

---

## 📝 **License**
This project is open-source and available under the [MIT License](LICENSE).
