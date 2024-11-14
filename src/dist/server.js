"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var db_1 = require("./config/db");
var blogRoutes_1 = require("./routes/blogRoutes");
var adminRoutes_1 = require("./routes/adminRoutes");
var errorMiddleware_1 = require("./middlewares/errorMiddleware");
db_1["default"]();
// Create Express app
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(cors_1["default"]());
app.use(body_parser_1["default"].json());
// Use blog routes
app.use("/api/blogs", blogRoutes_1["default"]);
app.use("/admin/", adminRoutes_1["default"]);
app.use(errorMiddleware_1["default"].notFound);
app.use(errorMiddleware_1["default"].errorHandler);
var PORT = process.env.PORT || 3001;
// Start the server
app.listen(PORT, function () {
    console.log("Server is running on port " + PORT);
});
