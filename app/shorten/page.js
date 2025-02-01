"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {
  const [URL, setURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [generate, setGenerate] = useState("");

  const handleClick = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "URL": URL,
      "shortURL": shortURL
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
        setURL("");
        setShortURL("");
        setGenerate(`${process.env.NEXT_PUBLIC_HOST}/${shortURL}`);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='mx-auto max-w-lg bg-blue-100 my-20 p-10 rounded-lg flex flex-col gap-5'>
      <h1 className='font-bold text-xl'>Generate your Short URL</h1>
      <div className='flex flex-col gap-2'>
        <input 
          className='focus:outline-blue-300 px-5 py-3 rounded-md' 
          type="text" 
          placeholder='Enter your URL' 
          value={URL} 
          onChange={(e) => setURL(e.target.value)} 
        />
        <input 
          className='focus:outline-blue-300 px-5 py-3 rounded-md' 
          type="text" 
          placeholder='Enter your preferred short URL' 
          value={shortURL} 
          onChange={(e) => setShortURL(e.target.value)} 
        />
      </div>
      <div className='text-center'>
        <button onClick={handleClick} className='border bg-blue-500 rounded-lg px-3 text-white'>GENERATE</button>
      </div>
      {generate && (
        <div className="mt-1 text-center">
          Generated URL: <Link className="text-blue-600" href={generate} target='_blank'>{generate}</Link>
        </div>
      )}
    </div>
  );
};

export default Page;
