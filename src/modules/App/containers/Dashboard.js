import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { TabBar, Icon, NoticeBar } from 'antd-mobile';
import StoryContent from "./StoryContent";
import Profile from "./Profile";
import { TAB_ITEM_INDEX, TAB_ITEM_NOVEL, TAB_ITEM_PROFILE } from 'constants/constants';
import NovelIndex from "./NovelIndex";
import dashboard from "styles/dashboard.scss";

class App extends Component {
  constructor () {
    super();
    this.state = {
      selectedTab: TAB_ITEM_INDEX,
    };
    this.onTabItemChange = this.onTabItemChange.bind(this);
  }

  componentWillMount () {
    const { tabIndex } = this.props.match.params;
    if (tabIndex) {
      this.setState({
        selectedTab: tabIndex,
      });
    }
  }

  onTabItemChange (tabItem) {
    this.setState({
      selectedTab: tabItem,
    });
  }

  render () {
    const { selectedTab }= this.state;
    let content = null;
    switch (selectedTab) {
    case TAB_ITEM_INDEX:
      content = <StoryContent/>;
      break;
    case TAB_ITEM_NOVEL:
      content = <NovelIndex/>;
      break;
    case TAB_ITEM_PROFILE:
      content = <Profile/>;
      break;
    }
    return (
      <div>
        <NoticeBar className={dashboard.storyNoticeBar} marqueeProps={{ loop: true, style: { padding: '0 0.15rem' } }}>
          功能完善中，敬请期待。。。
        </NoticeBar>
        {content}
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#01A982"
          barTintColor="white">
          <TabBar.Item
            icon={<Icon type="index" size="lg"/>}
            selectedIcon={<Icon type="index-o" size="lg"/>}
            title="段子"
            key="段子"
            data-seed="logId1"
            selected={selectedTab === TAB_ITEM_INDEX}
            onPress={() => this.onTabItemChange(TAB_ITEM_INDEX)}>
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon type="hot" size="lg"/>}
            selectedIcon={<Icon type="hot-o" size="lg"/>}
            title="小说"
            key="小说"
            data-seed="logId1"
            selected={selectedTab === 'tab2'}
            onPress={() => this.onTabItemChange(TAB_ITEM_NOVEL)}>
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon type="notification" size="lg"/>}
            selectedIcon={<Icon type="notification-o" size="lg"/>}
            title="通知"
            key="通知"
            data-seed="logId1"
            selected={selectedTab === 'tab3'}
            onPress={() => {
              this.setState({
                selectedTab: 'tab3',
              });
            }}>
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon type="account" size="lg"/>}
            selectedIcon={<Icon type="account" size="lg"/>}
            title="我的"
            key="我的"
            data-seed="logId1"
            selected={selectedTab === TAB_ITEM_PROFILE}
            onPress={() => this.onTabItemChange(TAB_ITEM_PROFILE)}>
          </TabBar.Item>
        </TabBar>
      </div>

    );
  }
}

function mapStateToProps (state) {
  // const appStorePath = ['app', Constants.APP_REDUCER];
  return {

  };
}

function mapDispatchToProps (dispatch) {
  return {

  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
