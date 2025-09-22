import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../services/api.service';

const UserPage = () => {

    // sử dụng lift-up state để đẩy lên cha, cha chia sẽ dữ liệu cho con
    const [dataUsers, setDataUsers] = useState([]);

    // empty array(rong) => run once 
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }

    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers} />
        </div >
    )
}
export default UserPage;