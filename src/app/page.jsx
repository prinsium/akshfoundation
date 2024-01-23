import Courses from '@/components/Courses';
import './globals.css'
import HomePage from "@/components/HomePage";
import Books from '@/components/Books';

export default function Home() {
  return (
    <div className='p-8'>
    <HomePage />
    <Courses />
    <Books />
    
    </div>
  );
}
