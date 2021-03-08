import React, { Component, createRef } from 'react'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'
import SongsList from '@/application/SongList/index'
// import BaseSongList from '@/base/songlist/songlist'
import RowList from '@/base/rowList/rowList'
import Loading from '@/base/loading/loading'

import { addPlay } from '@/store/actions'
import { search, getMusicDetail } from '@/api'
import { HTTP_OK } from '@/config'
import formatSongs from '@/model/song'
import formatPlayList from '@/model/playlist'
import Scroll from '@/baseUI/scroll/index';
import './search-list.scss'
import MusicNote from '@/baseUI/music-note'
import { Context } from '@/pages/playlist/playlist'
import { changeErrorList } from '@/application/Player/store/actionCreators'
import ColumnList from '@/base/columnList/columnList'

// 搜索列表组件
class SearchList extends Component {
    constructor(props) {
        super(props)
        this.musicNoteRef=createRef()
        this.state = {
            tabData: [
                {
                    title: '单曲',
                    type: 1
                },
                {
                    title: '歌单',
                    type: 1000
                }
            ], //Tab数据
            type: 1, //选中的type
            songs: [], //搜索的歌曲
            playlists: [], //搜索的歌单
            loading: true
        }
    }
    componentDidMount(){
        console.log(this.musicNoteRef.current);
    }
    musicAnimation(x,y){
        //此this为this.musicNoteRef.current
        this.startAnimation({x, y});
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.query !== this.props.query) {
            this.setState({ songs: [], playlists: [], loading: true })
            this.search(nextProps.query, this.state.type)
        }
    }

    shouldComponentUpdate(newProps, newState) {
        if (newProps.query && newState.type !== this.state.type) {
            this.search(newProps.query, newState.type)
        }
        return true
    }

    // 播放单曲
    addPlay = (id, index) => {
        getMusicDetail(id).then(res => {
            if (res.data.code === HTTP_OK) {
                let music = this.state.songs[index]
                music.image = res.data.songs[0].al.picUrl
                this.props.addPlay(music)
            }
        })
    }
    // 跳转歌单
    openPlayList = id => {
        this.props.history.push({ pathname: `${router_prefix}/playlist/${id}` })
    }

    //切换Tab
    toggleTab = type => {
        if (this.state.songs.length === 0 || this.state.playlists.length === 0) {
            this.setState({ loading: true, type })
        } else {
            this.setState({ type })
        }
        //控制子组件
        // this.props.reloadErrorList()
        // this.songListRef.current.changeErrorListDispatch(new Date().getTime())
    }

    // 搜索事件
    search = (query, type) => {
        search(query, type).then(res => {
            if (res.data.code === HTTP_OK) {
                // console.log(res.data.result);
                setTimeout(() => {
                    switch (type) {
                        case 1:
                            this.setState({
                                loading: false,
                                // songs: formatSongs(res.data.result.songs)
                                songs: res.data.result.songs
                            })
                            return
                        case 1000:
                            this.setState({
                                loading: false,
                                // playlists: formatPlayList(res.data.result.playlists)
                                playlists: res.data.result.playlists
                            })
                            return
                        default:
                    }
                }, 300)
            }
        })
    }

    render() {

        const { currentMusic } = this.props
        const { tabData, type, songs, playlists, loading } = this.state
        const { query } = this.props
        return (
            <div className={classNames('search-list', { 'mm-none': !query })}>
                <ul className="search-list-tab">
                    {tabData.map(item => (
                        <li
                            className={classNames('search-tab-item', {
                                active: type === item.type
                            })}
                            onClick={() => this.toggleTab(item.type)}
                            key={item.type}
                        >
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ul>
                <div className="search-list-content">
                    <div
                        className={classNames('search-content-item', {
                            active: type === 1
                        })}
                    >
                        {loading ? (
                            <Loading />
                        ) : songs.length > 0 && (
                            <Scroll>
                                <SongsList
                                    fakeId={new Date().getTime()}
                                    songs={songs}
                                    collectCount={0}
                                    showCollect={false}
                                    pullUpLoading={false}
                                    musicAnimation={this.musicAnimation.bind(this.musicNoteRef.current)}
                                    showBackground={false}
                                />
                            </Scroll>
                        )}
                        <MusicNote ref={this.musicNoteRef}></MusicNote>
                    </div>
                    <div
                        className={classNames('search-content-item', {
                            active: type === 1000
                        })}
                    >
                        {loading ? (
                            <Loading />
                        ) : (
                            playlists.length > 0 && (
                                <Scroll>
                                    <ColumnList
                                        list={playlists}
                                        onItemClick={id => this.props.history.push(`${router_prefix}/playlist/${id}`)}
                                    />
                                </Scroll>
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

//映射Redux全局的state到组件的props上
const mapStateToProps = state => ({
    currentMusic: state.currentMusic,
    playList: state.playList
})
//映射dispatch到props上
const mapDispatchToProps = dispatch => ({
    addPlay: status => {
        dispatch(addPlay(status))
    },
    reloadErrorList(){
        dispatch(changeErrorList(new Date().getTime()))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SearchList))
