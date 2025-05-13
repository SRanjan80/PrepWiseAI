import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";
import {getCurrentUser, getInterviewsByUserId, getLatestInterviews} from "@/lib/actions/auth.action";

const Page = async () => {
    const user = await getCurrentUser();

    const [ userInterviews, latestInterview ] = await Promise.all([
        await getInterviewsByUserId(user?.id!),
        await getLatestInterviews({ userId: user?.id!})
    ]);

    // const userInterviews = await getInterviewsByUserId(user?.id!);
    // const latestInterview = await getLatestInterviews({ userId: user?.id!});

    const hasPastInterviews = userInterviews?.length > 0;
    const hasUpcomingInterviews = latestInterview?.length > 0;

    return (
        // <div>Home Page</div>
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
                    <p className="text-lg">
                        Practice job interview with PrepWiseAI & get instant feedback.
                    </p>
                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/Interview">Start an Interview</Link>
                    </Button>
                </div>
                <Image src="/robot.png" alt="Doremon" height={400} width={400} className="max-sm:hidden"/>
            </section>
            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interviews</h2>
                <div className="interviews-section">
                    {
                        hasPastInterviews ? (
                            userInterviews?.map((interview) => (
                                <InterviewCard {...interview} key={interview.id}/>

                            )
                        )) : (
                            <p>You have not taken any interviews yet</p>
                        //)
                        // dummyInterviews.map((interview) => ()
                        )
                    }
                </div>
            </section>
            <section className="flex flex-col gap-6 mt-8">
                <h2>Take an interview</h2>
                <div className="interviews-section">
                    {
                        hasUpcomingInterviews ? (
                            latestInterview?.map((interview) => (
                                    <InterviewCard {...interview} key={interview.id}/>

                                )
                            )) : (
                            <p>There are no new interviews available</p>
                            //)
                            // dummyInterviews.map((interview) => ()
                        )
                    }
                    {/*{dummyInterviews.map((interview) => (*/}
                    {/*    <InterviewCard {...interview} key={interview.id}/>*/}
                    {/*))}*/}
                    {/*<p>There are no interviews available</p>*/}
                </div>
            </section>
        </>
    )
}
export default Page
