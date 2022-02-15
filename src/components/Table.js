import React from "react"

function Table(props){

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map((item, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <button 
                                    className="btn btn-primary me-1"
                                    onClick={()=>props.editUser(item,index)}
                                >
                                    edit
                                </button>
                                <button 
                                    className="btn btn-danger"
                                    onClick={()=>props.removeUser(index)}
                                >
                                &times;
                                </button>
                            </td>
                        </tr>
                    ))
                }                
            </tbody>
        </table>
    )
}

export default Table;