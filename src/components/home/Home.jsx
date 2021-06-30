import "./Home.css";
import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import Chart from "../chart/Chart";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    </div>
  );
}