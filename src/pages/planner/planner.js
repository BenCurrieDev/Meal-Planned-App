import { useState } from "react";
import { bottomViewNavs } from "./viewNavs";
import CreateMealPlan from "../../components/CreateMealPlan/CreateMealPlan";


const Planner = () => {
    const [ view, setView ] = useState('displayPlans');

    return (
        <main className='min-h-full bg-gray-200'>
             <div className=" bg-gray-700">
                <h2 className="text-white text-3xl font-normal text-center py-6">Meal Planner</h2>
             </div>
             {view === 'displayPlans' && <div></div>}
             {view === 'createPlan' && <div><CreateMealPlan /></div>}
             <nav className='flex justify-center'>
                {bottomViewNavs[view].map(({text, newView}, index) => <button key={index} onClick={() => setView(newView)} className="rounded-2xl bg-gray-700 text-gray-200 py-2 px-4 m-2 text-xl font-light mb-20">{text}</button>)}
            </nav>
        </main>
    )
}

export default Planner;