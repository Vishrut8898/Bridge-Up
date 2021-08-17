import axios from 'axios'
import React from 'react'

const TodoCards = ({ task }) => {

    const year = task.createdAt.toString().slice(0, 4)
    const month = task.createdAt.toString().slice(6, 7)
    const day = task.createdAt.toString().slice(8, 10)

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]

    const proceedTodo = (myId) => {

        const proceedData = {
            title: task.title,
            description: task.description
        }

        axios.post('http://localhost:5055/proceedTodo', proceedData)
        axios.delete('http://localhost:5055/deleteTodo/' + myId)
        alert('Todo Proceeded To Development')
    }

    const deleteCard = (myId) => {
        axios.delete('http://localhost:5055/deleteTodo/' + myId)
        alert('Todo Deleted')
    }

    return (
        <div className="rounded-xl relative shadow-2xl border-2 border-gray-200 md:w-96 w-full h-auto p-4 m-4">
            <div className="absolute right-4 top-4"><i onClick={() => deleteCard(task._id)} className="fas fa-trash text-lg hover:text-gray-600 cursor-pointer"></i></div>
            <div className="flex">
                <div className="px-4 py-2">
                    <p className="text-gray-400 font-bold text-sm">{year}</p>
                    <h1 className="font-bold text-3xl text-gray-900">{day}</h1>
                    <p className="font-bold text-sm text-blue-500">{months[month]}</p>
                </div>
                <div className="border-l-2 border-gray-500"></div>
                <div className="px-6 py-4">
                    <h1 className="mb-2 font-bold text-lg text-gray-900">{task.title}</h1>
                    <p className="text-sm">{task.description}</p>
                </div>
            </div>
            <div className="text-right">
                <button onClick={() => proceedTodo(task._id)} className="bg-blue-500 text-xs font-bold rounded-full py-2 w-56 hover:w-64 transition-all text-white">PROCEED TO DEVELOPMENT</button>
            </div>
        </div>
    )
}

export default TodoCards
