import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render() {
        return (
            <div>
                <div className="login-header">
                    <ul>
                        <li>
                            <a>主页</a>
                            <span>/</span>
                        </li>
                        <li className="login-li">登录</li>
                    </ul>
                </div>
                <div className="login-content">
                    <form>
                        <div>
                            <label for="name" className="login-label">用户名</label>
                            <div>
                                <input type="text" name="username" className="login-input"/> 
                            </div>
                        </div>
                        <div>
                            <label for="name" className="login-label">密码</label>
                            <div>
                                <input type="password" name="password" className="login-input"/> 
                            </div>
                        </div>
                        <div className="login-div3">
                            <Link to="/home/all" className="login-a">登录</Link>
                        </div>
                    </form>
                    
                  
                </div>
               
               
            </div>
        )
    }
}
