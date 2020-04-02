class IndecisionApp extends React.Component{
    render(){
        const title= 'Indecision App';
        const subtitle= 'Put your life in hands of computer';
        const options = ['1','2','4'];

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption options={options}/>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    handlePick(){
        alert('handlePick clicked');
    }
    render(){
        return (
            <button onClick={this.handlePick}>What should I do</button>
        );
    }
}

class Options extends React.Component{
    handleRemoveAll(){
        alert('removeAll button clicked')
    }
    render() {
        return (
            <div>
                <button onClick= {this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map(option => <Option key= {option} optionText= {option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component{
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            alert('Add option clicked')
        }
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));