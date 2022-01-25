import React from 'react'

const Header = () => {

    const current = new Date();
    const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const date = `${monthNames[current.getMonth()]} ${current.getDate()},${current.getFullYear()}`;
    const day = `${current.getDay()}`;
    const getDayName = (dayIndex) =>{
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[dayIndex];
    }


    return (
        <div className="header">
            <h2 className="dayName">{getDayName(day)}</h2>
            <p className="date">{date}</p>
            
        </div>
    )
}

export default Header
