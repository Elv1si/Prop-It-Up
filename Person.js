
import React from 'react';

const Person = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hair}</p>
        </div>

    )


}
export default Person;