import React from 'react'
import axios from 'axios'

const TestCards = ({ card }) => {

    const proceedTest = (myId) => {

        const proceedData = {
            title: card.title,
            description: card.description
        }

        axios.post('/proceedTest', proceedData)
        axios.delete('/deleteTest/' + myId)
        alert('Test Proceeded To Done')
    }

    const deleteCard = (myId) => {
        axios.delete('/deleteTest/' + myId)
        alert('Test Deleted')
    }

    return (
        <div className="rounded-xl relative shadow-2xl border-2 border-gray-200 md:w-96 w-full h-auto p-4 m-4">
            <div className="absolute right-4 top-4"><i onClick={() => deleteCard(card._id)} className="fas fa-trash text-lg hover:text-gray-600 cursor-pointer"></i></div>
            <div className="flex">
                <div className="px-4 py-2">
                    <p className="text-gray-400 font-bold text-sm">Tue</p>
                    <h1 className="font-bold text-3xl text-gray-900">18</h1>
                    <p className="font-bold text-sm text-blue-500">Nov</p>
                </div>
                <div className="border-l-2 border-gray-500"></div>
                <div className="px-6 py-4">
                    <h1 className="mb-2 font-bold text-lg text-gray-900">{card.title}</h1>
                    <p className="text-sm">{card.description}</p>
                </div>
            </div>
            <div className="text-right">
                <button onClick={() => proceedTest(card._id)} className="bg-blue-500 text-xs font-bold rounded-full py-2 w-56 hover:w-64 transition-all text-white">COMPLETED</button>
            </div>
        </div>
    )
}

export default TestCards
