import Header from "../components/layout/Header";
import AboutHero from "../components/ui/AboutHero";
import ProfileFeatures from "../components/ui/ProfileFeatures";
import Footer from "../components/layout/Footer";
import CVModal from "./components/ui/CVModal";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-gray text-slate-800">
      <Header />
      <main className="flex-grow">
        <AboutHero />
        <ProfileFeatures />
      </main>
      <Footer />
      <CVModal />
    </div>
  );
}

export default App;
