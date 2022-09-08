import React from 'react';
import TimeAgo from 'react-timeago';
import { Tweet } from '../typings';

interface Props {
  tweet: Tweet;
}

function Tweet({ tweet }: Props) {
  return (
    <div>
      <div className="flex space-x-3">
        <img className="h-10 w-10 rounded-full object-cover" src={tweet.profileImg} alt="" />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, '').toLowerCase()}
            </p>
            <TimeAgo className="text-sm text-gray-500" date={tweet._createdAt} />
          </div>
          <p>{tweet.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
