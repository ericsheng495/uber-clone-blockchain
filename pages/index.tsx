import Navbar from "../components/Navbar";

const style = {
  wrapper: "h-screen w-screen flex flex-col",
};

export default function Home() {
  return (
    <div>
      <div className={style.wrapper}>
        {/* nav bar */}
        <Navbar />
        <div className={style.main}>{/* map */}</div>
        <div className={style.rideRequestContainer}>
          <div className={style.rideRequest}>
            {/* location selector  */}
            {/* confirm ride */}
          </div>
        </div>
      </div>
    </div>
  );
}
