import React, { Component } from 'react'
import './top.css'
export default class Top extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    //初始后执行
    componentDidMount(){
        var id = this.props.match.params.id;
        console.log(this.props)
        fetch('https://cnodejs.org/api/v1/topic/'+id)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            });
            console.log(res.data);
        }) 
    }
    render() {
        var data=this.state.data;
        return (
            <div>
                 {
                    // <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                    <div>
                        <div>
                            <span className="top_title">{data.title}</span>
                            <div className="changes">
                                <ul>
                                    <li><span>{"·发布于六个月前"}</span></li>
                                    <li><span>{"作者atian25"}</span></li>
                                    <li><span>{data.visit_count}{"次浏览"}</span></li>
                                    <li><span>{"来自   分享"}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                    </div>
                 }

            </div>
            
        )
    }
}
