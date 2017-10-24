import Enzyme from 'enzyme'; // eslint-disable-line
import Adapter from 'enzyme-adapter-react-15'; // eslint-disable-line

Enzyme.configure({ adapter: new Adapter() });

// fixed jsdom miss
if (typeof window !== 'undefined') {
  const matchMediaPolyfill = function matchMediaPolyfill() {
    return {
      matches: false,
      addListener() {
      },
      removeListener() {
      },
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}
