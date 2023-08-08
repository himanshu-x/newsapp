import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div className="">
       <div className="mt-6 space-y-12">
        <div className="">
          <div className="relative h-80 w-96 overflow-hidden rounded-lg bg-white ">
            <img
              src="https://dims.apnews.com/dims4/default/1728aa0/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa7%2Fb1%2F12f3dc61f55b77a726ae9b4c9850%2Fef2cb3d108a94efe8f845a9f390c0ac3"
              alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-6 font-semibold text-gray-900"> Title : {title}</h3>
          <p className="text-base font-semibold text-gray-900">description : {description}</p>
          <button
            type="button"
            className=" my-5 border-2 rounded-xl	bg-sky-400	p-2 text-white"
          >
            Go Some Where
          </button>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItems
