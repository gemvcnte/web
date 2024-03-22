import { getFirestore, collection, query, doc, getDocs, where } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import * as bcrypt from 'bcrypt'

export async function POST(request: Request) {
  const { emailAddress, password } = await request.json();

  try {
    const adminsRef = collection(db, "admins");
    const q = query(adminsRef, where("emailAddress", "==", emailAddress));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return new Response('Admin not found', { status: 404 });
    }

    const adminDoc = querySnapshot.docs[0]; // Assuming only one admin
    const adminData = adminDoc.data();
    const storedPasswordHash = adminData.password;
 
    // Compare the provided password's hash with the stored hash
    if (await bcrypt.compare(password, storedPasswordHash)) {
      // Login successful
      return new Response('Login successful!', { status: 200 });
    } else {
      return new Response('Invalid password', { status: 401 });
    }
  } catch (error) {
    console.error(error);
    return new Response('Internal server error', { status: 500 });
  }
}
