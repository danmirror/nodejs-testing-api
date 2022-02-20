/*
 *   Router custommer
 *
 */


const router = require("express").Router();
const customerController = require("../controllers/customerController");

router.get("/api/", customerController.viewCustomer); 
router.post("/api/", customerController.addCustomer);
router.put("/api/",customerController.editCustomer);
router.delete("/api/", customerController.deleteCustomer);


module.exports = router;