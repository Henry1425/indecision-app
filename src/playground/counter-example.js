class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
// count:props.count Don't need anymore we are using local storage
            count: 0
        };
    }

    componentDidMount() {
        const numString = localStorage.getItem('count');
        const count = parseInt(numString, 10);
        if (!isNaN(count)) {
            this.setState(() => ({count}));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count ) {
            localStorage.setItem('count', this.state.count)
        }
    }


    handleAddOne() {
        this.setState((prevState) => {

            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        });

    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }


    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>

        );
    }
}
// Don't need anymore we are using local storage
// Counter.defaultProps = {
//     count: 100
// };

ReactDOM.render(
    <Counter />,
    document.getElementById('app')
);




// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const subOne = () => {
//     count--;
//     renderCounterApp();
// }

// const resetButton = () => {
//    count = 0;
//    renderCounterApp();
// }


// // console.log(templateTwo);

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count} </h1>
//             <button onClick={addOne} className="button">+1</button>
//             <button onClick={subOne} className="button">-1</button>
//             <button onClick={resetButton} className="button">Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// const appRoot = document.getElementById('app');
// renderCounterApp();