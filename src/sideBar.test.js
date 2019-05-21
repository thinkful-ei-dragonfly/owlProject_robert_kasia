
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
   it('renders without crashing', () => {
       // Render the component, as JSON
       const tree = renderer.create(<Sidebar />).toJSON();
       // Check whether it matches the previous snapshot
       // Stored in __snapshots__/App.test.js.snap
       expect(tree).toMatchSnapshot();
   });
});