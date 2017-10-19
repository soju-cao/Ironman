import React, { Component } from 'react';
import { TextareaItem, NavBar, InputItem } from 'antd-mobile';
import { withRouter } from "react-router-dom";

import style from 'styles/app.scss';
import { connect } from "react-redux";
import { saveStoryItem } from '../actions/story';

class StoryEditor extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      content: ''
    };
    this.goBack = this.goBack.bind(this);
    this.onSetTitleValue = this.onSetTitleValue.bind(this);
    this.onSetContentValue = this.onSetContentValue.bind(this);
    this.onSaveStoryItemClick = this.onSaveStoryItemClick.bind(this);
  }

  goBack () {
    this.props.history.goBack();
  }

  onSetTitleValue (value) {
    this.setState({ title: value });
  }

  onSetContentValue (value) {
    this.setState({ content: value });
  }

  async onSaveStoryItemClick () {
    const { title, content } = this.state;
    await this.props.saveStoryItem({ title, content });
    this.props.history.goBack();
  }

  render () {
    return (
      <div>
        <NavBar
          leftContent="首页"
          mode="light"
          onLeftClick={this.goBack}
          rightContent={[
            <div key="0" onClick={this.onSaveStoryItemClick}>保存</div>
          ]}>
          创作属于你的故事
        </NavBar>
        <div className={style.StoryEditorContainer}>
          <InputItem
            clear
            placeholder="请输入标题"
            autoFocus
            onChange={this.onSetTitleValue}>
            标题
          </InputItem>
          <TextareaItem
            title="内容"
            rows={8}
            placeholder="请输入内容"
            onChange={this.onSetContentValue}/>
        </div>
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
    saveStoryItem: (payload) => dispatch(saveStoryItem(payload))
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryEditor));
