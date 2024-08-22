import React from 'react';
export default class Timer extends React.Component{
    constructor(){
        super();
        console.log("TimerOne Constructor")  
    }

    static getDerivedStateFromProps(){
        console.log("TimerOne getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    render(){
        console.log("TimerOne render");
        return(<h1>Timer</h1>)
    }

    componentDidMount(){
        console.log("TimeOne componentDidMount");
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Timer getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("TimerOne componentDidUpdate");
    }
}

/*
*** CONSOLE ***
TimerOne Constructor
Warning: `Timer` uses `getDerivedStateFromProps` but its initial state is undefined. This is not recommended.
TimerOne getDerivedStateFromProps
TimerOne render
TimeOne componentDidMount

*** REASON ***
The update-related lifecycle methods (getSnapshotBeforeUpdate and componentDidUpdate) aren't printing in the console 
because the component isn't re-rendering after the initial render. These methods only run when the component's state 
or props change, which triggers a re-render.
In code, no state or props are changing, so no updates occur, and those methods don't get called. To trigger these 
methods, you'd need to update the state or receive new props that cause a re-render.
*/