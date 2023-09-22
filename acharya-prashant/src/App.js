import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header'
import Hero from './components/Hero'
import Videos from './components/Videos'
import Series from './components/Series'
import Faq from './components/Faq'
import Footer from './components/Footer'

const App = () => {
  const [data, setData] = useState([]);
  const{ courses, relatedContent } = data;
  console.log(relatedContent);

  const ApiData = async() => {
       await axios
      .get('https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3')
      .then((response) => {
       setData(response.data)
      })
      .catch((error) => {
        // Handle errors here
        console.error("Axios error:", error);
      });
  }

  useEffect(() => {
      ApiData();
  },[])

  return (
    <>
    <Header />
    <Hero data={data} />
    <Videos courses={courses} />
    <Series content={relatedContent} />
    <Faq />
    <Footer />
    </>
  )
}

export default App