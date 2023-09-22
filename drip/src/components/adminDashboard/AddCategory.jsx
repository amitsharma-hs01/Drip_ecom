import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from "../../context/authContext.js"

function AddCategory() {
  const [categories, setCategories] = useState([])
  const [auth] = useAuth();
  const [name, setName] = useState();
  const [updateRef, setUpdateRef] = useState()
  const [updateName,setUpdateName]=useState()

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/category/get-all")
      console.log(data)
      if (data.success) {
        setCategories(data.categories)
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong")
    }
  }

  const deleteCategory = async (id) => {
    try {
      const { email } = auth.user
      const { data } = await axios.delete(`http://localhost:8000/api/v1/category/delete-one/${id}`, {
        data: { email }
      })
      if (data.success) {
        toast.success(data.message)
      }
      else {
        toast.error(data.message)
      }
      getAllCategories();
    } catch (error) {
      console.log(error)
      toast.error("error while deleting")
    }

  }

  const createCategory = async () => {
    try {
      const { email } = auth.user
      const { data } = await axios.post("http://localhost:8000/api/v1/category/create-category", { email, name })
      if (data.success) {
        toast.success(data.message)
      }
      getAllCategories();
    } catch (error) {
      toast.error("error while creating")
      console.log(error)
    }
  }

  const updateCategory=async()=>{
    try {
      const {email}=auth.user;
      const {data}=await axios.put(`http://localhost:8000/api/v1/category/update-category/${updateRef}`,{email,name:updateName})
      if(data.success){
        toast.success(data.message)
      }
      setUpdateRef();
      setUpdateName();
      getAllCategories();
    } catch (error) {
      toast.error("error while updating")
      console.log(error)
    }
   
  }

  useEffect(() => {
    getAllCategories();
  }, [])
  return (
    <div className='AddCategoryCont'>
      <input className='createForm' type='text' onChange={(e) => {
        setName(e.target.value)
      }} value={name} />
      <button onClick={createCategory}>create</button>
      <div className="categories">
        <h1>Categories</h1>
        <div className="Categories-list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(c => {
                return (
                  <tr key={c._id}>
                    {updateRef !== c._id && <>
                      <td>
                        {c.name}
                      </td>
                      <td>
                        <button onClick={() => {
                          setUpdateRef(c._id)
                          setUpdateName(c.name)
                        }}>update</button>
                      </td>
                      </>
                    }
                    {
                      updateRef===c._id&&<>
                        <td>
                          <input type="text" value={updateName} onChange={(e)=>{
                            setUpdateName(e.target.value)
                          }} />
                        </td>
                        <td>
                          <button onClick={updateCategory}>Done</button>
                        </td>
                      </>
                    }
                    <td>
                      <button id={c._id} onClick={(e) => {
                        console.log(e.target.id)
                        deleteCategory(e.target.id)
                      }}>
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AddCategory