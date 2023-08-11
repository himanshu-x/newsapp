import React, { Component } from 'react'

export class NewsItems extends Component {
 

  constructor(){
    super();
    console.log("hey i am a constructor from news component")
    this.state = {
      articles: this.articles,
      loading:false
    }
  }
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="">
         <div className="mt-6 max-w-xs border border-black-200	p-4  bg-blue-50 ">
        
          <div className="relative   overflow-hidden   ">
            <img
              src={!imageUrl?"https://i-invdn-com.investing.com/akapi-images/800x450/9dad1ee353d5b697a33108fed4dcda28_w_800_h_450.jpg":imageUrl}
              alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
              className=" object-cover object-center  "
            />
          </div>
          <h3 className=" font-semibold text-gray-900  "> <b> {title}.</b></h3>
          <p className="text-base font-semibold text-gray-900 mb-2.5 ">{description}..</p>
          <a href={newsUrl} target="_blank" className="p-1 bg-blue-500 text-white rounded-lg mt-3" rel="noreferrer" >Read More</a>
        
       </div>
      </div>
    )
  }
}

export default NewsItems
