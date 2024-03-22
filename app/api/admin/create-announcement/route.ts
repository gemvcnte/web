import { addDoc, collection, query, where, getDocs } from "firebase/firestore"
import { db } from '../../../firebaseConfig'
import { log } from "console"
// import { getSession } from 'next-auth/react'



export async function POST(request: Request) {

  const { title, description} = await request.json()

  try {

    const announcementQuery = query(collection(db, 'announcements'), where('title', '==', title))
    const announcementSnapshot = await getDocs(announcementQuery)

    if (!announcementSnapshot.empty) {
      return new Response('Announcement already exists', {status: 400})

    }

    const newAnnouncement = {
      title,
      description,
      postedBy: 'admin'
    }

    const announcementRef = await addDoc(collection(db, 'announcements'), newAnnouncement)


    console.log('Document ID: ', announcementRef.id)
    return new Response('Announcement has been created', {status:201})

    // console.log('Document ID: ', announcementRef.id)

  } catch (error) {
    console.error(error)
    return new Response('Internal server error. Please try again later.', {status: 500})
  }

}
