import { getDb } from '../index.js';
import { ObjectId } from 'mongodb';

const getOrdersColelction = () => {
    return getDb().collection('orders');
}

//CREATE 
export const createOrder = async (req, res) => {
    const {
        userId,
        address,
        phone,
        note,
        products,
        total
    } = req.body;
    try {
        await getFoodsColelction().insertOne({
            userId: userId,
            address: address,
            phone: phone,
            note: note,
            products: products,
            total: total,
            isDelivered: false
        });
        res.status(201).json({ msg: 'Created successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
};

//READ
export const getOrder = async (req, res) => {
    try {
        const order = await getOrdersColelction().findOne(
            {
                _id : new ObjectId(req.params.id)
            }
        )
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
};

//READ ALL ORDERS
export const getAllOrders = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const orders = await getOrdersColelction().find().toArray();
            res.status(200).json(orders);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' })
    }
};

//READ ORDER BY USER ID
export const getOrderByUserId = async (req, res) => {
    try {
        const orders = await getOrdersColelction().find(
            {
                userId: req.params.id
            }
        ).toArray();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
};

//UPDATE
export const updateOrder = async (req, res) => {
    if (req.user.isAdmin) {
        const {
            address,
            phone,
            note,
            isDelivered
        } = req.body;
        try {
            await getOrdersColelction().updateOne(
                {
                    _id: new ObjectId(req.params.id)
                },
                {
                    $set: {
                        address: address,
                        phone: phone,
                        note: note,
                        isDelivered: isDelivered
                    }
                }
            );
            res.status(200).json({ msg: "Updated successfully" });
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' })
    }
};

//DELETE  
export const deleteOrder = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await getOrdersColelction().deleteOne(
                {
                    _id: new ObjectId(req.params.id)
                }
            );
            res.status(200).json({ msg: "Deleted successfully" })
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' });
    }
};