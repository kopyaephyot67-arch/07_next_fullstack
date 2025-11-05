const mysql =require ('mysql2');
export const mysqlPool = mysql.createPool({
    host:'localhost',
    user:'u6703451',
    password:'6703451',
    database:'u6703451_dit205'
});