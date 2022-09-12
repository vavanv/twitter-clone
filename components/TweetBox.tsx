import React, { useState, useRef } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline';

function TweetBox() {
  const { data: session } = useSession();

  const [input, setInput] = useState<string>('');
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<Boolean>(false);

  const inputImageRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex space-x-2 p-5">
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src={session?.user?.image || 'https://links.papareact.com/gll'}
        alt=""
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            onChange={e => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="What's Happening?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex space-x-2 text-twitter flex-1">
              <PhotographIcon
                onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)}
                className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
              />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button
              disabled={!input || !session}
              className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
          {imageUrlBoxIsOpen && (
            <form action="" className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4">
              <input
                ref={inputImageRef}
                className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
                type="text"
                placeholder="Enter Image URL..."
              ></input>
              <button type="submit" onClick={addImageToTweet} className="font-bold text-white">
                Add image
              </button>
            </form>
          )}
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
