import { useEffect, useState } from "react";

const ServicesManage = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const baseURL = 'http://localhost:4000';
    fetch(`${baseURL}/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = id =>{
    const baseURL = 'http://localhost:4000';
    const url = `${baseURL}/services/${id}`
    fetch(url , {
        method:'DELETE'
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.deletedCount > 0){
            alert("Deleted Successfully")
            const remaining = services.filter(service => service._id !== id);
            setServices(remaining)
        }
      });
  }
  return (
    <div className="p-7">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Service-Name</th>
              <th>Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <th>{service._id}</th>
                <td>{service.serviceName}</td>
                <td>
                  <button className="btn btn-sm ">Update</button>
                  <button onClick={() => handleDelete(service._id)} className="btn btn-sm ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesManage;
