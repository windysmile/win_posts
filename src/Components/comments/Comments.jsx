import { useState } from 'react';
import './comments.scss'
import InputEmoji from "react-input-emoji";
import Iconprofile from '../icon_profile/Iconprofile';
import { useSelector, useDispatch } from 'react-redux';
import { addComments } from '../../Features/winDataSlice';
import moment from "moment";

function Comments(posts) {
    const userInfo = useSelector((params) => params.profile.profileInfo);
    const dispatch = useDispatch();

    const addComment = (e) => {
        dispatch(addComments({
            ...posts,
            comment: {
                actionPerson: userInfo,
                text: e,
                date: moment().format()
            }
        }))
    }

    const commentsList = posts.posts.comments?.map((comment, index) =>
        <div className="comments-view" key={index}>
            <Iconprofile size={'35px'} profile={comment.actionPerson}></Iconprofile>
            <div className="text-comment">
                <div className='text'>
                    <span>{comment.text}</span>
                </div>
                <div className='date'>
                    <span>{moment(comment.date).calendar()}</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="comment-content">
            <div className='comments-swrapper'>{commentsList}</div>
            <div className="add-comment">
                <Iconprofile size={'35px'} profile={userInfo}></Iconprofile>
                <InputEmoji
                    value={''}
                    cleanOnEnter
                    onEnter={addComment}
                    placeholder="What are you thinking?">
                </InputEmoji>
            </div>
        </div>
    )
}

export default Comments;