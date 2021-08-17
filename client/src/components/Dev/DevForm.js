import React, { useState } from 'react'
import axios from 'axios'

const DevForm = ({ showForm, setShowForm }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const addDev = (e) => {
        e.preventDefault()

        const newData = {
            title: title,
            description: description
        }

        axios.post('/development', newData)
            .then(() => alert('Dev Added'))
            .catch((err) => console.log(err))

        setTitle('')
        setDescription('')
        setShowForm(!showForm)
    }

    return (
        <div style={{ top: `${showForm ? '0%' : '-200%'}` }} className="transition-all duration-700 fixed z-50 h-80 bottom-0 right-0 left-0 shadow-lg bg-white rounded-xl p-4 m-auto w-8/12 md:w-6/12 lg:w-4/12 border-2 border-gray-200">
            <h1 className="text-center text-lg font-bold">Add Development <i className="far fa-smile-wink text-2xl ml-2"></i> </h1>
            <form onSubmit={addDev} className="p-2 flex flex-col justify-center items-center">
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Title" className="bg-gray-200 p-3 my-1 outline-none w-full rounded-lg" />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="discription" placeholder="Description" className="bg-gray-200 rounded-lg my-1 p-3 outline-none h-32 w-full" cols="25"></textarea>
                <div className="flex items-center">
                    <button onClick={(e) => {
                        e.preventDefault()
                        setShowForm(!showForm)
                    }} className="mt-3 mx-1 bg-gray-400 text-sm font-bold rounded-full py-2 px-4 hover:bg-gray-300 transition-all text-white">Cancel</button>
                    <button type="submit" className="mt-3 mx-1 bg-blue-500 text-sm font-bold rounded-full py-2 px-4 hover:bg-blue-400 transition-all text-white">Add</button>
                </div>
            </form>
        </div>
    )
}

export default DevForm
