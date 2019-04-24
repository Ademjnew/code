

import { Link } from 'react-router-dom';


import React from 'react';

export const MovieComponent = ({userId, id, title, body, editable}) => (
    <tr>
        <td>
            {userId}
        </td>
        <td>
            {id}
        </td>
        <td>
            {title}
        </td>
        <td>
            {body}
        </td>
        {
            editable ? <span></span> 
            : <td>
                <h4><Link to={`/edit/${id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Edit</Link></h4>

            </td>
        }
    </tr>	
)