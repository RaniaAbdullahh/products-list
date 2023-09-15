import React, { Component } from 'react';

class addItem extends Component {
    state = {
        product: '',
        price: '',
        quantity: 1
    }

    handleChange = (e) => {
        console.log(e.target.id + ": " + e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.add(this.state)
        this.setState({
            product: '',
            price: '',
            quantity: 1
        })
    }

    increaser = () => {
        this.setState((prevState) => ({
            quantity: prevState.quantity + 1,
        }));

    }
    decrease = () => {
        if (this.state.quantity > 0) {
            this.setState((prevState) => ({
                quantity: prevState.quantity - 1,
            }));
        } else {
            this.setState((prevState) => ({
                quantity: 0,
            }));
        }

    }

    render() {
        return (
            <div className="item">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.product} placeholder="Enter Product" id="product" onChange={this.handleChange} required />
                    <input type="number" value={this.state.price} placeholder="Enter Price" id="price" onChange={this.handleChange} required />
                    {/* quantity */}
                    <div className="quantity">
                        <button type="button" className="qbtn" onClick={this.decrease}>-</button>
                        <input type="number" placeholder="Enter Quantity" id="quantity" value={this.state.quantity} onChange={this.handleChange} required />
                        <button type="button" className="qbtn" onClick={this.increaser}>+</button>
                    </div>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default addItem;