'use client';

import MainCard from "@/app/components/Cards/mainpage-card";


export default function InfoSection() {
    return (
        <>
            <section className="py-12 bg-black">
                <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 px-4">
                    <MainCard
                        imageSrc="/overview.jpg"
                        alt="Overview"
                        link="/pages/overview"
                        title="Overviews"
                        quote="“You Don't Get To Live A Bad Life And Have Good Things Happen To You.”"
                    />
                    <MainCard
                        imageSrc="/arthurfeature.jpg"
                        alt="Arthur Morgan"
                        link="/pages/characters"
                        title="Characters"
                        quote="“But It Weren't Us Who Changed.”"
                    />
                    <MainCard
                        imageSrc="/gang.jpg"
                        alt="Van der Linde Gang"
                        link="/pages/gang"
                        title="Van der Linde Gang"
                        quote="“I Have A Plan. You Just Have To Trust Me.”"
                    />
                </div>
            </section>
            <section className="py-12 bg-black">
                <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 px-4">
                    <MainCard
                        imageSrc="/missions.jpg"
                        alt="Missions"
                        link="/pages/mission"
                        title="Missions"
                        quote="“Lack Of Something To Feel Important About Is Almost The Greatest Tragedy A Man May Have.”"
                    />
                    <MainCard
                        imageSrc="/wildlife.jpg"
                        alt="Wild Life"
                        link="/pages/wildlife"
                        title="WildLife"
                        quote="“I’ve Been Killing A Lot Of Animals Because I Just Get So Angry Sometimes.”"
                    />
                    <MainCard
                        imageSrc="/journal.jpg"
                        alt="Journal"
                        link="/pages/challenges"
                        title="Journal"
                        quote="“We Can’t Change What's Done, We Can Only Move On.”"
                    />
                </div>
            </section>
            <section className="py-12 bg-black">
                <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 px-4">
                    <MainCard
                        imageSrc="/factions.jpg"
                        alt="Factions"
                        link="/pages/factions"
                        title="Factions"
                        quote="“Forgive Me If I Slip And Stab You In The Face.”"
                    />
                    <MainCard
                        imageSrc="/weapons.jpg"
                        alt="Weapons"
                        link="/pages/weapons"
                        title="Weapons"
                        quote="“We’re Thieves In A World That Don’t Want Us No More.”"
                    />
                    <MainCard
                        imageSrc="/horse.jpg"
                        alt="Mounts"
                        link="/pages/mount"
                        title="Mounts"
                        quote="“That's My Girl”"
                    />
                </div>
            </section>
        </>
    );
}
