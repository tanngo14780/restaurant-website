import express from 'express';
import { createOrder, getAllOrders, getOrder, getOrderByUserId, updateOrder, deleteOrder } from '../controllers/orders.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

//CREATE
router.post('/', verifyToken, createOrder);
 
//READ 
router.get('/:id', getOrder);
router.get('/', verifyToken, getAllOrders);
router.get('/user/:id', getOrderByUserId);

//UPDATE
router.put('/:id', updateOrder);

//DELETE
router.delete('/:id', deleteOrder);

export default router;