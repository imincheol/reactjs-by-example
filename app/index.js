/**
 * Created by imincheol on 2017. 2. 19..
 */
var React = require('react');
var ReactDom = require('react-dom');

if ( module.hot ) {
    module.hot.accept();
}

ReactDom.render(
    <div>Hello World</div>, document.getElementById('app')
);
