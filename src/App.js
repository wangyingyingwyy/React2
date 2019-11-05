import React, { Component } from 'react'
import Header from './components/Header'
import {HashRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home/Home';
import Start from './container/Start/Start';
import Api from './container/Api/Api';
import About from './container/About/About';
import Login from './container/Login';
import Top from './container/Home/Top';
// import All from './container/Home/All/All';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div className='left'>
                        <Route path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/topic/:id' component={Top}/>
                    </div>
                    <div className='right'>
                        <div className="right-top">
                            <p>CNode：Node.js专业中文社区</p>
                            <p>您可以登陆或者注册   也可以</p>
                            <div>
                                <a>通过GitHub登录</a>
                            </div>
                        </div>
                        <div className="right-center">
                            <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"/>
                            <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
                            <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>
                        </div>
                        <div className="right-bottom">
                            <div className="bottom-header">
                                <span>无人回复的话题</span>
                            </div>
                            <div className="bottom-content">
                                <ul>
                                    <li>Hackers周刊第十期（2019-11-03）</li>
                                    <li>写了个在测试中，控制函数日志打印的npm包</li>
                                    <li>libuv的定时器原理源码解析</li>
                                    <li>nodejs之setTimeout源码解析</li>
                                    <li>libuv之async.c源码解析</li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-bottom2">
                            <div className="bottom-header">
                                <span>积分榜  TOP 100 >></span>
                            </div>
                            <div>
                                <ol>
                                    <li>
                                        <span className="span2">21745</span>
                                        <span>i5ting</span>
                                    </li>
                                    <li>
                                        <span className="span2">15675</span>
                                        <span>alsotong</span>
                                    </li>
                                    <li>
                                        <span className="span2">8780</span>
                                        <span>leapon</span>
                                    </li>
                                    <li>
                                        <span className="span2">9105</span>
                                        <span>jiyinyiyong</span>
                                    </li>
                                    <li>
                                        <span className="span2">21745</span>
                                        <span>yackzch</span>
                                    </li>
                                    <li>
                                        <span className="span2">21745</span>
                                        <span>i5ting</span>
                                    </li>
                                    <li>
                                        <span className="span2">21745</span>
                                        <span>i5ting</span>
                                    </li>
                                    <li>
                                        <span className="span2">21745</span>
                                        <span>yackzch</span>
                                    </li>
                                    <li>
                                        <span className="span2">8780</span>
                                        <span>i5ting</span>
                                    </li>
                                    <li>
                                        <span className="span2">9705</span>
                                        <span>alsotong</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="right-bottom3">
                            <div className="bottom-header">
                                <span>友情社区</span>
                            </div>
                            <div>
                                <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png"/>
                                <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png"/>
                                <img src="https://static2.cnodejs.org/public/images/phphub-logo.png"/>
                                <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"/>
                            </div>
                        </div>
                        <div className="right-bottom4">
                            <div className="bottom-header">
                                <span>客户端二维码</span>
                            </div>
                            <div>
                                <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" className="img4"/>
                                <br/>
                                <a href="https://github.com/soliury/noder-react-native">客户端源码地址</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
           
        )
    }
}
