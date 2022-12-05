const mysql = require("mysql");
const con= mysql.createConnection({
    host: "housethat.in",
    user: "u901480788_tool",
    password: "Abcd@321",
    database: "u901480788_compare",
});

con.connect((err)=>{
    if(err)
    {
        console.warn("error in connection")
    }
});

module.exports =con;
