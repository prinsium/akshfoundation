import Courses from '@/components/Courses';
import './globals.css'
import HomePage from "@/components/HomePage";
import Books from '@/components/Books';
import FAQs from '@/components/FAQs';
import Testimonials from '@/components/Testimonials';
import App from '@/components/App';

export default function Home() {
  return (
    <div className='p-2 md:p-8'>
    <div id="homepage">
    <HomePage />
    </div>

    <div id="courses">
    <Courses />
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
    
  );
}
