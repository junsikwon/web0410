var express = require('express');
var app = express();
var _ = require('underscore');
 var bodyParser = require('body-parser');

 app.use(bodyParser.json()); // support json encoded bodies
 app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => {
  res.charset = 'UTF-8';
  console.log(req.query);
  res.send('GET으로 넘어온 name은 '+ req.query.name + '입니다.');
} );
app.get('/rowcol', (req, res) => {
  res.charset = 'UTF-8';
  var checkbox = '<input type ="checkbox">';
  var col = req.query.col;
  var row = req.query.col;

  var string = '';
  string +='<form>'
  for(var i =0;i<col;i++){
  string += checkbox;
}

  for(var i =0;i<row;i++){
  result += string;
}

  res.send(result);
} );
//tempLate
app.get('/template', (req, res) => {
  res.charset = 'UTF-8';
  var tp1 = _.template(
    '<h1>안녕하세요? 제 이름은 <%=name%>이고 나이는 <%=age%>에요.</h1>'
  )
  var obj = {name :"홍길동",age:300};
  res.send(tp1(obj));
} );
app.post('/', (req, res) => {
  res.charset = 'UTF-8';
  res.send('POST로 넘어온 name은 '+ req.body.name + '입니다.');
} );


app.listen(8080, () => console.log('Example app listening on port 8080!'));
