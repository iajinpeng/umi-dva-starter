/**
 * Created by jinpeng on 2018/6/29.
 */
/**
 *动态路由
 */
function PostIndex (props) {
  return (
    <div>
      {props.match.params.post}
    </div>
  )
}

export default PostIndex