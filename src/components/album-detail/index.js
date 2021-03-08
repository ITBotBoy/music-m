import React from 'react'
import { TopDesc, Menu } from './style'
import SongsList from '@/application/SongList/index'
import './style.scss'
function AlbumDetail(props) {
    const { currentAlbum, pullUpLoading ,id} = props
    const renderTopDesc = () => {
        return (
            <TopDesc background={currentAlbum.coverImgUrl}>
                <div className="background">
                    <div className="filter"></div>
                </div>
                <div className="topWrapper">
                    <div className="img_wrapper">
                        <div className="decorate"></div>
                        <img src={currentAlbum.coverImgUrl} alt="" />
                        <div className="play_count">
                            <i className="icon play icon-headset"></i>
                            <span className="count">{Math.floor(currentAlbum.subscribedCount / 1000) / 10}万</span>
                        </div>
                    </div>
                    <div className="desc_wrapper">
                        <h1 className="title">{currentAlbum.name}</h1>
                        <div className="person">
                            <div className="avatar">
                                <img src={currentAlbum.creator.avatarUrl} alt="" />
                            </div>
                            <div className="name">{currentAlbum.creator.nickname}</div>
                        </div>
                    </div>
                </div>
                {props.showMenu && renderMenu()}
            </TopDesc>
        )
    }

    const renderMenu = () => {
        return (
            <Menu>
                <div>
                    <i className="icon icon-pinglun"></i>
                    评论
                </div>
                <div>
                    <i className="icon icon-xihuan1"></i>
                    点赞
                </div>
                <div>
                    <i className="icon icon-tianjia"></i>
                    收藏
                </div>
                <div>
                    <i className="icon icon-youcecaidan"></i>
                    更多
                </div>
            </Menu>
        )
    }
    const renderSongList = () => {
        return (
            <SongsList
                songs={currentAlbum.tracks}
                collectCount={currentAlbum.subscribedCount}
                showCollect={false}
                loading={pullUpLoading}
                musicAnimation={props.musicAnimation}
                showBackground={true}
            ></SongsList>
        )
    }

    return (
        <div>
            {renderTopDesc()}
            {renderSongList()}
        </div>
    )
}

export default React.memo(AlbumDetail)