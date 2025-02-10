/* MongoDB Assignment */

// 1. Setup MongoDB
// verify installation
mongo --version

// run 
mongosh

// 2. Database and Collection Creation
use library; 
db.createCollection("books");

// 3. Insert Data
library> db.books.insertMany([
{
    _id: ObjectId('67a74fcb2e6f3ba1884d7942'),
    title: 'The hobbit',
    author: 'J.R.R Tolkien',
    publisherYear: 1937,
    genre: 'Fantasy',
    ISBN: '978-0-06-112008-4'
},
{
    _id: ObjectId('67a74fcb2e6f3ba1884d7943'),
    title: 'The well',
    author: ' Gearge Maten',
    publisherYear: 2024,
    genre: 'action',
    ISBN: '2323-324-34232-424'
},
{
    _id: ObjectId('67a74fcb2e6f3ba1884d7944'),
    title: 'The 5th wave',
    author: 'Rick Yancey',
    publishedYear: 2013,
    genre: 'Science Fiction',
    ISBN: '978-0-06-112008-40'
},
{
    _id: ObjectId('67a74fcb2e6f3ba1884d7945'),
    title: 'Dolls House',
    author: 'Henrik Ibsen',
    publishedYear: 1989,
    genre: 'Marriage',
    ISBN: '644-4532-35454-343'
},
{
    _id: ObjectId('67a757db2e6f3ba1884d7947'),
    title: 'Chozi la kheri',
    author: 'Ken walibora',
    PublishedYear: 2012,
    genre: 'Fiction',
    ISBN: '53453- 4546 -34534-2214'
}
]);
// 4. Retrieve Data
db.books.find();
db.books.find({ author: "Henrik Ibsen" });
db.books.find({ publishedYear: { $gt: 2000 } });

// 5. Update Data
db.books.updateOne(
    { title: "Dolls House" },
    { $set: { publishedYear: 1879 } }
);

db.books.updateMany(
    {},
    { $set: { rating: 4.5 } }
);

// 6. Delete Data
db.books.deleteOne({ ISBN: "978-0-06-112008-4" });
db.books.deleteMany({ genre: "Fiction" });

// 7. Data Modeling for an E-Commerce Platform
// Collections: users, orders, products
use ecommerce;
db.createCollection("users");
db.createCollection("orders");
db.createCollection("products");

// Users Collection
db.users.insetMany([ 
    { userId: 1,
    name: "mark", 
    email: "marklewis@gmail.com", 
    telno: +254743423232
    },
    {
    userId: 2,
    name: "gideon",
    email: "gideon@gmail.com",
    telno: +254742323989
    },
    {
    userid: 3,
    name: "juliet",
    email:"juiet@gmail.com",
    telno: +254749894392
    }
    ]);

// Products Collection Sample Data
db.products.insertOne(
    {
    _id: ObjectId(),
    name: "smart TV",
    category: "Electronics",
    price: 1200,
    stock: 10
    },
    {
    _id: ObjectId(),
    name: "Laptop",
    category: "Electronics",
    price: 800,
    stock: 20
    },
    {
    _id: ObjectId(),
    name: "Headphones",
    category: "Electronics",
    price: 100,
    stock: 50
    }
    );

// Orders Collection Sample Data
db.orders.insertMany([
        {
            orderId: 1,
            userId: 1,
            products: [
            { productId: 1, quantity: 1 },
            { productId: 2, quantity: 2 }
            ],
            orderDate: new Date("2025-05-02"),
            status: "Shipped"
            },
            {
            orderId: 2,
            userId: 2,
            products: [
            { productId: 2, quantity: 1 }
            ],
            orderDate: new Date("2025-06-02"),
            status: "Processing"
            }
        ]);

// 8. Aggregation Pipeline
// Total number of books per genre
db.books.aggregate([
{ $group: { _id: "$genre", totalBooks: { $sum: 1 } } }
]);

// Average published year of all books
db.books.aggregate([
  { $group: { _id: null, averagePublishedYear: { $avg: "$publishedYear" } } }
]);

// Identify the top-rated book
db.books.aggregate([
  { $sort: { rating: -1 } },
  { $limit: 1 }
]);

// 9. Indexing
db.books.createIndex({ author: 1 });

/*
Indexing Benefits:
- Improved Query Performance: Allows faster searches.
- Efficient Sorting: Helps optimize sorting operations.
- Reduced Resource Consumption: Less CPU and memory usage.
- Enhanced Scalability: Beneficial for read-heavy applications.
*/