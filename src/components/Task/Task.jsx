import React, { useState } from 'react'
import ButtonCustomized from '../ButtonCustomized/ButtonCustomized'
import { CURRENT_TASKS } from '../../Constansts/Constants'
import { Outlet, useLocation } from 'react-router-dom'

function Task() {
  //eslint-disable-next-line
  const { pathname } = useLocation()
  const [tasks] = useState(CURRENT_TASKS)
  return (
    <main className='container my-1'>
      <section className='d-flex flex-wrap mb-2 justify-content-between'>

        {tasks.length !== 0 ?
          tasks.map((ele, index) =>
            <div key={index} className="card col-md-5 mt-2 col-12" >
              <div className="card-body">
                <h5 className="card-title">{ele.title}</h5>
                <h6 className={`card-subtitle mb-2 
                ${ele.state === "Not Started" ? "text-danger" : ele.state === "In Progress" ? "text-warning" : "text-success"}`}>{ele.state}</h6>
                <p className="card-text">{ele.description}</p>
              </div>
              <div className='d-flex gap-3 justify-content-around mb-2'>
                <ButtonCustomized title="Edit Task" color="warning" action="Edit" id={ele.id} />
                <ButtonCustomized title="Delete Task" color="error" action="Delete" id={ele.id} />
              </div>
            </div >
          )
          : (
            <div className='w-100'>
              <h4>No Tasks Yet</h4>
            </div>
          )
        }
      </section>
      <section className='w-75 mx-auto d-flex justify-content-around'>
        {pathname.includes("create") || pathname.includes("edit") ? null : <ButtonCustomized action="Create" />}
        {CURRENT_TASKS.length === 0 ? null : <ButtonCustomized action="DeleteAll" color="error" title='Delete All' />}
      </section>
      <Outlet />
    </main>
  )
}

export default Task