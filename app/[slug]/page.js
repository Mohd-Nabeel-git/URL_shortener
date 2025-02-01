import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const slug = (await params).slug
    const client = await clientPromise;
    const db = client.db("ZapLink");
    const collection = db.collection("URL")

    const check = await collection.findOne({shortURL: slug})
    if(check){
        redirect(check.URL)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
    return <div>My Post: {slug}</div>
  }