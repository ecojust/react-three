const location = window.location;

const origin = location.origin;  
const pathname = location.pathname; 
const hash = location.hash;   
const href = location.href;
const path = hash.split('#')[1];

//路由参数格式化为对象
const queryStr = path.split('?')[1];
var queryObject = {}; 
if(queryStr){
	const queryArray = queryStr.split('&');
	queryArray.map((item)=>{
		var arr = item.split('=');
		queryObject[arr[0]] = arr[1];
		return item;
	})
}

//判断是不是对象并跳转
const push = (obj)=>{
	var to = origin + pathname +'#'; 
	console.log(obj.toString())
	if(Object.prototype.toString.call(obj) !== '[object Object]'){
		console.error('非法参数(不是一个对象)');
		return;
	}else{
		const topath = obj.path,query = obj.query;
		if(query&&Object.prototype.toString.call(query) !== '[object Object]'){
			console.error('非法参数(query不是一个对象)');
			return;
		}
		var queryString = '';
		var ask = '';
		for (var key in query) {
			ask = '?';
			queryString += key + '=' + query[key] + '&';
		}
		queryString = queryString.substr(0,queryString.length-1);
		window.location.href = to + topath + ask + queryString;
	}
}

//浏览器url_history
const history = window.history;

const $route = {
	href:href,
	path:path,
	query:queryObject,
	push:push,
	back:history.back
}

export default $route;