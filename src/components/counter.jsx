import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        tags: [],
    };

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There is no tags!</p>
        return <ul> {this.state.tags.map((tag) => ( <li key={tag}>{tag}</li> ))} </ul>
    }
    
    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">increment</button>
                {this.renderTags()}
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;
