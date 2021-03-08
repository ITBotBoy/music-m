import React from 'react'
import PropTypes from 'prop-types'

import { formatPlayCount } from '@/utils/utils'

import styles from './columnList.module.scss'

// 歌曲基础列表组件——列

const ColumnList = props => {
  const { list, onItemClick } = props
  return (
    <div className={[styles['columnWrapper'],'column-wrapper'].join(' ')}>
      {list.length > 0 &&
        list.map(item => {
          return (
            <div
              className={[styles['column-item'],'column-item'].join(' ')}
              onClick={() => onItemClick(item.id)}
              key={item.id}
            >
              <div
                className={styles["column-img"]}
                data-play={formatPlayCount(item.playCount)}
              >
                <img
                  width="100%"
                  height="100%"
                  src={`${item.coverImgUrl}?param=200y200`}
                  alt=""
                />
              </div>
              <p className={styles["column-title"]}>{item.name.replace(/\s/g, ' ')}</p>
            </div>
          )
        })}
    </div>
  )
}

ColumnList.propTypes = {
  list: PropTypes.any.isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default ColumnList
