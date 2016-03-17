/**
 * Created by jmlegrand on 23/02/16.
 */


var CommentBox = React.createClass({
  displayName: 'CommentBox',
  render: function () {
    return (
      <div className="commentBox">
        <h1>comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});


var CommentList = React.createClass({
  displayName: 'CommentList',
  render: function () {
    return (
      <div className="commentList"> Hello World, pitchou! This is the CommentList section </div>
    );
  }
});


var CommentForm = React.createClass({
  displayName: 'CommentForm',
  render: function () {
    return (
      <div className="commentForm"> Hello World, pitchou! This is the CommentForm section </div>
    );
  }
});


ReactDOM.render(
  <CommentBox/>,
  document.getElementById('content')
);


