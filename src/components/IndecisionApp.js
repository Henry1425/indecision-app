import React from 'react';
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
      options: [],
      selectedOption: undefined
    };
    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
        // this.state = {
        //     // // options:props.options Don't need anymore we are using local storage
        //     options: []
        // };
    // }

    closeModal = () => {
      this.setState(() => ({selectedOption: undefined}));
    }


    handleDeleteOptions = () => {
      this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToBeRemoved) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToBeRemoved !== option)
      }))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
          selectedOption: option
        }));
    }

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists. Try again:)'
        }
        this.setState((prevState) => ({
          options: prevState.options.concat(option)
        }));
      }

// Life cycle methods only available in class based components!
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (error) {
            // Do nothing :{O falls back to an empty array
        }
    }

    componentDidUpdate(prevProps, prevState ) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }

    }

    componentWillUnmount() {
        console.log('componentWillUnmount!')
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer!';

        return (
            <div>
                <div className= >
                <Header  subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                </div>
                <OptionModal
                  selectedOption={this.state.selectedOption}
                  closeModal={this.closeModal}
                />
            </div>
        );
    }
}
