import React from 'react'
import './App.css';
import Form from "./components/Form"
import Table from "./components/Table"

function App() {
  const usersInit=[
    {
      name:'hakki',
      email:'hakki@email.com'
    },
    {
      name:'soufiane',
      email:'soufiane@email.com'
    },
    {
      name:'widad',
      email:'widad@email.com'
    },
  ]
  //state
  const [users, setUsers]=React.useState(usersInit);
  const [isEdit,setIsEdit]=React.useState(false)
  const [editedUser, setEditedUser]= React.useState({
    name:'',
    email:''
  })
  const [indexEditedUser, setIndexEditedUser]= React.useState(0)

  const addUser=(user)=>{
    setUsers([
      ...users,
      user
    ])
  }

  const removeUser=(index)=>{
    console.log(index);
    setUsers(users.filter(
              (item)=>(users.indexOf(item)!==index)
              )
            )
  }

  const editUser=(user,index)=>{
    console.log(user);
    setIndexEditedUser(index);
    setEditedUser(user);
    setIsEdit(true)
  }

  const updateUser=(user,index)=>{
    // let updateUser=setUsers(
    //   users.filter((item)=>users.indexOf(item)==index)
    // );
    // updateUser=user;
    
    // setUsers([
    //   ...users.filter((item)=>users.indexOf(item)!==index),
    //   updateUser
    // ])
    const updateArray=users.map((item)=>(users.indexOf(item)==index?user:item));
    setUsers(
      updateArray  
    )
  }

  const adding=(e)=>{
    console.log('adding');
    setIsEdit(false);
  }

  return (
    <div className="App container">
        <Form 
          addUser={addUser} 
          isEdit={isEdit} 
          adding={adding}
          editedUser={editedUser} 
          setEditedUser={setEditedUser} 
          updateUser={updateUser}           
          indexEditedUser={indexEditedUser}
        />
        <hr />
        <Table 
          users={users} 
          removeUser={removeUser} 
          editUser={editUser}
        />
    </div>
  );
}

export default App;
