import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Card, WhiteSpace, Icon, SearchBar, Flex } from "antd-mobile";
import * as Path from 'constants/storePath';
import style from 'styles/app.scss';
import { fetchStoryList } from '../actions/story';

class StoryContent extends Component {
  constructor () {
    super();
    this.shareStory = this.shareStory.bind(this);
  }

  shareStory () {
    this.props.history.push('/editor');
  }

  async componentDidMount () {
    await this.props.fetchStoryList();
  }

  render () {
    const { storyList=[] } = this.props;
    const cardList = storyList.map(item => {

      return (
        <div key={item.articleId}>
          <WhiteSpace size="xs"/>
          <Card full>
            <Card.Header
              title={item.title}
            />
            <Card.Body>
              <div>{item.content}</div>
            </Card.Body>
            <Card.Footer
              content={
                <div>
                  <Icon type="smile" size="small" style={{ marginRight: '0.1rem' }}/>
                  <Icon type="cry" size="small"/>
                </div>}
            />
          </Card>
        </div>
      );
    });
    return (
      <div>
        <SearchBar placeholder="搜索文章、作者" maxLength={8}/>
        <WhiteSpace size="xs"/>
        <Flex style={{ background: 'white' }}>
          <Flex.Item>
            <div className={style.link} onClick={this.shareStory}>
              分享故事
            </div>
          </Flex.Item>
          <Flex.Item>
            <div className={style.link}>
            </div>
          </Flex.Item>
          <Flex.Item>
            <div className={style.link}>
            </div>
          </Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
        { cardList }
      </div>
    );
  }
}

function mapStateToProps (state) {
  const storyStorePath = ['app', Path.STORY_REDUCER];
  return {
    storyList: state.getIn([...storyStorePath, Path.STORY_LIST])
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchStoryList: (payload) => dispatch(fetchStoryList(payload))
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryContent));
