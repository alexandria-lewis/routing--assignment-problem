import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }
    
    componentDidMount () {
        this.parseQueryParams();
    }
    // this component isn't unmounted and remounted, it's reused

    componentDidUpdate () {
        this.parseQueryParams();
    }
    // needed to add this when props change updates state

    parseQueryParams () {
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        console.log(query);
        for (let param of query.entries() ) {
            // to prevent an infinite loop
            if (this.state.courseTitle !== param[1]) {
                console.log(param);
                this.setState({courseTitle: param[1]});
            }
        }
    }

    render () {
        console.log("Course extends Component");
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
                {/* in a functional component would just be 'props.match.params.id' */}
            </div>
        );
    }
}

export default Course;