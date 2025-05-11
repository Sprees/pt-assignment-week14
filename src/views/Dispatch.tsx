import MovingJobCard from "../components/MovingJobCard"
import { jobs } from "../mockData"

function Dispatch() {
    return (
        <div>
            { jobs.map(job => (
                <div key={job.id} className='p-2'>
                    <MovingJobCard job={ job } />
                </div>
            )) }
        </div>
    )
}

export default Dispatch
