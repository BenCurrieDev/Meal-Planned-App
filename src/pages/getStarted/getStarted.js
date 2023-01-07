import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";


const GetStarted = () => {
  return (
    <main className='relative top-14'>
      <Banner />
      <div className="bg-gray-200 text-center">
        <h2 className="text-gray-900 text-xl font-medium pt-10">
          Why Use It?
        </h2>
        <p className="mx-4 font-light pt-4 pb-10 text-gray-700">
          Eating well takes time, and not just the cooking.<br/>
          Finding recipes, planning what to eat, creating shopping lists, it all adds up.<br/>
          Mealsy can do that stuff for you, giving you back time.
        </p>
        <h2 className="text-gray-900 text-xl font-medium">
          How It Works?
        </h2>
        <h3 className="text-gray-800 text-lg font-medium pt-4">
          1. Create your digital recipe book
        </h3>
        <p className="mx-4 font-light text-sm pt-2 text-gray-700">
          Search for, save and edit recipes, or add your own.
          Store your information locally, no need for accounts or logins.
        </p>
        <h3 className="text-gray-800 text-lg font-medium pt-4">
          2. Organise your recipes
        </h3>
        <p className="mx-4 font-light text-sm pt-2 text-gray-700">
          Add tags to your recipes to give you control over your meal plans. Even when they're made for you.
        </p>
        <h3 className="text-gray-800 text-lg font-medium pt-4">
          3. Automate the rest
        </h3>
        <p className="mx-4 font-light text-sm pt-2 text-gray-700">
          Have Mealsy generate meal plans and shopping lists for you. Keep things fresh with randomisation, or simply create and re-use meal plans that work best for you.
        </p>
        <Link to={ROUTES.recipesRoute()}><button className="rounded-2xl bg-gray-700 text-gray-200 py-2 px-4 mx-auto text-xl font-light mt-8 mb-12">Get Started</button></Link>
      </div>
      
    </main>
  );
}

export default GetStarted;