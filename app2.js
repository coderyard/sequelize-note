const morgan = require('morgan');
const models = require('./models');

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res, next)=>{
  // models.newMember.findAll()
  //   .then((mem)=>{
  //     res.send(mem);
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //     next(err);
  //   });

  res.sendFile(__dirname + '/index.html');
});

app.get('/members', (req, res)=>{
  res.sendFile(__dirname + '/member.html');
});

app.post('/members', (req, res)=>{
  let body = req.body;

  models.newMember.create({
    email: body.email,
    age: body.age,
    name: body.name,
  }).then(result =>{
    console.log('member created!!!');
    res.redirect('/members');
  }).catch((err)=>{
    console.log(err);
  })
})

app.get('/todos', (req, res)=>{
  res.sendFile(__dirname + '/todos.html');
});

app.post('/todos/:id', (req, res)=>{
  let body = req.body;
  let id = req.params.id;

  models.newTodo.create({
    content: body,
    
  }).then((result)=>{
    console.log('todo create!!');
    res.redirect('/todos');
  })
})

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'), 'port server running..');
})
