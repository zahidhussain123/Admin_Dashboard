import React from 'react'
import "./home.scss"
import Topbar from '../../components/topbar/Topbar'
import ChartBox from '../../components/chartBox/ChartBox'
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'

const Home = () => {
  return (
    <div className='home'>
      <div className="box box1">
        <Topbar />
      </div> 
      <div className="box box2">
       <ChartBox {...chartBoxUser} />       
      </div> 
      <div className="box box3">
       <ChartBox {...chartBoxProduct} />
      </div> 
      <div className="box box4">
      </div> 
        
      <div className="box box5">
      <ChartBox {...chartBoxConversion} />
      </div> 
      <div className="box box6">
      <ChartBox {...chartBoxRevenue} />
      </div> 
     <div className="box box7"></div> 
     <div className="box box8"></div> 
     <div className="box box9"></div> 
    </div>
  )
}

export default Home