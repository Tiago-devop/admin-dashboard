import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/937658/pexels-photo-937658.jpeg?cs=srgb&dl=pexels-lena-hsvl-937658.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Julia Meire</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/937658/pexels-photo-937658.jpeg?cs=srgb&dl=pexels-lena-hsvl-937658.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Julia Meire</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/937658/pexels-photo-937658.jpeg?cs=srgb&dl=pexels-lena-hsvl-937658.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Julia Meire</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/937658/pexels-photo-937658.jpeg?cs=srgb&dl=pexels-lena-hsvl-937658.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Julia Meire</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/937658/pexels-photo-937658.jpeg?cs=srgb&dl=pexels-lena-hsvl-937658.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Julia Meire</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
