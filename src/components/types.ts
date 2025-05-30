export interface Tweet {
  account_creation_date: string;
  account_language: string;
  follower_count: string;
  following_count: string;
  hashtags: string;
  in_reply_to_tweetid: string;
  in_reply_to_userid: string;
  is_retweet: string;
  latitude: string;
  like_count: string;
  longitude: string;
  quote_count: string;
  quoted_tweet_tweetid: string;
  reply_count: string;
  retweet_count: string;
  retweet_tweetid: string;
  retweet_userid: string;
  tweet_client_name: string;
  tweet_language: string;
  tweet_text: string;
  tweet_time: string;
  tweetid: string;
  urls: string;
  user_display_name: string;
  user_mentions: string;
  user_profile_description: string;
  user_profile_url: string;
  user_reported_location: string;
  user_screen_name: string;
  userid: string;
}

export interface ApiResponse {
  total: number;
  tweets: Tweet[];
}
