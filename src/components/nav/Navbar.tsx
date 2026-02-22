import './Navbar.css';
import {useEffect, useRef, useState} from "react";
import {NavLink} from "react-router-dom";

function useOnClickOutside(ref: any, handler: (event: MouseEvent) => void) {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (!ref.current || ref.current.contains(event.target)) return;
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        return () => document.removeEventListener("mousedown", listener);
    }, [ref, handler]);
}

function Burger({open, setOpen}: { open: boolean; setOpen: (open: boolean) => void }) {
    return (
        <button
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
        >
            <div/>
            <div/>
            <div/>
        </button>
    );
}
const routes = [
    {label: 'Home', path: '/home'},
    {label: 'Education', path: '/education'},
    {label: 'Solutions', path: '/solutions'},
    {label: 'Contact', path: '/contact'},
    {label: 'About', path: '/about'},
];

function Menu({open, onClick}: { open: boolean; onClick: () => void }) {
    return (
        <ul className={`burger-menu ${open ? "open" : ""}`}>
            {routes.map(route => (
                <NavLink
                    key={route.path}
                    to={route.path}
                    onClick={onClick}
                    className={({ isActive }) => isActive ? "active-link" : undefined}
                >
                    {({ isActive }) => (
                        <li className={isActive ? "active" : undefined}>
                            <span>{route.label}</span>
                        </li>
                    )}
                </NavLink>
            ))}
        </ul>
    );
}

function MenuOptions({ onClick }: { onClick: () => void }) {
    return (
        <ul>
            {routes.map(route => (
                <NavLink
                    key={route.path}
                    to={route.path}
                    onClick={onClick}
                    className={({ isActive }) => isActive ? "active-link" : undefined}
                >
                    {({ isActive }) => (
                        <li className={isActive ? "active" : undefined}>
                            <span>{route.label}</span>
                        </li>
                    )}
                </NavLink>
            ))}
        </ul>
    );
}

function Navbar() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useOnClickOutside(menuRef, () => setOpen(false));

    return (
        <nav>
            <section id="mobile-menu">
                <div ref={menuRef}>
                    <Burger open={open} setOpen={setOpen}/>
                    <Menu open={open} onClick={() => setOpen(false)}/>
                </div>
            </section>

            <section id="default-menu">
                <MenuOptions onClick={() => setOpen(false)}/>
            </section>

            <hr/>
        </nav>
    );
}

export default Navbar;