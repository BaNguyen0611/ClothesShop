var express = require("express");
const router = express.Router();
const { addOrder, getOrders, getOrder, updateStatus, deleteMany, thongke, getOrdersByUserId, thongkeDoanhThu } = require("../controllers/orderController");
const { verifyToken, checkAdmin } = require("../middleware/authMiddleware");
// Create
router.post("/", verifyToken, addOrder);
/* READ */
router.get("/", verifyToken, getOrders);
// /order/user/${userId}\
router.get("/user/:userId", getOrdersByUserId);

router.get("/thongke/doanhso", thongkeDoanhThu);
router.get("/thongke/:productId", checkAdmin, thongke);
/* UPDATE */
router.patch("/updatestatus", checkAdmin, updateStatus);
// Delete
router.delete("/deletemany", checkAdmin, deleteMany);

router.get("/:id", verifyToken, getOrder);
module.exports = router;
