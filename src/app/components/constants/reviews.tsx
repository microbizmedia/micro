"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Reviews = () => {
    const dummyReviews = [
        {
            reviewId: "7",
            reviewer: { displayName: "Sara Saneva" },
            starRating: 5,
            comment:
                "I had a great experience working with MicroBiz Media. They built a clean, professional website that looks amazing and works perfectly. The team was easy to talk to, quick to respond, and really understood what I needed. Simply solid work and good communication. Everything was delivered on time, and they made the whole process smooth from start to finish. I’m super happy with the final result and would definitely recommend them to anyone looking for a reliable web design company. Excellent service, highly recommend!",
            createTime: "2025-10-13T17:10:00Z",
            real: true, // mark as real
        },
        {
            reviewId: "dummy-1",
            reviewer: { displayName: "Placeholder Reviewer" },
            starRating: 4,
            comment:
                "This is a placeholder review used for design purposes while we wait for more real reviews from our clients.",
            createTime: "2025-01-01T00:00:00Z",
            real: false,
        },
        {
            reviewId: "dummy-2",
            reviewer: { displayName: "Design Tester" },
            starRating: 5,
            comment:
                "Another placeholder review to demonstrate how the reviews section will look once we have more feedback. All real reviews will be shown here in the future.",
            createTime: "2025-01-02T00:00:00Z",
            real: false,
        },
        {
            reviewId: "dummy-3",
            reviewer: { displayName: "Sample User" },
            starRating: 4,
            comment:
                "This review is just for layout and design. Real client feedback will appear here soon!",
            createTime: "2025-01-03T00:00:00Z",
            real: false,
        },
        {
            reviewId: "dummy-4",
            reviewer: { displayName: "Test Account" },
            starRating: 5,
            comment:
                "We’re showing this placeholder to give you an idea of the reviews layout. Actual client reviews will replace these soon.",
            createTime: "2025-01-04T00:00:00Z",
            real: false,
        },
        {
            reviewId: "dummy-5",
            reviewer: { displayName: "UI Tester" },
            starRating: 3,
            comment:
                "Design placeholder. Waiting for more real reviews from our happy clients!",
            createTime: "2025-01-05T00:00:00Z",
            real: false,
        },
        {
            reviewId: "dummy-6",
            reviewer: { displayName: "Placeholder User" },
            starRating: 4,
            comment:
                "Temporary review used to fill out the section and test styling. Real reviews coming soon.",
            createTime: "2025-01-06T00:00:00Z",
            real: false,
        },
        {
            reviewId: "dummy-7",
            reviewer: { displayName: "Sample Client" },
            starRating: 5,
            comment:
                "This is a dummy review for design purposes. We are excited to share more real feedback shortly!",
            createTime: "2025-01-07T00:00:00Z",
            real: false,
        },
        {
            reviewId: "dummy-8",
            reviewer: { displayName: "Design Placeholder" },
            starRating: 4,
            comment:
                "Placeholder review. All reviews will soon be replaced by real client feedback.",
            createTime: "2025-01-08T00:00:00Z",
            real: false,
        },
    ];

    // Mobile load more state
    const [mobileVisibleCount, setMobileVisibleCount] = useState(2);

    // Determine reviews to show based on screen width
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Desktop: last 9 reviews, Mobile: slice for load more
    const reviewsToDisplay = isMobile
        ? dummyReviews.slice(0, mobileVisibleCount)
        : dummyReviews.slice(-9); // last 9 reviews

    return (
        <section id="reviews" className="flex flex-col items-center mb-6 lg:mb-16">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4" >
                {reviewsToDisplay.map((review, index) => (
                    <div key={index} data-aos="flip-left" data-aos-delay={`${100 * (index + 1)}`}  >
                        <a
                            href="https://www.google.com/search?sca_esv=67b7e7efba1416c5&hl=en&authuser=0&sxsrf=AE3TifMA6k2-yl9H1yB8WUvEs3UmTWcXOQ:1760647486833&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EyPvN_LEcRclv0fyX6YRoi5p1CC_-QpI0dmoPd3LEwTRgoGUn6DOdu8Z_mPNhOOq1tm1zvZnVy7IzHcz30u222C7lecf&q=MicroBiz+Media+Reviews&sa=X&ved=2ahUKEwiy55uAy6mQAxV3HjQIHcAFG1MQ0bkNegQIHxAD&cshid=1760647513116792&biw=1920&bih=959&dpr=1"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            <div className="bg-[#0c1015] border border-white/10 rounded-xl p-6 w-[325px] break-inside-avoid mb-4  cursor-pointer   cursor-pointer transform hover:scale-[1.02] transition-transform duration-200 ease-in-out">
                                {/* Top section */}
                                <div className="flex flex-row justify-between w-full items-start">
                                    <div className="flex flex-row gap-3 items-start ">
                                        <Image
                                            src="/icon_images/reviews_google_icon.png"
                                            alt="Google Reviews Icon"
                                            width={40}
                                            height={40}
                                            className="mt-1"
                                        />
                                        <div>
                                            <h4 className="text-lg font-medium truncate w-[140px]">
                                                {review.reviewer.displayName}
                                            </h4>

                                            <p className="text-[#746eb8]  text-sm ">View on Google &#x27a4;</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-medium text-right">
                                            <span className="relative text-xs mr-[2px] bottom-[2px]">⭐</span>
                                            {review.starRating}
                                            <span className="text-gray-600">/5</span>
                                        </p>
                                        <p className="text-[#746eb8] text-sm mt-1">
                                            {new Date(review.createTime).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>

                                {/* Divider line */}
                                <div className="h-[1px] w-full mt-4 mb-5 bg-[#746eb8]" />

                                {/* Comment */}
                                <p>{review.comment}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>

            {/* Mobile Load More Button */}
            {isMobile && mobileVisibleCount < 6 && (
                <button
                    data-aos="zoom-in"
                    className="button rounded-md px-8 "
                    onClick={() => setMobileVisibleCount((prev) => Math.min(prev + 4, 6))}
                >
                    Load More &#x27a4;
                </button>
            )}

        </section>
    );
};

export default Reviews;
