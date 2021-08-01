import React from "react";
import CreateTweet from "./createtweet";
import Post from "./Post";

const Twitts = () => {
  return (
    <div className="posts">
      <div className="posts__home">Homes</div>
      <CreateTweet />
      <Post
        logo="/images/umeshl.jpg"
        img="/images/umesh6.jpg"
        name="Umesh Patel"
        username="@umesh"
        minut={`${9}day`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/Msdl.jpg"
        img="/images/Msd1.jpg"
        name="MSD"
        username="@msd"
        minut={`${10}day`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/viratl.jpg"
        img="/images/virat1.jpg"
        name="Virat Kohali"
        username="@virat"
        minut={`${11}day`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/umeshl.jpg"
        img="/images/umesh5.jpg"
        name="Umesh Patel"
        username="@umesh"
        minut={`${20}day`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/sonaxi.jpg"
        img="/images/sonaxi1.jpg"
        name="Sonaxi Sinha"
        username="@sonaxi"
        minut={`${13}day`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/shivraj.jpeg"
        img="/images/shivraj2.jpeg"
        name="Shivraj Singh"
        username="@shivraj"
        minut={`${14}day`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/umeshl.jpg"
        img="/images/umesh2.jpg"
        name="Umesh Patel"
        username="@umesh"
        minut={`${15}day`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/PM.jpg"
        img="/images/PM1.jpg"
        name="Narendra Modi"
        username="@narendra"
        minut={`${15}day`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/umeshl.jpg"
        img="/images/umesh4.jpg"
        name="Umesh Patel"
        username="@umesh"
        minut={`${20}day`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/viratl.jpg"
        img="/images/virat.jpg"
        name="Virat Kohali"
        username="@virat"
        minut={`${20}day`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/Msdl.jpg"
        img="/images/Msd.jpg"
        name="MSD"
        username="@msd"
        minut={`${25}day`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/sonaxi.jpg"
        img="/images/sonaxi.jpg"
        name="Sonaxi Sinha"
        username="@sonaxi"
        minut={`${29}day`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/shivraj.jpeg"
        img="/images/shivraj.jpeg"
        name="Shivraj Singh"
        username="@shivraj"
        minut={`${1}month`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/PM.jpg"
        img="/images/PM.jpg"
        name="Narendra Modi"
        username="@narendra"
        minut={`${1}month`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/logo.png"
        img="/images/logo.png"
        name="Rupesh Patel"
        username="@rupesh"
        minut={`${29}day`}
        like="100k"
        comment="20k"
        Leaf={100}
        char={500}
      />
      <Post
        logo="/images/logo.png"
        img="/images/cricket.png"
        name="Umesh patel"
        username="@umesh"
        minut={`${17}h ago`}
        like="30k"
        comment="5k"
        Leaf={100}
        char={40}
      />
      <Post
        logo="/images/varunDhawan.jpg"
        img="/images/varunDhawan.jpg"
        name="Varun Dhawan"
        username="@varundhawan"
        minut={`${10}m ago`}
        like="50k"
        comment="10k"
        Leaf="3k"
        char={500}
      />
      <Post
        logo="/images/Deepika.jpg"
        img="/images/Deepika.jpg"
        name="Deepika Padukon"
        username="@deepikapadukon"
        minut={`${5}day ago`}
        like="400k"
        comment="100k"
        Leaf="60k"
        char="5k"
      />
      <Post
        logo="/images/Tapasi.png"
        img="/images/Tapasi.png"
        name="Tapasi Pannu"
        username="@tapasipannu"
        minut={`${8}day ago`}
        like="1m"
        comment="300k"
        Leaf="100k"
        char="10k"
      />
      <Post
        logo="/images/Ranveer.png"
        img="/images/Ranveer.png"
        name="Ranveer Singh"
        username="@ranveerSingh"
        minut={`${1}day ago`}
        like="40k"
        comment="3k"
        Leaf={900}
        char={109}
      />
    </div>
  );
};

export default Twitts;
