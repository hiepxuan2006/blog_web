import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../api/store/actions/usersAction';
import moment from "moment";
import Moment from 'react-moment';

function UserList(props) {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.userReducer.users)
    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch])
    console.log(users);
    return (
        <div className='list'>
            <h1>Danh Sách Tài Khoản</h1>

            <table className="list__table">
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Ngày Tạo</th>
                    <th>Role</th>
                    <th></th>
                </tr>
                {
                    users && users.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.userName}</td>
                            <td>{item.email}</td>
                            <td>
                                <Moment titleFormat="DD MMM YYYY">
                                    {item.createAt}
                                </Moment>
                            </td>
                            <td>{item.role}</td>
                            <td>
                                <button className='edit'>edit</button>
                                <button className='delete'>delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default UserList;