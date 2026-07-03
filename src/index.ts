import express from 'express';
import router from './routes/users.js';
const app = express();
app.disable('x-powered-by');
const port = 3000;
// interface User{
//     name:string;
//     age:number;
// }
// const users: User[]=[{name:"ABC",age:20},{name:"DEF",age:25}];
app.use(express.json());
 app.get('/',(req,res)=>{res.json({message:"Hello World"});});
 app.get('/health',(req,res)=>{res.json({status:"ok",uptime:process.uptime()});});
// app.get('/users',(req,res)=>{res.json(users);});
// app.post('/users',(req,res)=>{users.push(req.body);res.json(users);});
// app.delete('/users/:name',(req,res)=>{const index=users.findIndex((user)=>{return user.name==req.params.name});                                
//                                       if(index===-1)
//                                       {
//                                         res.status(404).json({ message: "User not found" })
//                                       }
//                                       else
//                                       {
//                                         users.splice(index,1);
//                                         res.json(users);
//                                       }
//                                       });
app.use('/users',router);
app.listen(port,()=>{console.log(`Server started on port ${port}`)});
// interface User{
//     name:string;
//     age:number;
// }

// function displayUser(user:User)
// {
//     return `Hello ${user.name}. You are ${user.age} years old.`;
// };

// console.log(displayUser({name:"ABC",age:20}));
