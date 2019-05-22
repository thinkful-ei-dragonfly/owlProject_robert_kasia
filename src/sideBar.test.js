
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
   it('renders without crashing', () => {
       // Render the component, as JSON
       const tree = renderer.create(<Sidebar id="1" name="Rob" avatar="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjEo9OK3K3iAhUKc98KHWC7AJ8QjRx6BAgBEAU&url=https%3A%2F%2Fedecorati.com%2Fw%2Fflower-images-hd.html&psig=AOvVaw3BggLjgxan2CvnqEIKKMsi&ust=1558565731019423" inSession="true" onStage="false" />).toJSON();
       // Check whether it matches the previous snapshot
       // Stored in __snapshots__/App.test.js.snap
       expect(tree).toMatchSnapshot();
   });
});