import "./User.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1509641/pexels-photo-1509641.jpeg?cs=srgb&dl=pexels-harsh-raj-gond-1509641.jpg&fm=jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Anna Klaus</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom"></div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
}
