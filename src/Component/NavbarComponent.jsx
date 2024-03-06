import { Navbar } from 'flowbite-react';


function NavbarComponent() {
    return (
        <Navbar fluid rounded className=' w-full lg:px-40 md:px-30 sm:px-20 px-10 '>
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="/src/assets/react.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link  className=' text-lg ' href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link className=' text-lg ' href="#">
                    About
                </Navbar.Link>
                <Navbar.Link  className=' text-lg ' href="#">Services</Navbar.Link>
                <Navbar.Link  className=' text-lg ' href="#">Pricing</Navbar.Link>
                <Navbar.Link  className=' text-lg ' href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;