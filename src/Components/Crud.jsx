import React, { useState } from 'react';
import axios from 'axios';
import useFetch from './useFetch';

export default function Crud() {

    const API = 'https://66e27871494df9a478e1d602.mockapi.io/AsyncAwait';

    const [formData, setFormData] = useState({
        Name:"",
        Email:'',
        Phone:''
    })

    function handelChangeText(e){
        const {name,value} = e.target;

        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    function handleAdd(e){
        e.preventDefault();

        axios.post(API,formData)
        .then(()=>{
            alert("data added")
            setFormData({
                Name:"",
                Email:"",
                Phone:""
            })
        })
        .catch(err=>{console.log(err);
        })
    }

    const data = useFetch(API);

    const [edit,setEdit] = useState(false);

    function setupEdit(){
        const id = localStorage.getItem("_id");

        axios.get(`${API}/${id}`)
        .then((res)=>{
            setFormData({
                Name:res.data.Name,
                Email:res.data.Email,
                Phone:res.data.Phone
            })

            setEdit(true)
        })
        .then((error)=>{console.log(error);})
    }

    function handleUpdate(e){
        e.preventDefault();
        const id = localStorage.getItem("_id");

        axios.put(`${API}/${id}`,formData)
        .then(()=>{
            alert("data added")
            setFormData({
                Name:"",
                Email:"",
                Phone:""
            })
            localStorage.clear();
            setEdit(false)
        })
        .catch(err=>{console.log(err);
        })
    }

    function handleDelete(id){
        axios.delete(`${API}/${id}`)
        .then(()=>{
            alert('deleted')
        })
        .catch((error)=>console.log(error))
    }
  return (
    <div>
        <form action="" onSubmit={
            edit?
            handleUpdate:
            handleAdd
            }>
            <input type="text" name='Name' value={formData.Name} onChange={handelChangeText} placeholder='Name' />
            <input type="number" name='Phone' value={formData.Phone} onChange={handelChangeText} placeholder='Phone Number'/>
            <input type="text" name='Email' value={formData.Email} onChange={handelChangeText} placeholder='E-Mail Id'/>
            <button type='submit'>
                {
                    edit?
                    "update":
                    "create"
                }
            </button>
        </form>

        <table>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.Name}</td>
                                <td>{item.Phone}</td>
                                <td>{item.Email}</td>
                                <td>
                                    <button
                                        onClick={()=>{
                                            localStorage.setItem("_id",item.id);
                                            setupEdit();
                                        }}
                                    >Edit</button>
                                    <button
                                        onClick={()=>{
                                            handleDelete(item.id)
                                        }}
                                    >Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
