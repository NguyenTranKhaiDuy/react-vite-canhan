import { Link, NavLink } from 'react-router-dom';
import './header.css'

// thẻ a(anchor) - href sẽ load khi chuyển trang
// thẻ link - to không cần load
// =>> NavLink sẽ tự động css class="active" nào từng trang điều hướng tương ứng
const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
        </ul>
    )
}

export default Header;