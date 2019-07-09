import React, { Component } from 'react';

class Course extends Component {
    render () {
        return (
            <div>
                <h1>_COURSE_TITLE_</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
                {/* in a functional component would just be 'props.match.params.id' */}
            </div>
        );
    }
}

export default Course;