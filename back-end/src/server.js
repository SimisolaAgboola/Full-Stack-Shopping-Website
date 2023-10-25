import express from 'express';
import {MongoClient} from 'mongodb';
import path from 'path';

async function start() {
    const url = `mongodb+srv://simisola1:simisola@cluster0.weuicif.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`
    const client = new MongoClient(url);

    await client.connect();
    const db = client.db('fsv-db');

    const app = express();
    //lets us use the 'body' parameter
    app.use(express.json());

    app.use('/images', express.static(path.join(__dirname, '../assets')));

    //3 endpoints:
    //loading the products
    app.get('/api/products', async (req, res) => {
        const products = await db.collection('products').find({}).toArray();
        res.send(products);
    });

    async function populateCartIds(ids){
        return Promise.all(ids.map(id => db.collection('products').findOne({id})));
    }

    //loading shopping cart
    app.get('/api/users/:userId/cart', async (req, res) => {
        const user = await db.collection('users').findOne({id: req.params.userId}); 
        const populatedCart = await populateCartIds(user?.cartItems || []);
        res.json(populatedCart);
    });

    //loading individual products
    app.get('/api/products/:productId', async(req, res) => {
        const productId = req.params.productId;
        const product = await db.collection('products').findOne({ id : productId });
        res.json(product);
    });

    //adding an item to cart
    app.post('/api/users/:userId/cart', async (req, res) => {
        const userId = req.params.userId;
        const productId = req.body.id;

        const existingUser = await db.collection('users').findOne({ id: userId })
        if (!existingUser) {
            await db.collection('users').insertOne({ id: userId, cartItems: [] });
        }

        await db.collection('users').updateOne({id: userId}, {
            $addToSet: { cartItems: productId }
        });
        
        const user = await db.collection('users').findOne({ id: req.params.userId }); 
        const populatedCart = await populateCartIds(user?.cartItems || []);
        res.json(populatedCart);
    });

    //removing an item from cart
    app.delete('/api/users/:userId/cart/:productId', async (req, res) => {
        const userId = req.params.userId;
        const productId = req.params.productId;

        await db.collection('users').updateOne({ id:userId }, {
            $pull: { cartItems: productId },
        });

        const user = await db.collection('users').findOne({ id: req.params.userId }); 
        const populatedCart = await populateCartIds(user?.cartItems || []);
        res.json(populatedCart);
    });

    app.listen(8000, ()=> {
        console.log('server is listening on port 8000')
    });
}

start();
