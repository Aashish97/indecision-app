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
            </div>
        );
    }
}

class Option extends React.Component{
    render() {
        return(
            <div>
                <p>Option 1</p>
                <p>Option 1</p>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <Option />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));