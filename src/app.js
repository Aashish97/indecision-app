console.log("App is running")

const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hands of computer',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
ReactDOM.render(template, appRoot);

renderCountTemplate();
