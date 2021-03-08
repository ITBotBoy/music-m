/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
// import style from '@/assets/styles/public'
import PropTypes from 'prop-types'
import MmNav from '@/components/mm-nav/mm-nav'
import style from '@/assets/styles/public'


const HeaderContainer = styled.div`
    .mm-nav {
        position: ${props => props.loading?"relative": 'fixed'};
        z-index: 3;
        width:100%;
        background:${props => (props.isMarquee || props.loading)?'var(--THEME)':'transparent'};
    }
`
// 处理函数组件拿不到ref的问题,所以用forwardRef
const Header = React.forwardRef((props, ref) => {
    const { title, isMarquee ,loading} = props
    return (
        <HeaderContainer ref={ref} isMarquee={isMarquee} loading={loading?1:0}>
            <MmNav title={title} isMarquee={isMarquee}/>
        </HeaderContainer>
    )
})

Header.defaultProps = {
    handleClick: () => {
    },
    title: '标题',
    isMarquee: false
}

Header.propTypes = {
    handleClick: PropTypes.func,
    title: PropTypes.string,
    isMarquee: PropTypes.bool
}

export default React.memo(Header)