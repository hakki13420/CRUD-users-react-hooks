import React from "react";

function Form(props){
    const [userAdd, setUserAdd]=React.useState({
        name:'',
        email:''
    })

    const formSubmit=(e)=>{
        e.preventDefault();
        console.log(props.indexEditedUser);
        props.isEdit?
        props.updateUser(props.editedUser,props.indexEditedUser)
        :props.addUser(userAdd);        
        e.target.reset();
    }

    return(        
        <div className="card mt-3">
            <div className="card-header">
                <h4>Gestion des utilisateurs</h4>
                {
                    props.isEdit?
                    (<button                         
                        className="btn btn-success float-end"
                        onClick={(e)=>props.adding(e)}                         
                    >
                    Add user
                    </button>
                    )
                    :''
                }
                
            </div>
            <div className="card-body">
                <form onSubmit={formSubmit} className="form">
                    <div className="group-form my-2">
                        <input  type="text" 
                                className="form-control" 
                                name="name"                                
                                placeholder="type the name"
                                value={props.isEdit?props.editedUser.name:userAdd.name}
                                onChange={props.isEdit?
                                          (e)=>(props.setEditedUser({...props.editedUser,name:e.target.value}))
                                          :(e)=>(setUserAdd({...userAdd,name:e.target.value}))
                                          }
                        />
                    </div>
                    <div className="group-form my-2">
                        <input  type="email" 
                                className="form-control"                                 
                                name="email"               
                                placeholder="type the email"                 
                                value={props.isEdit?props.editedUser.email:userAdd.email}                                
                                onChange={props.isEdit?
                                          (e)=>(props.setEditedUser({...props.editedUser,email:e.target.value}))
                                          :(e)=>(setUserAdd({...userAdd,email:e.target.value}))
                                          }
                        />
                    </div>
                    <div className="group-form">
                        {props.isEdit?
                            (<button type='submit' className="btn btn-primary float-end">Update</button>)
                            :(<button type='submit' className="btn btn-primary float-end">Create</button>)
                        }
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;