import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Slide from '@/base/slide/silde'
import Loading from '@/base/loading/loading'
import Scroll from '@/base/scroll/scroll'
import ColumnList from '@/base/columnList/columnList'

import { getBanner, getPersonalized } from '@/api'
import { HTTP_OK } from '@/config'
import { formatPlayListMin } from '@/model/playlist'

import './discover.scss'

// 推荐页面

class Discover extends Component {
    constructor(props) {
        super(props)
        this.state = {
            banners: [], // banner数组
            // getDate: new Date().getDate(),// 当前日期
            personalized: [] // 推荐歌单
        }
    }

    componentDidMount() {
        // alert(window.navigator.userAgent)
        getBanner().then(res => {
            if (res.data.code === HTTP_OK) {
                this.setState({
                    banners: res.data.banners
                })
            }
        })
        getPersonalized().then(res => {
            if (res.data.code === HTTP_OK) {
                this.setState({
                    personalized: formatPlayListMin(res.data.result)
                })
            }
        })
    }

    render() {
        const { banners, personalized } = this.state
        return (
            <div className="discover mm-wrapper">
                {personalized.length > 0 && banners.length > 0 ? (
                    <Scroll className="Recommend" options={{ bounce: false }}>
                        {this.state.banners && (
                            <div className="banner">
                                <Slide ref="slide" data={this.state.banners} />
                            </div>
                        )}
                        <div className="menu">
                            {/*<div className="menu-item">*/}
                            {/*<div className="menu-icon fm"/>*/}
                            {/*<p>私人FM</p>*/}
                            {/*</div>*/}
                            {/*<div className="menu-item">*/}
                            {/*<div className="menu-icon daily"/>*/}
                            {/*<p>每日推荐</p>*/}
                            {/*</div>*/}
                            <Link className="menu-item" to={router_prefix+'/toplist'}>
                                <div className="menuIcon iconfont iconpaihangbang--"></div>
                                <p>排行榜</p>
                            </Link>
                            <Link className="menu-item" to={router_prefix+'/sheetlist'}>
                                <div className="menuIcon iconfont icongedan"></div>
                                <p>歌单</p>
                            </Link>
                        </div>
                        <div className="lcrlist">
                            <h1
                                className="lcrlist-hd"
                                onClick={() => {
                                    this.props.history.push(`${router_prefix}/sheetlist`)
                                }}
                            >
                                <span>推荐歌单</span>
                                <i className="iconfont icontubiao-"></i>
                            </h1>
                            <ColumnList
                                list={personalized}
                                onItemClick={id => this.props.history.push(`${router_prefix}/playlist/${id}`)}
                            />
                        </div>
                    </Scroll>
                ) : (
                    <Loading />
                )}
            </div>
        )
    }
}

export default Discover
