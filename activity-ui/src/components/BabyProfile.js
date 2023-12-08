import avatar from "../img/baby.png";

export default function BabyProfile( {profile} ) {
  if (!profile || !profile.length) {
    return <p>No profile data available</p>;
  }

  // Check if profile[0] is defined before accessing its properties
  if (!profile[0]) {
    return <p>Invalid profile data</p>;
  }

  const lastProfile = profile[profile.length - 1];

  return (

    <div class="card-container">
      <div class="top-card">
        <img className="avatar" src={avatar} alt="profile" />
      </div>
      <div class="bottom-card">
        <h2 className="babyname">Name: {lastProfile.name}</h2>
        <h3 className="birthday">Birthday: {lastProfile.birthday}</h3>
      </div>
    </div>
  );
}