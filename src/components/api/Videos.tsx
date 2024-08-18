import React, { useState, useEffect } from "react";
import axios from "axios";

interface VideoData {
  // Define your video data structure here
  id: number;
  url: string;
  // ... other properties
}

function VideosJSON() {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/your-api-endpoint"); // Replace with your API endpoint
        const data: { videos: VideoData[] } = response.data; // Assuming the response contains a 'videos' array
        setVideos(data.videos);
      } catch (error) {
        console.error("There was an unexpected error with fetchin", error);
        setError("Failed to fetch video data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // ... rest of your component
}

export default VideosJSON;
