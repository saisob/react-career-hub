
import { MdLocationOn } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, address } = job;
    return (
        <div>
            <div className="card card-compact pt-5 bg-gray-100 shadow-xl ">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex space-x-4">
                        <button className="btn btn-outline">{remote_or_onsite}</button>
                        <button className="btn btn-outline">{job_type}</button>
                    </div>
                    <div className='flex justify-between '>
                        <div className='flex'>
                            <h1 className='text-2xl'><MdLocationOn></MdLocationOn></h1> {location}
                        </div>
                        <div className='flex space-x-2'>
                            <h1 className='text-2xl'><RiMoneyDollarCircleLine></RiMoneyDollarCircleLine></h1>
                            <p>salary:{salary}</p>
                        </div>
                    </div>

                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Job;