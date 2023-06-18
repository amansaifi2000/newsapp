import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl,newsurl,author,date} = this.props
    return (
        <div className='my-3'>
       <div className="card">
        <img src={!imageurl?"https://www.hindustantimes.com/ht-img/img/2023/05/19/1600x900/Leaders-of-the-seven-largest-economies-meeting-in-_1684514199950.jpg":imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}
// style={{left:'90%',zIndex:'1'}}
export default NewsItem