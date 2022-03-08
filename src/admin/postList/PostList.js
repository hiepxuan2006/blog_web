import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getpost } from '../../api/store/actions/postAction';
import moment from "moment";

import Moment from 'react-moment'

import './PostList.scss'
function PostList(props) {
    const dispatch = useDispatch()
    const post = useSelector((state) => state.postReducer.post)
    useEffect(() => {
        const getAllPost = async () => {
            await dispatch(getpost())
        }
        getAllPost()
    }, [dispatch]);
    return (
        <div className='list'>
            <h1>Danh Sách Bài Đăng</h1>

            <table className="list__table">
                <tr>
                    <th>STT</th>
                    <th>Tiêu Đề</th>
                    <th>Danh Mục</th>
                    <th>Địa Điểm</th>
                    <th>Tác Giả</th>
                    <th>Ngày Tạo</th>
                    <th></th>
                </tr>
                {
                    post && post.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.place}</td>
                            <td>Germany</td>
                            <td><Moment titleFormat="DD MMM YYYY">
                                {item.createAt}
                            </Moment></td>
                            <td>
                                <button className='edit'>edit</button>
                                <button className='delete'>del</button>
                            </td>
                        </tr>

                    ))
                }

            </table>
        </div>
    );
}

export default PostList;