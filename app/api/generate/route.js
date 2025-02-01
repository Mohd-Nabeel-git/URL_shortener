import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("ZapLink");
    const collection = db.collection("URL")

    const check = await collection.findOne({shortURL: body.shortURL})
    if(check){
        return NextResponse.json({success:false, error:true, message:"Requested shortURL already in use!"})
    }

    const result = await collection.insertOne({
        URL: body.URL,
        shortURL: body.shortURL
    })

    return NextResponse.json({ success:true, error:false, message:"URL Generated successfully!"})
}
 