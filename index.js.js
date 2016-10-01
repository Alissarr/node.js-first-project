var http = require('http');

var port=8080;

var state=10;

var server=http.createServer((function(request,response){
	

	if (request.url==='/' || request.url==='/state' || request.url==='/reset'){
	console.log('The current state is '+ state);
	response.setHeader('content-type', 'text/html');
	response.write('<h1>The State is:'+state+'</h1>');
	response.end();
	
	} else if (request.url==='/add'){
    console.log('The current state is '+ (state+1));
	response.write('<h1> the State is:'+ (state+1) +'</h1>');
	response.end();
	}
	else if(request.url==='/remove'){
		console.log('The current state is '+ (state-1));
	response.write('<h1>the State is:'+ (state-1) +'</h1>');
	response.end();
	}
	
	else{
		
	response.write(' page is not found');
	response.end();
	
	}
});

server.listen(port, function(error){
	if(error){
		console.log(error);
	}else{console.log('listing on port',port);}
});