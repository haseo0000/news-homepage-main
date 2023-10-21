import ItemsContent from "../components/itemsContent/itemsContent";
import MainContent from "../components/mainContent/mainContent";
import SideContent from "../components/sideContent/sideContent";

function Home() {
  return (
    <div className="home-layout">
      <MainContent />
      <SideContent />
      <ItemsContent />
    </div>
  );
}

export default Home;
