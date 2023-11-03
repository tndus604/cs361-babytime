import avatar from "../img/baby.png";

export default function BabyProfile() {
  return (

    <div class="card-container">
      <div class="top-card">
        <img className="avatar" src={avatar} alt="profile picture" />
      </div>
      <div class="bottom-card">
        <h2 className="babyname">Baby Elijah</h2>
        <h3 className="birthday">October 28, 2022</h3>
      </div>
    </div>

    // <div className="baby-profile">
    //   <img className="avatar" src={avatar} alt="profile picture" />
    //   <div className="profileCard">
    //       <h2 className="babyname">Baby Elijah</h2>
    //       <h3 className="birthday">October 28, 2022</h3>
    //       <p className="weight"></p>
    //       <p className="weight"></p>
    //   </div>
    // </div>
  );
}