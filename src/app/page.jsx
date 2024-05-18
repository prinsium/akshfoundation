import "./globals.css";
import Books from "@/components/Books";
import FAQs from "@/components/FAQs";
import Testimonials from "@/components/Testimonials";
import App from "@/components/App";
import Mainpage from "@/components/Mainpage";
import Course from "@/components/Course";

export default function Home() {
  return (
    <>
      <div id="homepage">
        <Mainpage />
      </div>

      <div className="p-2 md:p-8">
        <div id="courses">
          <Course />
        </div>

        <div id="books">
          <Books />
        </div>

        <div id="app">
          <App />
        </div>

        <Testimonials />
        <FAQs />
      </div>
    </>
  );
}
