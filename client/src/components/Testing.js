import React, { useState, useEffect } from 'react';
import TestForm from './Test/TestForm';
import TestCards from './Test/TestCards';

const Testing = () => {
    const [showForm, setShowForm] = useState(false)
    const [cards, setCards] = useState([{}])

    useEffect(() => {
        fetch('/testing').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setCards(jsonRes)).catch(e => console.log(e))
    })

    return (
        <>
            <div className="transition-all md:mx-12 mx-7 bg-white rounded-b-xl h-auto pb-4 mb-10">
                <div className="flex text-left flex-col sm:flex-row sm:justify-between lg:justify-between sm:items-center py-8 md:px-8 px-4">
                    <div className="flex items-center">
                        <div onClick={() => setShowForm(!showForm)} className="transition-all rounded-full bg-gray-800 w-6 h-6 md:w-12 md:h-12 flex items-center justify-center cursor-pointer focus:bg-gray-700 text-white font-bold text-xl hover:w-8">+</div>
                        <h2 className="ml-3 md:ml-8 text-xl md:text-2xl font-bold">Testing cards</h2>
                    </div>
                    <div className="ml-6 mt-6 sm:mt-0 sm:ml-0 flex items-center justify-start sm:justify-center border-b-2 border-gray-300 w-auto sm:w-4/6 md:w-3/6">
                        <i className="fas fa-search text-gray-400 mr-4"></i>
                        <input type="text" className="outline-none" placeholder="Search Todos" />
                    </div>
                </div>
                <div className="grid justify-items-center gap-3 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-6 w-full">
                    {(cards.length >= 1 ?
                        cards.map((card, index) => {
                            return (
                                <TestCards key={index} card={card} />
                            )
                        })
                        :
                        <div className="flex mt-8 items-center justify-center m-auto">
                            <h1 className="text-3xl text-gray-400">No Data </h1>
                            <i className="text-gray-400 ml-4 fas fa-redo fa-2x"></i>
                        </div>
                    )}
                </div>
            </div>

            <TestForm showForm={showForm} setShowForm={setShowForm} />
        </>
    )
}

export default Testing
