import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }
    
    componentDidMount () {
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        console.log(query);
        // URLSearchParams allows us to create an iterator (array)
        // .entries available on the URLSearchParams element
        // we can now loop through it
        for (let param of query.entries() ) {
            console.log(param);
            this.setState({courseTitle: param[1]})
        }
    }

    render () {
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