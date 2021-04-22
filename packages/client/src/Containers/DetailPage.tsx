import React from 'react'; 
import { useParams } from 'react-router-dom';


export default function DetailPage() {

    interface ParamTypes {
        id: string
    }

    const { id } = useParams<ParamTypes>(); 
    console.log(id, '????')

    return (
        <div>
            this is a detail page
        </div>
    )
}
