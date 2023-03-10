import React from 'react';
import './Home.css';
import Gif from './Gif.gif';
import Typical from "react-typical";

const Home = () => {
  return (
    <div className='home-container'>
      <div className="bg-img">
      <img src={Gif} alt="none"/>
      </div>
      <div className='header-img'>
        <img src='https://intellectoglobal.com/wp-content/uploads/2022/04/IG-Logo.svg' alt="None"/>
        <h1>
        <Typical
                loop={Infinity}
                steps={[
                  "π΄---App Development---π΄",
                  1000,
                  "π ---AI  Development---π ",
                  1000,
                  "π‘-- Web  Development--π‘",
                  1000,
                  "π’- Python Development-π’",
                  1000,
                  "π΅QA Automation Testingπ΅",
                  1000,
                ]}
              />
        </h1>
        </div>
</div>
  )
}
export default Home;
