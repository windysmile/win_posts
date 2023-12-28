import { IconButton } from "@mui/material";
import Iconprofile from "../icon_profile/Iconprofile";
import './feed.scss'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

import Posts from "../posts/Posts";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { addFeeling, updateComment } from "../../Features/winDataSlice";
import EFeeling from "../../Features/enum";
import Comments from "../comments/Comments";


function Feed() {
    const userInfo = useSelector((params) => params.profile.profileInfo);
    const feedPosts = useSelector((params) => params.posts);
    const menuIndex = useSelector((params) => params.menuIndex);
    console.log(menuIndex)
    const dispatch = useDispatch();

    const handleOpenComments = (obj) => dispatch(updateComment(obj));

    const handleFeeling = (obj) => {
        dispatch(addFeeling({
            actionPerson: { person: userInfo, feeling: EFeeling.Like },
            post: obj
        }))
    }

    const boxFeelingContent = (objPost) => {
        return <div className="feeling-content">
            <div className="icon-feeling">
                {objPost.feeling.like > 0 && <ThumbUpAltIcon className="icon" fontSize="small"></ThumbUpAltIcon>}
            </div>
            <div className="action-person">
                <span>You</span>
            </div>
        </div>;
    }

    const boxCounterComments = (objPost) => {
        return <div className="comments-counter-content">
            <div className="counter-text">
                <span>{objPost.comments.length}</span>
                <span>Comment</span>
            </div>
        </div>;
    }

    const boxPostsContent = feedPosts.slice().reverse().map((obj) =>
        <div className="box-posts" key={obj}>
            <div className="owner">
                <Iconprofile size={'35px'} profile={obj.actionPerson}></Iconprofile>
                <div className="owner-swrapper">
                    <div className="fullname">
                        <span>Wuttipong Sangtamat</span>
                    </div>
                    <div className="posts-date">
                        <span>{moment(obj.date).calendar()}</span>
                    </div>
                </div>
            </div>
            <div className="posts-content">
                <div className="text-content">
                    <span>{obj.text}</span>
                </div>
            </div>
            <div className="show-person-action">
                {obj.feelingActionPerson.length > 0 && boxFeelingContent(obj)}
                {obj.comments.length > 0 && boxCounterComments(obj)}
            </div>
            <div className="like-comment-share">
                <IconButton onClick={() => handleFeeling(obj)}>
                    <ThumbUpOffAltIcon className="icon" fontSize="small" />
                    <span>Like</span>
                </IconButton>
                <IconButton onClick={() => handleOpenComments(obj)}>
                    <ChatBubbleOutlineIcon className="icon" fontSize="small" />
                    <span>Comment</span>
                </IconButton>
                <IconButton>
                    <ShareIcon className="icon" fontSize="small" />
                    <span>Share</span>
                </IconButton>
            </div>
            {obj.isOpenComment &&
                <Comments posts={obj}></Comments>
            }
        </div>
    );

    return (
        <div className="feed-swrapper">
            {menuIndex !== 2 &&
                <>
                    <div className="posts">
                        <Posts></Posts>
                        <div className="mode-post-media">
                            <IconButton className="button-media">
                                <VideoLibraryIcon className="icon" fontSize="large" />
                                <span>Live Video</span>
                            </IconButton>
                            <IconButton className="button-media">
                                <PhotoLibraryIcon className="icon" fontSize="large" />
                                <span>Photo/Video</span>
                            </IconButton>
                            <IconButton className="button-media">
                                <SentimentSatisfiedAltIcon className="icon" fontSize="large" />
                                <span>Feeling/Activity</span>
                            </IconButton>
                        </div>
                    </div>
                    <div className="posts-view">
                        {menuIndex === 0 && boxPostsContent}
                    </div>
                </>
            }
        </div>
    )
}

export default Feed;