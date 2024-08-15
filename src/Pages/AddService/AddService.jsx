import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const AddService = () => {
  const navigate = useNavigate()
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    const baseURL = 'https://genius-car-mechanics-server-jet.vercel.app';

    axios.post(`${baseURL}/services`, data)
      .then(res => {
        if(res.data.insertedId){
            alert('service added successfully')

            reset();
            navigate('/home#services')
        }
      })
  };
  return (
    <div className="flex justify-center my-7">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-center text-3xl p-3">Please Add A Service</h1>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        
          <input type="text" placeholder="service name" className="input input-bordered" required  {...register("serviceName")} />
        
          <textarea className="textarea textarea-bordered" placeholder="description" {...register("description")} />
        
        
          
          <input type="text" placeholder="image url" className="input input-bordered"   {...register("img")} />
          <input type="number" placeholder="service price" className="input input-bordered"   {...register("price")} />
          <input type="number" placeholder="time" className="input input-bordered"   {...register("time")} />
        
        
          <button className="btn btn-primary">Add Service</button>
        
      </form>
      
    </div>
      
        
        
        
        
        
      
      
    </div>
  );
};

export default AddService;
