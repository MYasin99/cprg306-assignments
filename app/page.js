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
      <p>
      <Link href="/week3"> Week 3 </Link>
      </p>
      <p>
      <Link href="/week4"> Week 4 </Link>
      </p>
    </main>
  )
}