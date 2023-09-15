import Link from 'next/link';
import StudentInfo from './studentinfo.jsx';

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <p>
      <Link href="/week2"> Week 2 </Link>
      </p>
    </main>
  )
}