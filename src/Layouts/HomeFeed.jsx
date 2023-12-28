import Sidebar from '../Components/sidebar/SideBar';
import Feed from '../Components/feed/Feed';
import Rightbar from '../Components/rightbar/Rightbar';

function HomeFeed() {
    return (
        <>
            <Sidebar></Sidebar>
            <Feed></Feed>
            <Rightbar></Rightbar>
        </>
    )
}

export default HomeFeed;

