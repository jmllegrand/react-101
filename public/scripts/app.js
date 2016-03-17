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
      <div>
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function () {
    return (
      <div className="comment">
        <h2 className="commentAuthor"> {this.props.author} </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
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


