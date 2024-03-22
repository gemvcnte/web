import { getDocs, collection, query,  } from "firebase/firestore";
import { db } from '../../../firebaseConfig';

export async function GET() {
  try {
    const adminRef = collection(db, 'admins');
    const adminSnapshot = await getDocs(adminRef);

    const admins = adminSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        fullName: data.fullName,
        emailAddress: data.emailAddress
      };
    });

    const adminsJSON = JSON.stringify(admins);

    return new Response(`Admins successfully retrieved: ${adminsJSON}`, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Internal server error. Please try again later.', { status: 500 });
  }
}

