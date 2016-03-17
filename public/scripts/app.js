/**
 * Created by jmlegrand on 23/02/16.
 */


var CommentBox = React.createClass({
  displayName: 'CommentBox',
  render: function () {
    return (
      <div className="commentBox">
        <h1>comments</h1>
        Hello world! This is a comment box component
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox/>,
  document.getElementById('content')
);


