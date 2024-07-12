import React, { useEffect, useState } from 'react'
import axios from 'axios';

const All_Mentors = () => {
    const [data,setDatas]=useState({});
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8080/admin/mentors')
        .then(result=>{
            setDatas(result.data.data)
            setLoading(true)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <>
        {loading && 
        <div>
            <table>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>subject</th>
                </tr>
                {data.map((res)=>
                    <tr>
                        <td>{res.name}</td>
                        <td>{res.email}</td>
                        <td>{res.subjects}</td>
                    </tr>
                )}
            </table>
        </div>
        }
    </>
  )
}

export default All_Mentors