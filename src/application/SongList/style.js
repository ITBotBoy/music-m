import styled from 'styled-components'
import style from '@/assets/styles/public'

export const SongList = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  opacity: 0.98;
  ${props => props.showBackground ? `background: ${style['highlight-background-color']}` : ''};
  .first_line{
    box-sizing: border-box;
    padding: 10px 0;
    margin-left: 10px;
    position: relative;
    justify-content: space-between;
    border-bottom: 1px solid ${style['border-color']};
    .play_all{
      display: inline-block;
      line-height: 24px;
      color: ${style['font-color-desc']};
      .iconfont {
        font-size: 24px;
        margin-right: 10px;
        vertical-align: top;
      }
      .sum{
        font-size: ${style['font-size-s']};
        color: ${style['font-color-desc-v2']};
      }
      >span{
        vertical-align: top;
      }
    }
    .add_list,.isCollected {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0; top :0; bottom: 0;
      width: 130px;
      line-height: 34px;
      background: ${style['theme-color']};
      color: ${style['font-color-light']};
      font-size: 0;
      border-radius: 3px;
      vertical-align: top;
      .iconfont {
        vertical-align: top;
        font-size: 10px;
        margin: 0 5px 0 10px;
      }
      span{
        font-size: 14px;
        line-height: 34px;
      }
    }
    .isCollected{
      display: flex;
      background: ${style['background-color']};
      color: ${style['font-color-desc']};
    }
}
`
export const SongItem = styled.ul`
  >li{
    display: flex;
    height: 54px;
    align-items: center;
    &:last-child {
        .info {
        border: none!important;
        }
    }  
    &.songError{
        * {
        color: #bbbbbb!important;
        }
    }
    &.songActive {
        * {
        color: var(--THEME)!important;
        }
    }
    .index{
        font-size:${style['font-size-m']};
    color:${style['list-main-color']};
      flex-basis: 60px;
      width: 60px;
      height: 54px;
      line-height: 54px;
      text-align: center;
    }
    .info{
      box-sizing: border-box;
      flex: 1;
      display: flex;
      height: 100%;
      padding: 4px 0;
      flex-direction: column;
      justify-content: space-around;
      border-bottom: 1px solid ${style['border-color']};
      ${style.noWrap()}
      >span{
        ${style.noWrap()}
      }
      >span:first-child{
        font-size:${style['font-size-m']};
        color: ${style['list-main-color']};
      }
      >span:last-child{
        font-size: ${style['font-size-s']};
        color:${style['list-light-color']};
      }
    }
  }
`
