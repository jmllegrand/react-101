
# React Tutorial

This is the React comment box example from [the React tutorial](http://facebook.github.io/react/docs/tutorial.html).

## To use with Node

The server serve static files from `public/` and handle requests to `/api/comments` to fetch or add data.

Start a server with the following:


```
npm install
node server.js
```

Alternative

```
npm start
```

And visit <http://localhost:3000/>. Try opening multiple tabs!

## Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking the script above, e.g.,

```sh
PORT=3001 node server.js
```

## Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


#### How to build basic Component



##### using React.createClass

```
React.createClass
```

"you should provide a specification object that contains
a render() method and can optionally contain other lifecycle methods"

"The render() function should be pure, meaning that it does not modify component state,
it returns the same result each time it's invoked,
and it does not read from or write to the DOM or otherwise interact with the browser
(e.g., by using setTimeout).
If you need to interact with the browser, perform your work in componentDidMount()
or the other lifecycle methods instead.
Keeping render() pure makes server rendering more practical and makes components easier to think about."



##### using ReactDOM.render

```
ReactDOM.render
```

"Render a ReactElement into the DOM in the supplied container"


#### How to compose Components

```
  render: function () {
    return (
      <div className="commentBox">
        <h1>comments</h1>
        <CommentList />
        <br/>
        <CommentForm />
      </div>
    );
  }
```

#### How to pass properties to a Component

at the parent level, we passed Pete Hunt (via an attribute) and This is one comment (via an XML-like child node)
to the first Comment

```
<Comment author="Pete Hunt">This is one comment</Comment>
```

At the child level, we use it
```
var Comment = React.createClass({
  render: function () {
    return (
      <div className="comment">
        <h2 className="commentAuthor"> {this.props.author} </h2>
        {this.props.children}
      </div>
    );
  }
});
```

#### How to understand the life cycle
```
JM - in getInitialState()
JM - in componentDidMount()
JM - in loadCommentsFromServer()
```
#### How to execute a function at a regular time

```
setInterval(function,milliseconds,param1,param2,...)
```
function: function that will be executed

millisecond:  The intervals (in milliseconds) on how often to execute the code

```
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
```


#### How to Generate a list dynamically from a local JSON
#### How to Fetch data from the server
