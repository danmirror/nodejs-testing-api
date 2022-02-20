/*
 *   main controller for API
 *
 */

const Customer = require("../models/Customer");

module.exports = {
     viewCustomer: async (req, res) => {
         /*
        *   allow acces
        */
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);

        // console.log("get");

        try {
           
            const customer = await Customer.find();
            res.json(customer);
            
        } catch (error) {
            
            res.json({
                "status":"gagal"}
                );
        }
    },

   addCustomer: async (req, res) => {
        /*
        *   allow acces
        */
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);

        // console.log(req.body);

        try {
            const { username, email, city, no } = req.body;
            await Customer.create({ username, email, city, no });
            res.json({
                "status":"done"}
                );
        } catch (error) {
            res.json({
                "status":"gagal"}
                );
        }
    },

    editCustomer: async (req, res) => {
        /*
        *   allow acces
        */
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);

        // console.log(req.body);

        try {
            const {id, username, email, city, no } = req.body;
            const customer = await Customer.findOne({ _id: id });

            customer.username = username;
            customer.email = email;
            customer.city = city;
            customer.no = no;
            await customer.save();

        } catch (error) {
            res.json({
                "status":"gagal"}
                );
        }
    },

    deleteCustomer: async (req, res) => {
        /*
        *   allow acces
        */
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);

        // console.log(req.body);
        try {
            const { id } = req.body;
            const customer = await Customer.findOne({ _id: id });
            await customer.remove();
            res.json({
                "status":"data berhasil dihapus"}
                );
        } catch (error) {
            res.json({
                "status":"gagal"}
                );
        }
    },
};