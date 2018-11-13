/**
 * Created by jinpeng on 2018/6/29.
 */
import React from 'react'
import Link from 'umi/link';
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import Breakcrumbs from '../components/Breakcrumbs'
import styles from './index.less'

class Layout extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div>
        <div className={styles.header}>
          <p>头部</p>
          <Link to="/users">用户列表</Link>
        </div>
        <Breakcrumbs/>
        {/*<TransitionGroup>*/}
          {/*<CSSTransition key={this.props.location.key} classNames="fade" timeout={10}>*/}
            <div className={styles.content}>{this.props.children}</div>
          {/*</CSSTransition>*/}
        {/*</TransitionGroup>*/}
        <h2 className={styles.header} onClick={() => {
          this.props.history.push('hero')
        }}>底部</h2>
      </div>
    )
  }
}

export default Layout
