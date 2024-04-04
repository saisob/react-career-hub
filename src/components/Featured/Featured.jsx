import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Featured = () => {

    const [dataLength, setDataLength] = useState([4])

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="my-10">
            <div className="text-center space-y-4 ">
                <h1 className="text-5xl font-bold">Featured Jobs:{jobs.length}</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-2 gap-6">
                    {
                        jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>

            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <div className="text-center mt-10">
                    <button className="btn btn-primary"
                        onClick={() => setDataLength(jobs.length)}
                    >See All jobs</button>
                </div>

            </div>
        </div>
    );
};

export default Featured;