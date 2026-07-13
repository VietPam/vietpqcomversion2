import Header from "../components/layout/Header";
import AboutContent from "../components/ui/AboutContent";
import Footer from "../components/layout/Footer";
import CVModal from "./components/ui/CVModal";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-gray text-slate-800">
      <Header />
      <main className="flex-grow">
        <AboutContent />
      </main>
      <Footer />
      <CVModal />
    </div>
  );
}

export default App;
