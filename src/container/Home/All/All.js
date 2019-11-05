import React, { Component } from 'react'
import '../all.css'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
export default class All extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    //初始后执行
    componentDidMount(){
        var page=this.props.match.params.id;
     
            fetch('https://cnodejs.org/api/v1/topics?tab=all&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                });
                console.log(res.data)
            })
        
    }
    //更新完成后执行
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
             let page=this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?tab=all&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                });
            })
        }
    }
    render() {
        return (
            <div>
                <div className="topic_list">
                {
                    this.state.data.map((item)=>(
                        <div key={item.id} className="cell">
                            {/* 头像 */}
                                <div className="user_avatar pull-left">
                                    <img src={item.author.avatar_url}/>
                            </div>
                                {/* 阅读量 */}
                                <span className="reply_count pull-left">
                                    <span className="count_of_replies">
                                        {item.reply_count}
                                    </span>
                                    <span className="count_seperator">/</span>
                                    <span className="count_of_visits">
                                        {item.visit_count}
                                    </span>
                                </span>
                                {/* 是否置顶 */}
                                <div className="last_time pull-right">
                                    <img src={item.author.avatar_url} className="user_small_avatar"/>
                                    <span className="last_active_time">
                                        {'一天前'}
                                    </span>
                                </div>
                                <div className="topic_title_wrapper">
                                    {/* <span class="topiclist-tab">置顶</span> */}
                                    <Link className="topic_title" to={"/topic/"+item.id}>{item.title}</Link>
                                </div>                
                        </div>
                        ))
                }
                </div>
                <div className="pagination">
                    <ul>
                       {
                           [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                                <li key={item}>
                                    <Link to={'/home/all/'+item}>
                                    {item}
                                    </Link>
                               </li>
                           ))
                       }
                    </ul>
                </div>
            </div>
        )
    }
}
