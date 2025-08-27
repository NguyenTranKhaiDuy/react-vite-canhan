import { Link } from 'react-router-dom';
import './header.css'

// thẻ a(anchor) - href sẽ load khi chuyển trang
// thẻ link - to không cần load
const Header = () => {
    return (
        <ul>
            <li><Link class="active" to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>
    )
}

export default Header;