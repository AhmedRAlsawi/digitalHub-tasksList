import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import * as yup from "yup";
import { TASK_STATUS } from '../../Constansts/Constants';
import { createTask, editTask, findTask } from '../../Services/taskActions';
import styles from "./TaskForm.module.css";


function TaskForm() {

    const { pathname } = useLocation()
    const { id } = useParams()
    const [foundTask] = useState(findTask(id))
    const yupValidationSchema = yup.object({
        title: yup.string().required("Task title is required").min(3, "Min chars are 3 ").max(25, "Max chars are 25 "),
        description: yup.string().required("Task description is required").min(10, "Min chars are 10 ").max(100, "Max chars are 100 "),
        state: yup.string().required("Task state is required"),
        id: yup.string().required("Id must be unique")
    })

    const formik = useFormik({
        initialValues: {
            title: foundTask?.title || "",
            description: foundTask?.description || "",
            state: foundTask?.state || "",
            id: foundTask?.id || Date.now()
        },
        validationSchema: yupValidationSchema,
        onSubmit: (values, actions) => {
            if (pathname.includes('create')) createTask(values)
            else editTask(id, values)
        }
    })

    return (
        <>
            <h3>Create a new task</h3>
            <form onSubmit={formik.handleSubmit} className={styles.formAlign}>
                <TextField
                    fullWidth
                    size='small'
                    id="outlined-required"
                    label="Title"
                    name='title'
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    helperText={formik.touched.title && formik.errors.title}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                />
                <TextField
                    fullWidth
                    size='small'
                    id="outlined-required"
                    label="Description"
                    name='description'
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    helperText={formik.touched.description && formik.errors.description}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                />
                <FormControl
                    fullWidth size='small' error={formik.touched.state && Boolean(formik.errors.state)}>
                    <InputLabel id="demo-simple-select-error-label">State</InputLabel>
                    <Select
                        labelId="demo-simple-select-error-label"
                        id="demo-simple-select-error"
                        value={formik.values.state}
                        label="State"
                        name='state'
                        onChange={formik.handleChange}
                        renderValue={(value) => value}

                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {TASK_STATUS.map((ele, index) =>
                            <MenuItem key={index} value={ele}>{ele}</MenuItem>
                        )}
                    </Select>
                    {formik.touched.state && formik.errors.state && <FormHelperText >{formik.errors.state}</FormHelperText>}
                </FormControl>

                <Button type='submit' color='success' variant='contained'>Submit</Button>
            </form>

        </>
    )
}

export default TaskForm