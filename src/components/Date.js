import React from 'react';

const Date = () => {

    /*
    returns string: Day, Month, Date, Year
    */
    const createDate = (curDate) => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

        let curDay = days[curDate.getDay()];
        let curMonth = months[curDate.getMonth()];
        let curYear = curDate.getFullYear();
        let date = curDate.getDate();

        return `${curDay} ${curMonth} ${date} ${curYear}`;
    }

    return (
        <div className='date'>
            {createDate(new Date())}
        </div>
    );

}

export default Date;