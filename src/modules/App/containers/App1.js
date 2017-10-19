// /*
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as Constants from '../constants';
// import { getPublicKey } from '../actions/app';
// import style from 'styles/appLayout.scss';
// import { Row, Col, Icon, Modal, Button } from 'antd';
// import Login from './Login';
// import { withRouter } from "react-router-dom";
//
// class App extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       loginModalVisible: false
//     };
//     this.onShowMagClick = this.onShowMagClick.bind(this);
//     this.onShowLoginModal = this.onShowLoginModal.bind(this);
//     this.handleCancel = this.handleCancel.bind(this);
//     this.linkToAbout = this.linkToAbout.bind(this);
//   }
//   async onShowMagClick () {
//     await this.props.getPublicKey();
//   }
//
//   async onShowLoginModal () {
//     await this.props.getPublicKey();
//     this.setState({ loginModalVisible: true });
//   }
//
//   handleCancel () {
//     this.setState({ loginModalVisible: false });
//   }
//
//   linkToAbout () {
//     this.props.history.push('/about');
//   }
//
//   render () {
//     return (
//       <div>
//         <Modal
//           title="登录"
//           footer={null}
//           visible={this.state.loginModalVisible}
//           maskClosable={false}
//           onCancel={this.handleCancel}>
//           <Login/>
//         </Modal>
//         <Row className={style.header} align="center">
//           <Col span={1} offset={18}>
//             <span onClick={() => this.onShowLoginModal(true)}>
//               <Icon type="user" />
//               登录
//             </span>
//           </Col>
//           <Col span={1} >
//             <span>注册</span>
//           </Col>
//           <Col span={1} onClick={this.linkToAbout}>
//             <span>关于</span>
//           </Col>
//         </Row>
//         <Row className={style.body} align="center" gutter={20}>
//           <Col span={16} offset={1}>
//             <div className={style.actionHeader}>
//               <div>
//                 <Button size="large" className={style.btnWithBorder}>
//                   <Icon type="edit" /> 写文章
//                 </Button>
//                 <Button size="large" className={style.btnWithBorder}>
//                   <Icon type="question-circle" /> 提问题
//                 </Button>
//               </div>
//               <Button size="large" className={style.btnWithBorder}>
//                 <Icon type="copy" /> 草稿
//               </Button>
//             </div>
//           </Col>
//           <Col span={6}>
//             <ul className={style.rightSideBar}>
//               <li className={style.listItem}>
//                 <Icon type="star-o" />&nbsp; 我的收藏
//               </li>
//               <li className={style.listItem}>
//                 <Icon type="book" />&nbsp; 我的专栏
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }
//
// function mapStateToProps (state) {
//   const appStorePath = ['app', Constants.APP_REDUCER];
//   return {
//     publicKey: state.getIn([...appStorePath, Constants.PUBLIC_KEY])
//   };
// }
//
// function mapDispatchToProps (dispatch) {
//   return {
//     getPublicKey: (payload) => dispatch(getPublicKey(payload))
//   };
// }
//
// export default withRouter(connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App));
// */
