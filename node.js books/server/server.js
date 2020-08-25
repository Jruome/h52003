const http=require("http");
const url=require("url");
const fs=require("fs");
const fz=require("./mysql");
const { id } = require("./mysql");
var app=http.createServer();
app.listen(8008);
app.on("request",(req,res)=>{
	var obj=url.parse(req.url,true);
	if(obj.pathname=="/" || obj.pathname=="/index"){
		fs.readFile("./public/html/index.html",(err,buf)=>{
			res.end(buf);
		})
	}else if(obj.pathname.indexOf(".html")!=-1 || obj.pathname.indexOf(".css")!=-1 || obj.pathname.indexOf(".js")!=-1){
		fs.readFile(`./public${obj.pathname}`,(err,buf)=>{
			res.end(buf);	
		})
	}else if(obj.pathname=="/table"){
		fz.table(res)
	}else if(obj.pathname=="/insert" ){
		var arr=[];
		for(var i in obj.query){
			arr.push(obj.query[i]);
		}
		fz.insert(res,arr);
	}else if(obj.pathname=="/id"){
		var arr=[obj.query.id];
		fz.id(res,arr);
	}else if(obj.pathname=="/update"){
		var arr=[];
		for(var i in obj.query){
			arr.push(obj.query[i]);
		}
		arr.push(arr.shift());
		fz.xg(res,arr);
	}else if(obj.pathname=="/del"){
		var arr=[obj.query.id];
		fz.sc(res,arr)
	}else if(obj.pathname=="/tj"){
		var arr=[];
		for(var i in obj.query){
			arr.push(obj.query[i]);
		}
		fz.zc(res,arr);
	}else if(obj.pathname=="/user" || obj.pathname=="/dl"){
		fz.yz(res)
	}
})