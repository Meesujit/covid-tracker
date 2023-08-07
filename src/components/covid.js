import React, {useEffect, useState} from 'react'
import '../App.css'
const Covid = () => {

  const [country, setCountry] = useState();
  const [cases , setCases] = useState();
  const [recovered , setRecovered] = useState();
  const [deaths , setDeaths] = useState();
  const [todayCases , setTodayCases] = useState();
  const [deathCases , setDeathCases] = useState();
  const [recoveredCases , setRecoveredCases] = useState();
  const [userInput, setUserInput] = useState();


  // const getCovidData = async () => {
  //   try{
  //     const res = await fetch('https://disease.sh/v3/covid-19/countries')
  //     const actualData = await res.json();

  //     console.log(actualData);
  //     console.log(actualData[0]);
  //     console.log(actualData[0].country);

  //   }catch(error){
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   getCovidData();
  // }, [])

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);


  // SET DATA from api
  const setData = ({
    country, cases, recovered, deaths, todayCases,todayDeaths, todayRecovered,
  }) => {
    setCountry(country);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    setRecoveredCases(todayRecovered);
  
  }

  // SEARCH DATA
  const handleSearch = (e) => {
    try {
      setUserInput(e.target.value);
      
    } catch (error) {
      console.log(error);
    }
  
  }

  const handleSubmit = (props) => {
    props.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })

  }

  return (
    <>
    <div className=' w-full text-center'>
      <h1 className=' text-white pt-20 text-3xl font-bold '>🔴 LIVE</h1>
      <h2 className=' text-white pt-4 text-3xl font-bold'> COVID-19 CORONA VIRUS TRACKER</h2>
      
      <form onSubmit={handleSubmit} className=' mt-10'>
       <div className=' relative w-full'>
         <input onChange={handleSearch} type="search" id="search-dropdown" class=" p-2.5 w-1/4 z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter Country Name" required />
         <button type="submit" class="absolute top-0 right-29 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
         </div>        
      </form>
    
    </div>

    {/* SHOWING DETAILS OF THE COUNTRY  */}
    
    <div className=' grid grid-flow-col text-center mt-10'>
        <div className=''>
           <p>
             <span className=' text-white text-3xl font-bold'>
              Country 
             </span>
           </p>
           <br/>
           <span className=' text-white font-bold'>
          {country}
            </span> 
         </div>
        <div className=''> <p> <span className=' text-white text-3xl font-bold'>Cases</span> </p> <br/> <span className=' text-white font-bold'>
          {cases}
            </span>  </div>
        <div className=''> <p> <span className=' text-white text-3xl font-bold'>Death</span> </p> <br/> <span className=' text-white font-bold'>
          {deaths}
            </span>  </div>
        <div className=''> <p> <span className=' text-white text-3xl font-bold'>Recovered</span> </p> <br/> <span className=' text-white font-bold'>
          {recovered}
            </span>  </div>
        

    </div>








    </>
  )
}

export default Covid