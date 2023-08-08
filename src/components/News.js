import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
    <div className="container my-3 m-auto">
        <h1 className='text-center text-red-600 text-lg py-3'>NewsIndia+</h1>
        <div className=' flex gap-8 flex-wrap justify-center'>
           
                <NewsItems title="myTitle" description="helow yadav ji"/>
                <NewsItems title="myTitle" description="helow yadav ji"/>
                <NewsItems title="myTitle" description="helow yadav ji"/>
                <NewsItems title="myTitle" description="helow yadav ji"/>
                <NewsItems title="myTitle" description="helow yadav ji"/>
                <NewsItems title="myTitle" description="helow yadav ji"/>
                <NewsItems title="myTitle" description="helow yadav ji"/>
                <NewsItems title="myTitle" description="helow yadav ji"/>
                <NewsItems title="myTitle" description="helow yadav ji"/>
                <NewsItems title="myTitle" description="helow yadav ji"/>
                <NewsItems title="myTitle" description="helow yadav ji"/>
                <NewsItems title="myTitle" description="helow yadav ji"/>

            
            
            
                
        </div>

     </div>
    )
  }
}

export default News
