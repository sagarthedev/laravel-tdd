import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const Index = () => {
    const { tasks } = usePage().props;
    const data = tasks;
    console.log(data);
    return (
        <div>
            <div className="overflow-x-auto bg-white rounded shadow">
                <table className="w-full whitespace-nowrap">
                    <thead className="text-white bg-gray-600">
                        <tr className="font-bold text-left">
                            <th className="px-6 pt-5 pb-4">#</th>
                            <th className="px-6 pt-5 pb-4">Title</th>
                            <th className="px-6 pt-5 pb-4">Description</th>
                            <th className="px-6 pt-5 pb-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map(( listValue, index ) => {
          return (
            <tr key={listValue.id}>
              <td className="border-t">{listValue.id}</td>
              <td className="border-t">{listValue.title}</td>
              <td className="border-t">{listValue.description}</td>
              <td className="border-t">  <InertiaLink
                                            tabIndex="1"
                                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                            href="#"
                                        >
                                            Edit
                                        </InertiaLink></td>
            </tr>
          );
        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Index;
