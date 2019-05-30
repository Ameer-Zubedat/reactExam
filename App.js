import React from 'react';
import ReactDOM from 'react-dom';
import TaskOneContactForm from './TaskOneContactForm';
export default class App extends React.Component{
render(){
return <>

<TaskOneContactForm />
</>;
}
}
ReactDOM.render(<App />, document.querySelector('#container'));