import React, { useState, useEffect,useContext } from 'react'
import { SongList, SongItem } from './style'
import { getName } from '@/api/utils'
import { ONE_PAGE_COUNT } from '@/api/config'
import classNames from 'classnames'

import { connect } from 'react-redux'
import { changePlayList, changeCurrentIndex, changeSequecePlayList ,changeErrorList} from '@/application/Player/store/actionCreators'
import {Context} from '@/pages/playlist/playlist'
const SongsList = React.forwardRef((props, refs) => {
    const [startIndex, setStartIndex] = useState(0)

    const { songs, collectCount, showCollect, loading = false, usePageSplit,currentSong ,errorList} = props

    const { musicAnimation } = props

    const { changePlayListDispatch,fakeId, changeCurrentIndexDispatch, changeSequecePlayListDispatch,changeErrorListDispatch } = props
    const reqId=useContext(Context) || fakeId
    const totalCount = songs.length
    const oldReqId=Object.keys(errorList.toJS())[0]
    const errorIdList=Object.values(errorList.toJS())[0] || []
    const currentSongId=currentSong.toJS().id
    useEffect(() => {
        if (!loading) return
        if (startIndex + 1 + ONE_PAGE_COUNT >= totalCount)
            return
        setStartIndex(startIndex + ONE_PAGE_COUNT)
    }, [loading, startIndex, totalCount])

    const selectItem = (e, index,id) => {
        if(errorIdList.includes(id) && oldReqId==reqId){
            return
        }
        changePlayListDispatch(songs)
        changeSequecePlayListDispatch(songs)
        changeCurrentIndexDispatch(index)
        // reqId
        changeErrorListDispatch(reqId)
        musicAnimation(e.nativeEvent.clientX, e.nativeEvent.clientY)
    }

    let songList = (list) => {
        let res = []
        // 判断页数是否超过总数
        let end = usePageSplit ? startIndex + ONE_PAGE_COUNT : list.length
        for (let i = 0; i < end; i++) {
            if (i >= list.length) break
            let item = list[i]
            res.push(
                <li className={classNames({
                    'songActive':oldReqId==reqId && currentSongId==item.id,
                    'songError':oldReqId==reqId && errorIdList.includes(item.id)
                })} key={item.id} onClick={(e) => selectItem(e, i,item.id)}>
                    <span className="index">{i + 1}</span>
                    <div className="info">
                        <span>{item.name}</span>
                        <span>
              {item.ar ? getName(item) : getName(item)} - {item.al ? item.al.name : item.album.name}
            </span>
                    </div>
                </li>
            )
        }
        return res
    }

    const collect = (count) => {
        return (
            <div className="add_list">
                <i className="iconfont">&#xe62d;</i>
                <span>收藏({Math.floor(count / 1000) / 10}万)</span>
            </div>
            // <div className="isCollected">
            //   <span>已收藏({Math.floor(count/1000)/10}万)</span>
            // </div>
        )
    }
    return (
        <SongList ref={refs} showBackground={props.showBackground}>
            <div className="first_line">
                <div className="play_all" onClick={(e) => selectItem(e, 0)}>
                    <i className="iconfont">&#xe6e3;</i>
                    <span>播放全部 <span className="sum">(共{totalCount}首)</span></span>
                </div>
                {showCollect ? collect(collectCount) : null}
            </div>
            <SongItem>
                {songList(songs)}
            </SongItem>
        </SongList>
    )
})
//请求重置errorList

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
    fullScreen: state.getIn(['player', 'fullScreen']),
    playing: state.getIn(['player', 'playing']),
    errorList: state.getIn(['player', 'errorList']),
    currentIndex: state.getIn(['player', 'currentIndex']),
    currentSong: state.getIn(['player', 'currentSong']),
    scrollY: state.getIn(['album', 'scrollY'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changePlayListDispatch(data) {
            dispatch(changePlayList(data))
        },
        changeCurrentIndexDispatch(data) {
            dispatch(changeCurrentIndex(data))
        },
        changeErrorListDispatch(data) {
            dispatch(changeErrorList(data))
        },
        changeSequecePlayListDispatch(data) {
            dispatch(changeSequecePlayList(data))
        }
    }
}


// 将ui组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SongsList))