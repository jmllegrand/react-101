/**
 * Created by jmlegrand on 23/02/16.
 */

var datas = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];



var CommentBox = React.createClass({
  displayName: 'CommentBox',
  render: function () {
    return (
      <div className="commentBox">
        <h1>comments</h1>
        <CommentList data={this.props.data}/>
        <CommentForm />
      </div>
    );
  }
});


var CommentList = React.createClass({
  displayName: 'CommentList',
  render: function () {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
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
  <CommentBox data={datas}/>,
  document.getElementById('content')
);


