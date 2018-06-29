/**
 * Created by jinpeng on 2018/6/29.
 */
import { Route } from 'react-router-dom';

export default (args) => {
  const { render, ...rest } = args;
  return <Route
    {...rest}
    render={props =>
      <div>
        {
          Math.random() > .5 ?
            render(props) :
            <p>没有权限</p>
        }
      </div>
    }
  />;
}
