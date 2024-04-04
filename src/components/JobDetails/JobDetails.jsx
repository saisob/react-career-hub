import { useLoaderData, useParams } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">job details:</h1>
            <div className="grid md:grid-cols-4">
                <div className=" col-span-3 space-y-5 p-5">
                    <p><span className="text-xl font-bold">Job Description:</span>{job.job_description}</p>
                    <p><span className="text-xl font-bold">job Responsibility</span> {job.job_responsibility}</p>
                    <div>
                        <h1 className="text-xl font-bold">Educational Requirements:</h1>
                        <p>{job.educational_requirements}</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Experiences:</h1>
                        <p>{job.experiences}</p>
                    </div>
                </div>
                <div>
                    <div className="bg-blue-100 p-5 rounded-xl">
                        <h1 className="text-xl font-bold p-5">Job Details</h1>
                        <hr />
                        <div>
                            <div className='flex space-x-2 '>
                                <h1 className='text-xl mt-1'><RiMoneyDollarCircleLine></RiMoneyDollarCircleLine></h1>
                                <p><span className=" font-semibold">salary:</span>{job.salary}</p>
                            </div>
                            <h1><span className="font-semibold">Job title:</span>{job.job_title}</h1>
                        </div>
                        <h1 className="text-xl font-bold p-5">Contact Information</h1>
                        <hr />
                        <div>
                            <h1><span className="font-semibold">phone:</span>{job.contact_information.phone}</h1>
                            <h1><span className="font-semibold">Email:</span>{job.contact_information.email}</h1>
                            <h1><span className="font-semibold">address:</span>{job.contact_information.address}</h1>
                        </div>
                    </div>
                    <button className="btn btn-primary w-full my-4">Apply Now</button>

                </div>


            </div>

        </div>
    );
};

export default JobDetails;