"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Reviews = () => {
  const dummyReviews = [
    {
      reviewId: "1",
      reviewer: { displayName: "Emily Parker" },
      starRating: 5,
      comment:
        "Absolutely loved the experience! Everything was smooth, quick, and professional. Highly recommend!",
      createTime: "2025-01-12T10:30:00Z",
    },
    {
      reviewId: "2",
      reviewer: { displayName: "James Wilson" },
      starRating: 4,
      comment:
        "Great service overall. A few small hiccups, but the team handled everything really well.",
      createTime: "2025-02-03T14:15:00Z",
    },
    {
      reviewId: "3",
      reviewer: { displayName: "Sarah Johnson" },
      starRating: 5,
      comment:
        "Professional, friendly, and super responsive. I’m thrilled with how everything turned out!",
      createTime: "2025-02-25T09:50:00Z",
    },
    {
      reviewId: "4",
      reviewer: { displayName: "Michael Smith" },
      starRating: 4,
      comment: "Really good experience. Would definitely come back again.",
      createTime: "2025-03-10T12:05:00Z",
    },
    {
      reviewId: "5",
      reviewer: { displayName: "Ashley Brown" },
      starRating: 5,
      comment:
        "Top-notch service! The staff went above and beyond to make sure everything was perfect.",
      createTime: "2025-03-28T15:45:00Z",
    },
    {
      reviewId: "6",
      reviewer: { displayName: "David Lee" },
      starRating: 3,
      comment: "It was okay — not bad, but could’ve been a bit more organized.",
      createTime: "2025-04-11T11:20:00Z",
    },
    {
      reviewId: "7",
      reviewer: { displayName: "Jessica Miller" },
      starRating: 5,
      comment:
        "Fantastic! Quick, easy, and exactly what I needed. Highly recommend to anyone.",
      createTime: "2025-04-25T17:10:00Z",
    },
    {
      reviewId: "8",
      reviewer: { displayName: "Ethan Davis" },
      starRating: 4,
      comment:
        "Good overall. Communication could’ve been slightly better, but the final result was great.",
      createTime: "2025-05-06T08:55:00Z",
    },
    {
      reviewId: "9",
      reviewer: { displayName: "Olivia Taylor" },
      starRating: 5,
      comment:
        "Amazing experience from start to finish! Everything exceeded my expectations.",
      createTime: "2025-05-20T13:40:00Z",
    },
    {
      reviewId: "10",
      reviewer: { displayName: "Benjamin Harris" },
      starRating: 2,
      comment:
        "Not the best experience. Communication was slow, and it didn’t meet my expectations.",
      createTime: "2025-06-03T16:25:00Z",
    },
    {
      reviewId: "11",
      reviewer: { displayName: "Lucas Thompson" },
      starRating: 5,
      comment: "Incredible work! Will definitely be coming back for future projects.",
      createTime: "2025-07-07T10:45:00Z",
    },
    {
      reviewId: "12",
      reviewer: { displayName: "Grace Anderson" },
      starRating: 4,
      comment: "Solid service — they really care about their clients!",
      createTime: "2025-07-21T13:25:00Z",
    },
    {
      reviewId: "13",
      reviewer: { displayName: "Henry Clark" },
      starRating: 5,
      comment: "Perfect execution and great communication all the way through.",
      createTime: "2025-08-02T09:10:00Z",
    },
    {
      reviewId: "14",
      reviewer: { displayName: "Ava Martinez" },
      starRating: 4,
      comment: "Very professional! A few delays, but great final result.",
      createTime: "2025-08-19T11:35:00Z",
    },
    {
      reviewId: "15",
      reviewer: { displayName: "Jacob Robinson" },
      starRating: 5,
      comment: "Exactly what I was looking for! 10/10 experience.",
      createTime: "2025-09-03T15:00:00Z",
    },
  ];

  // Handle responsive initial count
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2); // Mobile
      } else {
        setVisibleCount(6); // Desktop
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Load more handler
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, 15));
  };

  return (
    <section id="reviews" className="flex flex-col items-center mb-6 lg:mb-16">
      <div  className="columns-1 sm:columns-2 lg:columns-3 gap-4 gap-4 ">
        {dummyReviews.slice(0, visibleCount).map((review, index) => (
          <div
            key={index}
            data-aos="flip-left"
            data-aos-delay={`${100 * (index + 1)}`}
            className="h-auto w-[325px] bg-[#0c1015] border border-white/10  
              rounded-xl p-7 flex flex-col mb-3 break-inside-avoid"
          >
            {/* Top section */}
            <div className="flex flex-row justify-between w-full items-start">
              <div className="flex flex-row gap-3 items-start ">
                <Image
                  src="/icon_images/reviews_google_icon.png"
                  alt="Google Reviews Icon"
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="text-lg font-medium mb-[-3px]">
                    {review.reviewer.displayName}
                  </h4>
                  <p className="text-[#746eb8] text-sm">
                    {new Date(review.createTime).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <p className="font-medium">
                <span className="relative text-xs mr-[2px] bottom-[2px]">⭐</span>
                {review.starRating}
                <span className="text-gray-600">/5</span>
              </p>
            </div>

            {/* Divider line */}
            <div className="h-[1px] w-full mt-4 mb-5 bg-[#746eb8]" />

            {/* Comment */}
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < 15 && (
        <button
          onClick={handleLoadMore}
           className={`button rounded-md px-[90px] mt-6`}
        >
          Load More &#x27a4;
        </button>
      )}
    </section>
  );
};

export default Reviews;
