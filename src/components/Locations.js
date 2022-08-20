import React from 'react';

/*
Component consisting of:    
List of locations in a box with current date 
*/
const Locations = () => {

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
        <div className='locations-box'>
            <div className='location'>
                Your Location
            </div>
            <div className='date'>
                {createDate(new Date())}
            </div>
        </div>
    );
}


export default Locations;