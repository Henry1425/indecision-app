class Vistogglebutton extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVis = this.handleToggleVis.bind(this);
        this.state = {
            showDetail: false
        };

    }

    handleToggleVis() {
        this.setState((prevState) => {
            return {
                showDetail: !prevState.showDetail
            }
        })
        // if (this.state === true) {
        //     return this.setState(() => {
        //         return <p>Hey. Here is your hidden detail!</p>
        //     })
        // }
    }

    render() {
        return (
            <div>
                <h1>Visability Togggle App</h1>
                <button onClick={this.handleToggleVis}>{this.state.showDetail ? 'Hide details' : 'show details'}</button>
                {this.state.showDetail && (
                    <div>
                        <p>Hey. Here is your hidden detail!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Vistogglebutton />,
    document.getElementById('app')
);





// let showDetail = false;

// const toggleDetails = () => {
//     showDetail = !showDetail;
//     visToggleButton();
// }

// const visToggleButton = () => {
//     const renderPTag = (
//         <div>
//             <h1>Visability Toggle</h1>
//             <button onClick={toggleDetails}>
//             {showDetail ? 'Hide details' : 'show details'}
//             </button>
//             {showDetail && (
//                 <div>
//                     <p>Hey. Here is your hidden detail!</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(renderPTag, document.getElementById('app'));
// };

// visToggleButton();
