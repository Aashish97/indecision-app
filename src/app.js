class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }


  componentDidMount() {
      try {
          const json = localStorage.getItem('options');
          const options = JSON.parse(json);

          if (options) {
              this.setState(() => ({ options }))
          }

      }catch(e){
          //Do nothing at all
      }
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }

  }

  componentWillUnmount(){
    console.log('componentWillMount')
  }

  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
        options: prevState.options.filter(option => {
            return optionToRemove !== option;
          }) 
        }));
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid option to add";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option is previously defined";
    }
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  }
  render() {
    const subtitle = "Put your life in hands of computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOption={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options} 
          hasOption={this.state.options.length > 0}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const Action = props => {
  return (
    <button onClick={props.handlePick} disabled={!props.hasOption}>
      What should I do?
    </button>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions } disabled={!props.hasOption}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button onClick={e => props.handleDeleteOption(props.optionText)}>
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    if(!error){
        e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
