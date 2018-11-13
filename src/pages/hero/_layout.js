/**
 * Created by jinpeng on 2018/6/29.
 */

import Link from 'umi/link';
export default (props) => <div>
  <p>hero layout</p>
  <Link to="/yasuo">亚索页面</Link>
  <div>{props.children}</div>
</div>
