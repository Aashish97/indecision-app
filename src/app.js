class IndecisionApp extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in hands of computer</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <button>What should I do</button>
        );
    }
}

class Options extends React.Component{
    render() {
        return (
            <div>
                <h3>Options</h3>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component{
    render() {
        return (
            <div>
                <h3>Add option here</h3>
            </div>
        );
    }
}

class AddOption extends React.Component{
    render() {
        return(
            <div>
                <p>Option 1</p>
                <p>Option 2</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));