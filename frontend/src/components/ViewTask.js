import React from "react";
import TaskCard from "./TaskCard";

const ViewTask = ()=>{

    const task = [
        {
            id:"2",
            title:"dfdsfdsfdsf",
            status:"Complated",
            dateAndTime:'2024/01/02 11:10 PM'
        },
        {
            id:"10",
            title:"dfdddddddddddddddddddddddddddddd",
            status:"Pending",
            dateAndTime:'2024/01/02 11:10 PM'
        },
        {
            id:"5",
            title:"dfdsfqwwwwwwwwwwwwwwwwwwwwwwwwwwwwdsfdsf",
            status:"Deleted",
            dateAndTime:'2024/01/02 11:10 PM'
        },
    ]


    return(
        <div>
            <h2 className="text-center my-3">View Task </h2>
            {
                task.length > 0 ?
                task.map((item , key)=>
                    <TaskCard key={key} task={item}/>

                ):<h1 className="text-center text-danger" style={{border:'1px solid black', padding:'10px' , borderRadius:'8px'}}>No Task</h1>
            }
        </div>
    )
}

export default ViewTask