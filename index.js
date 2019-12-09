// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "3000";

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.render("index", { title: "Login" });
});

app.get("/user", (req, res) => {
    if(!req.query.userid){
        res.redirect('/');
    }else{
        res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
    }
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});