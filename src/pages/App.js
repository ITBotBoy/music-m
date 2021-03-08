import React, { Component, lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

import Drawer from '@/base/drawer/drawer'
import Loading from '@/base/loading/loading'
import MmHeader from '@/components/mm-header/mm-header'
// import Player from '@/components/player/player'
import Menu from '@/components/menu/menu'
import Player from "@/application/Player/index";

const Discover = lazy(() => import('@/pages/discover/discover'))
const Search = lazy(() => import('@/pages/search/search'))
const TopList = lazy(() => import('@/pages/toplist/toplist'))
const PlayList = lazy(() => import('@/pages/playlist/playlist'))
const SheetList = lazy(() => import('@/pages/sheetlist/sheetlist'))
const Skin = lazy(() => import('@/pages/skin/skin'))

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDrawer: false
    }
  }

  openDrawer = state => {
    this.setState({
      isDrawer: state
    })
  }

  render() {
    return (
      <Router>
        <Drawer
          className="App mm-wrapper"
          sidebar={Menu}
          isDrawer={this.state.isDrawer}
          onOpen={this.openDrawer}
        >
          <MmHeader onOpen={this.openDrawer} />
          <main className="mm-wrapper">
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route path={router_prefix+'/discover'} component={Discover} />
                <Route path={router_prefix+'/search'} component={Search} />
                <Route path={router_prefix+'/toplist'} component={TopList} />
                <Route path={router_prefix+'/playlist/:id'} component={PlayList} />
                <Route path={router_prefix+'/sheetlist'} component={SheetList} />
                <Route path={router_prefix+'/skin'} component={Skin} />
                <Redirect to={router_prefix+'/discover'} />
              </Switch>
            </Suspense>
          </main>
            <Player />
        </Drawer>
      </Router>
    )
  }
}

//映射Redux全局的state到组件的props上
const mapStateToProps = state => ({
  showPlayer: state.showPlayer
})

export default connect(mapStateToProps)(App)
