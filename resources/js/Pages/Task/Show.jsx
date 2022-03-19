import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";


const Show = (props) => {

    const [data,setData] = useState(props.task);
    console.log(data);

    return (
        <div>
            <div className="container">
                <div>
                    <span><label>
                            title: 
                        </label>{data.title}</span>
                </div>
                <div>
                    <span><label>
                            description: 
                        </label>{data.description}</span>
                </div>
            </div>
        </div>
    )
}

export default Show;