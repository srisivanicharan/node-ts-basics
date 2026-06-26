import test from 'tape';
import {getUsers,addUser,deleteUser,resetUsers} from '../services/userService.js';
//import { get } from 'node:http';

resetUsers();
test('testing getusers count',(t)=>{
    t.equal(getUsers().length,2);
    t.end();
})

resetUsers();
test('testing getusers members',(t)=>{
    t.equal( getUsers()[0]?.name,"ABC");
    t.equal( getUsers()[0]?.age,20);
    t.equal( getUsers()[1]?.name,"DEF");
    t.equal( getUsers()[1]?.age,25);    
    t.end();
})

resetUsers();
test('testing addusers length',(t)=>{
    const curr=getUsers().length;
    t.equal(addUser({name:"GHI",age:30}).length,curr+1);
    t.end();
})

resetUsers();
test('testing addusers members',(t)=>{
    t.equal( getUsers()[0]?.name,"ABC");
    t.equal( getUsers()[0]?.age,20);
    t.equal( getUsers()[1]?.name,"DEF");
    t.equal( getUsers()[1]?.age,25);  
    t.equal( getUsers()[2]?.name,"GHI");
    t.equal( getUsers()[2]?.age,30);     
    t.end();
})

resetUsers();
test('testing an existing user deletion count',(t)=>{
    const curr = getUsers().length;
    t.equal(deleteUser("ABC")?.length,curr-1);
    t.end();
})

resetUsers();
test('testing deletion of a non-existing user',(t)=>{
    t.equal(deleteUser("XYZ"),null);
    t.end();
})

resetUsers();
test('testing getusers count is 5',(t)=>{
    t.equal(getUsers().length,5);
    t.end();
})