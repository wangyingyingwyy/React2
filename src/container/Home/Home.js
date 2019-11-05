import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import All from './All/All';
import Good from './Good/Good';
import Share from './Share/Share';
import Ask from './Ask/Ask';
import Job from './Job/Job';
import Dev from './Dev/Dev';
export default class Home extends Component {
    
    render() {
        let {url}=this.props.match;
        console.log(url)
        return (
            <div>
                <div className="nav">
                    <Link to={`${url}/all`}>全部</Link>
                    <Link to={`${url}/good`}>精华</Link>
                    <Link to={`${url}/share`}>分享</Link>
                    <Link to={`${url}/ask`}>问答</Link>
                    <Link to={`${url}/job`}>招聘</Link>
                    <Link to={`${url}/dev`}>客户测试端</Link>
                </div>
                    <div>
                        <Route exact path={`${url}/all`} component={All}/>
                        <Route exact path={`${url}/good`} component={Good}/>
                        <Route exact path={`${url}/share`} component={Share}/>
                        <Route exact path={`${url}/ask`} component={Ask}/>
                        <Route exact path={`${url}/job`} component={Job}/>
                        <Route exact path={`${url}/dev`} component={Dev}/>
                        <Route  path={`${url}/all/:id`} component={All}/>
                        <Route  path={`${url}/good/:id`} component={Good}/>
                        <Route  path={`${url}/share/:id`} component={Share}/>
                        <Route  path={`${url}/ask/:id`} component={Ask}/>
                        <Route  path={`${url}/job/:id`} component={Job}/>
                        <Route  path={`${url}/dev/:id`} component={Dev}/>
                    </div>  
            </div>
        )
    }
}
