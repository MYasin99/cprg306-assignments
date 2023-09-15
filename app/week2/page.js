import Link from 'next/link';
import StudentInfo from '../studentinfo.jsx';

export default function Page() {
  return (
    <main>
        <h1>My Shopping List</h1>
        <StudentInfo/>
        <p>
            <Link href="/"> Home </Link>
        </p>
    </main>
  );
}