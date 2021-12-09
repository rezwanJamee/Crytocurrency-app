import { shallow } from 'enzyme';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

describe('Cryptocurrency app test', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Homepage />);
  });

  // test 1
  test('Check the homepage contains <h3> title', () => {
    expect(wrapper.find('h3').text()).toContain("Frontend Developer Coding Challenge");
  });

  // test 2
  test('Check footer component copyright icon', () => {
    const component = shallow(<Footer />)
    expect(component.find('p').text()).toContain("© Copyright");
  });

});

