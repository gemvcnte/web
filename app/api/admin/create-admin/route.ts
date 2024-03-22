import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import * as bcrypt from 'bcrypt';

export async function POST(request: Request) {
  const { fullName, emailAddress, password } = await request.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Check if admin with the same email already exists
    const adminQuery = query(collection(db, 'admins'), where('emailAddress', '==', emailAddress));
    const adminSnapshot = await getDocs(adminQuery);

    if (!adminSnapshot.empty) {
      return new Response('Admin already exists', { status: 400 });
    }

    // Create new admin
    const newAdmin = {
      fullName,
      emailAddress,
      password: hashedPassword,
    };
    const adminRef = await addDoc(collection(db, 'admins'), newAdmin);

    console.log("Request Data: ", request.body);
    console.log('Hashed Password: ', hashedPassword);
    console.log('New Admin: ', newAdmin);
    console.log('Document ID: ', adminRef.id);

    return new Response('Admin created', { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response('Internal server error. Please try again later.', { status: 500 });
  }
}

