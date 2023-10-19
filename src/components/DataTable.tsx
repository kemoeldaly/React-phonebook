import React, { useState} from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';

function DataTable() {
  let [ open, setOpen ] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const getData = () => {
    console.log(server_calls.get());
    
  }

  return (
    <>
      
      <Modal 
          open={open} 
          onClose={handleClose}
          />
      <div className='flex flex-row'>
          <div>
            <button className='p-3 bg-slate-300 m-3 rounded hover:bg-sl-800 hover:text-white' onClick={() => handleOpen()}>Create New Contact</button>
          </div>
          
          <Button className='p-3 bg-slate-300 m-3 rounded hover:bg-sl-800 hover:text-white'>Update</Button>
          <Button className='p-3 bg-slate-300 m-3 rounded hover:bg-sl-800 hover:text-white'>Delete</Button>
      </div>
      {/*Data Table section*/}
      <button onClick={getData}>get data</button>
     

    </>
  )
}

export default DataTable