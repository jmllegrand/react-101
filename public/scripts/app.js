/**
 * Created by jmlegrand on 23/02/16.
 */

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.info('JM - in loadCommentsFromServer() with latest data', JSON.stringify(data));
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    console.info('JM - in getInitialState()');
    return {data: []};
  },
  componentDidMount: function() {
    console.info('JM - in componentDidMount()');
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  displayName: 'CommentBox',
  render: function () {
    return (
      <div className="commentBox">
        <h1>comments</h1>
        <CommentList data={this.state.data} />
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
  <CommentBox url="/api/comments" pollInterval={5000}/>,
  document.getElementById('content')
);


