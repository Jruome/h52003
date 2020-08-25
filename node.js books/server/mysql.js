var mysql=require('mysql');


function table(res){
  var conn = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'h52003'
  });
  
  var sql="SELECT * FROM book";
  
  conn.query(sql, function (error, results) {
    res.end(JSON.stringify(results));
  });
  conn.end()
}

function insert(res,arr){
  var conn = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'h52003'
  });
  var sql="INSERT INTO book VALUES(0,?,?,?,?,?,?)";
	conn.query(sql,arr,function (error, results) {
  		res.end("<script>location='/'</script>");
	});
	conn.end();
}

function id(res,arr){
  var conn = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'h52003'
  });
  var sql="SELECT * FROM book WHERE id=?";
	conn.query(sql,arr,function (error, results) {
  		res.end(JSON.stringify(results));
	});
	conn.end();
}

function xg(res,arr){
  var conn = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'h52003'
  });
  var sql="UPDATE book SET name=?,author=?,price=?,number=?,introduce=?,content=? WHERE id=?";
	conn.query(sql,arr,function (error, results) {
  		res.end("<script>location='/'</script>");
	});
	conn.end();
}

function sc(res,arr){
  var conn = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'h52003'
  });
  var sql="DELETE FROM book WHERE id=?";
  conn.query(sql,arr,function (error, results) {
    res.end("<script>location='/'</script>");
});
conn.end();
}

function zc(res,arr){
  var conn= mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'h52003'
});	
var sql=`INSERT INTO uses VALUES(0,?,?,?)`;
conn.query(sql,arr,function (error, results) {
    res.end("<script>location='/'</script>");
});
conn.end();
}

function yz(res){
  var conn = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'h52003'
  });
  var sql="SELECT name,pwd,email FROM uses";
  conn.query(sql, function (error, results) {
    res.end(JSON.stringify(results));
});
  conn.end()
}



module.exports={
	"table":table,
  "insert":insert,
  "id":id,
  "xg":xg,
  "zc":zc,
  "yz":yz,
  "sc":sc,

}