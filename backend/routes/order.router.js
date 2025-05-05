// routes/order.router.js
const router = express.Router();

router.get("/", getOrders);
router.post("/", createOrder);

module.exports = router;