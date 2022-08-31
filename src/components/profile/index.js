import { useSelector } from "react-redux/es/hooks/useSelector";
import {GoLocation} from "@react-icons/all-files/go/GoLocation"
import "./style.scss"
function Profile (){
    const user = useSelector(state => state.users.user)  
    return(
            <div className="profile-item-wrap">
                <div className="profile-item">
                    <div className="profile-item-img-wrap">
                        <img className="profile-item-img" src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png"></img>
                    </div>
                    <div className="profile-info-wrap">
                        <div className="profile-info-name">
                            <p className="profile-name">{user.name} {user.surname}</p>
                        </div>
                        <div className="profile-info-data-wrap">
                            <p className="profile-info-data-prof">{user.profesion} from {user.fromLocation}</p>
                        </div>
                        <div className="profile-info-location">
                            <p className="profile-location"><GoLocation/> {user.location}</p>
                        </div>
                        <div className="profile-info-counts">
                            <div className="profile-info-counts-item">
                                <h3 className="profile-info-counts-item-count">{user.followerers}</h3>
                                <p className="profile-info-counts-item-description">Followers</p>
                            </div>
                            <div className="profile-info-counts-item">
                                <h3 className="profile-info-counts-item-count">{user.following}</h3>
                                <p className="profile-info-counts-item-description">Following</p>
                            </div>
                            <div className="profile-info-counts-item">
                                <h3 className="profile-info-counts-item-count">{user.articales}</h3>
                                <p className="profile-info-counts-item-description">Articales</p>
                            </div>
                            <div className="profile-info-counts-item">
                                <h3 className="profile-info-counts-item-count">{user.posts}</h3>
                                <p className="profile-info-counts-item-description">Posts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Profile