import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteAll, deleteTask } from '../../Services/taskActions';

function ButtonCustomized({ title, color, action, id }) {
    const navigate = useNavigate()
    function handleAction() {
        switch (action) {
            case "Delete":
                deleteTask(id)
                break;
            case "DeleteAll":
                deleteAll()
                break;
            case "Edit":
                navigate(`/mytasks/edit/${id}`)
                break;
            default:
                console.log(action)
                navigate("/mytasks/create")
                break;
        }
    }
    return (
        <>
            <Button size='small' color={color || "success"} variant="contained" onClick={handleAction}>
                {title || "Create new task"}
            </Button>
        </>
    )
}

export default ButtonCustomized