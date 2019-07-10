import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <div className="App">
        <ol style={{textAlign: 'left'}}>
          <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
          <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
          <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
          <li>Pass the course ID to the "Course" page and output it there</li>
          <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
          <li>Load the "Course" component as a nested component of "Courses"</li>
          <li>Add a 404 error page and render it for any unknown routes</li>
          <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
        </ol>
        <nav>
          <ul style={{listStyle: 'none', margin: 'auto', padding: '0'}}>
            <li style={{margin: '10px', display: 'inline-block'}}>
              {/* Don't use anchor tags because they reload the page */}
              <NavLink to="/courses">Courses</NavLink>
              {/* By default the active link will recieve the .active class

              added .active styles to index css for global effect

              don't need to add 'exact' because these path are treated like prefixes
              would be necessary if we used something like '/courses/1' which would also trigger '/courses'
              but this is fine */}
            </li>
            <li style={{margin: '10px', display: 'inline-block'}}>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/courses" exact component={Courses} />
        <Route path="/users" component={Users} />
        {/* need to wrap the component using routing, exposing the router
        
        could wrap the whole app component with BrowserRouter
        done in index.js */}

        <Route path="/courses/:courseId/:courseTitle" component={Course} />
        {/* Replacing 'course' with a parameter by adding :*paramName* */}

        {/* will load courses and course bellow because without switch by default the /course is treated as a prefix - to fix - add exact to /courses - or use a Switch statement but order matters */}

        {/* 
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/courses/course" component={Course} />
          <Route path="/courses" exact component={Courses} />
        </Switch>
        */}

      </div>
    );
  }
}

export default App;
