import React, { useEffect } from 'react'

const Filter = ({ setActiveList, activeList, setFiltered, populars }) => {

    useEffect(() => {
        if (activeList === 0) {
            setFiltered(populars);
            return;
        }
        const filtered = populars.filter(popular => popular.genre_ids.includes(activeList))
        setFiltered(filtered);
    }, [activeList])

    return (
        <div className='filter-container'>
            <button className={activeList === 0 ? "active" : ""} onClick={() => setActiveList(0)}>All</button>
            <button className={activeList === 35 ? "active" : ""} onClick={() => setActiveList(35)}>Comedy</button>
            <button className={activeList === 28 ? "active" : ""} onClick={() => setActiveList(28)}>Action</button>
            <button className={activeList === 14 ? "active" : ""} onClick={() => setActiveList(14)}>Fantasy</button>
        </div>
    )
}

export default Filter