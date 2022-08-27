import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin"
import {IoLogoGoogleplus} from "@react-icons/all-files/io/IoLogoGoogleplus"
import {GrTwitter} from "@react-icons/all-files/gr/GrTwitter"

function FooterMiddle (){
return(
<div className="footer-middle-wrap">
    <div className="footer-middle-container">
        <div className="like-wrap footer-middle-item">
            <div className="footer-like-title footer-middle-title"><h3>facebook</h3></div>
            <div className="footer-like-members">
                <span className="footer-like-members-text">20000 Members</span>
                <button className="footer-like-members-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/640px-Facebook_Thumb_icon.svg.png"></img> Like</button>
            </div>
            <div className="footer-like-members-avatar">
                <div className="footer-like-members-avatar-item"><img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-07.jpg"></img></div>
                <div className="footer-like-members-avatar-item"><img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-06.jpg"></img></div>
                <div className="footer-like-members-avatar-item"><img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-04.jpg"></img></div>
                <div className="footer-like-members-avatar-item"><img src="https://cdn.mos.cms.futurecdn.net/THCiUmVZcgxHodGCK3EyYo.jpg"></img></div>
                <div className="footer-like-members-avatar-item"><img src="https://static.generated.photos/vue-static/face-generator/landing/demo-previews/sex.jpg"></img></div>
                <div className="footer-like-members-avatar-item"><img src="https://static.generated.photos/vue-static/face-generator/landing/wall/7.jpg"></img></div>
                <div className="footer-like-members-avatar-item"><img src="https://static.generated.photos/vue-static/face-generator/landing/demo-previews/skin-tone.jpg"></img></div>
                <div className="footer-like-members-avatar-item"><img src="https://images.generated.photos/ULY0hGog-fvXFtR1wPhD5FfkL4hRYyeJphE0keXvOtw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTI1NDQ2LmpwZw.jpg"></img></div>
            </div>
            <div className="footer-like-members-avatar-text"><span>facebook Social plugin</span></div>
        </div>
        <div className="from-twitter-wrap footer-middle-item">
            <div className="footer-from-twitter-title footer-middle-title"><h3>from twitter</h3></div>
            <div className="footer-from-twiter-text">
                <div className="twitter-icon"><GrTwitter style={{color: '#39a0b9'}}/></div>
                <div className="footer-from-twiter-description">
                    <span><p className="normal-text">Lorem Ipsum is simply dummy text of the printing and <span className="transpatent-text">typesetting industry. Lorem Ipsum</span> Has been the</p></span>
                </div>
            </div>

            <div className="footer-from-twiter-text">
                <div className="twitter-icon"><GrTwitter style={{color: '#39a0b9'}}/></div>
                <div className="footer-from-twiter-description">
                    <p className="normal-text">Lorem Ipsum is simply dummy text of the printing and <span className="transpatent-text">typesetting industry. Lorem Ipsum</span> Has been the</p>
                </div>
            </div>
        </div>

        <div className="footer-information-wrap footer-middle-item">
            <div className="footer-information-title footer-middle-title"><h3>information</h3></div>
            <div className="information-list-wrap">
                <div className="information-list-item"><FontAwesomeIcon icon={faAngleRight} /> <span>Seed utrices purus non.</span> </div>
                <div className="information-list-item"><FontAwesomeIcon icon={faAngleRight} /> <span>Sodales sodales.</span></div>
                <div className="information-list-item"><FontAwesomeIcon icon={faAngleRight} /> <span>Curabitur pretium dui vitae</span>.</div>
                <div className="information-list-item"><FontAwesomeIcon icon={faAngleRight} /> <span>Donec gravida mi in nisl.</span></div>
                <div className="information-list-item"><FontAwesomeIcon icon={faAngleRight} /> <span>Faucibus leo condimentrum.</span></div>
                <div className="information-list-item"><FontAwesomeIcon icon={faAngleRight} /> <span>Donec et lorem suscipit</span></div>
            </div>
        </div>

        <div className="footer-contant-wrap footer-middle-item">
            <div className="footer-contant-title footer-middle-title"><h3>contact us</h3></div>
            <div className="contact-information-wrap">
                <p className="contact-information-item">Leo Store</p>
                <p className="contact-information-item">Leopards media</p>
                <p className="contact-information-item">KVM Rpad, 4590GH</p>
                <p className="contact-information-item">+1 489-8888-0099</p>
                <p className="contact-information-item">mail@email.com</p>
            </div>
            <div className="contact-icons">
                <div className="contact-icons-item"><FaFacebook/></div>
                <div className="contact-icons-item"><AiFillLinkedin/></div>
                <div className="contact-icons-item"><IoLogoGoogleplus/></div>
            </div>
        </div>
    </div>
</div>
)
}

export default FooterMiddle