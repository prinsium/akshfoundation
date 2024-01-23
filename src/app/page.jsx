import Courses from '@/components/Courses';
import './globals.css'
import HomePage from "@/components/HomePage";
import Books from '@/components/Books';
import FAQs from '@/components/FAQs';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className='p-8'>
    <HomePage />
    <Courses />
    <Books />
    <Testimonials />
    <FAQs />
    </div>
  );
}
