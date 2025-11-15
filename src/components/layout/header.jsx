import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, HomeOutlined, ProductOutlined, SettingOutlined, LoginOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { Menu, message } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { logoutUserAPI } from '../../services/api.service';

// thẻ a(anchor) - href sẽ load khi chuyển trang
// thẻ link - to không cần load
// =>> NavLink sẽ tự động css class="active" nào từng trang điều hướng tương ứng
const Header = () => {
    const [current, setCurrent] = useState('');

    const { user, setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const onClick = (e) => {
        setCurrent(e.key);
    };

    const handleLogout = async() => {
        const res = await logoutUserAPI();
        if (res.data) {
            // clear data
            localStorage.removeItem("access_token");
            setUser({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: ""
            })
            message.success("Logout thành công.");

            // redirect to home
            navigate("/");

        }
    }

    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UserOutlined />,
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <ProductOutlined />,
        },

        ...(!user.id ? [{
            label: <Link to={'/login'}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />,
        }] : []),

        ...(user.id ? [
            {
                label: `Welcome ${user.fullName}`,
                key: 'setting',
                icon: <AliwangwangOutlined />,
                children: [
                    {
                        label: <span onClick={() => handleLogout()}>Đăng xuất</span>,
                        key: 'logout',
                    },
                ],
            }] : []),
    ];

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    )
}

export default Header; 