import { render } from '@testing-library/react';
import App from './App';
import { Theme } from './themes/theme';
import { Home } from './pages/Home';
import { Card, Modal, Navbar, Sidebar } from './components';

test('Render App Test', () => {
    render(<App />);
});

test('Render Home Test', () => {
    render(
      <Theme>
          <Home />
      </Theme>
    );
});

test('Render Navbar Test', () => {
    render(
      <Theme>
          <Navbar />
      </Theme>
    );
});

test('Render Modal Test', () => {
    render(
      <Theme>
          <Modal isOpen={true} description={""} seller={""} onClose={() => {}} />
      </Theme>
    );
});

test('Render Sidebar Test', () => {
    render(
      <Theme>
          <Sidebar initialContent={""} onContentChange={() => {}} />
      </Theme>
    );
});


test('Render Card Test', () => {
    const objTest = [{
        imageUrl: "https://static.lojanba.com/produtos/camiseta-regata-nba-adidas-swingman-chicago-bulls-rose/68/D13-0209-068/D13-0209-068_zoom1.jpg?ts=1600856952",
        seller: "Adidased",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 399.99,
        name: "Regata do Chicago Bulls"
    }];

    render(
        <Theme>
            <Card cardData={objTest} />
        </Theme>
    );
});
