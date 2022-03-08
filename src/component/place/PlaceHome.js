import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostPlace } from '../../api/store/actions/postAction';
import Loading from '../Loading/Loading';
import PlaceItem from './PlaceItem';

function PlaceHome(props) {
    const loading = useSelector(state => state.postReducer.loading)

    const dispatch = useDispatch()
    const postPlace = useSelector((state) => state.postReducer.postPlace)
    useEffect(() => {
        const getPlace = async () => {
            await dispatch(getPostPlace())

        }
        getPlace()
    }, [dispatch])
    return (
        <>
            {
                loading ? <Loading /> :
                    (<div className="grid wide">
                        <div className="diadiem__heading">
                            <h1>Lựa chọn thành phố mà bạn muốn đến</h1>
                        </div>
                        <div className="row">
                            {
                                postPlace && postPlace.map((post, index) => (

                                    <PlaceItem post={post} index={index} />
                                ))
                            }
                        </div>
                    </div >)

            }</>
    );
}

export default PlaceHome;