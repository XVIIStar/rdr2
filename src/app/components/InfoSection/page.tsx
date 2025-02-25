'use client';

import Link from "next/link";

export default function InfoSection() {
    return (
        <>
            <section className="py-12 bg-black">
                <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 px-4">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/overview.jpg"
                            alt="Overview"
                            className="w-full h-64 object-cover"
                        />
                        <Link href="/pages/overview">
                            <h2 className="mt-4 text-red-300 text-xl font-semibold">
                                Overviews
                            </h2>
                        </Link>
                        <p className="mt-2 text-center text-sm text-gray-300">
                            “You Don't Get To Live A Bad Life And Have Good Things Happen To You.”
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/arthurfeature.jpg"
                            alt="Arthur Morgan"
                            className="w-full h-64 object-cover"
                        />
                        <Link href="/pages/characters">
                            <h2 className="mt-4 text-red-300 text-xl font-semibold">
                                Characters
                            </h2>
                        </Link>
                        <p className="mt-2 text-center text-sm text-gray-300">
                            “But It Weren't Us Who Changed.”
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/gang.jpg"
                            alt="Van der Linde Gang"
                            className="w-full h-64 object-cover"
                        />
                        <Link href="/pages/gang">
                            <h2 className="mt-4 text-red-300 text-xl font-semibold">
                                Van der Linde Gang
                            </h2>
                        </Link>
                        <p className="mt-2 text-center text-sm text-gray-300">
                            “I Have A Plan. You Just Have To Trust Me.”
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-black">
                <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 px-4">
                    {/* Card 4 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/missions.jpg"
                            alt="Missions"
                            className="w-full h-64 object-cover"
                        />
                        <Link href="/pages/mission">
                            <h2 className="mt-4 text-red-300 text-xl font-semibold">
                                Missions
                            </h2>
                        </Link>
                        <p className="mt-2 text-center text-sm text-gray-300">
                            “Lack Of Something To Feel Important About Is Almost The Greatest Tragedy A Man May Have.”
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/wildlife.jpg"
                            alt="Wild Life"
                            className="w-full h-64 object-cover"
                        />
                        <Link href="/pages/wildlife">
                            <h2 className="mt-4 text-red-300 text-xl font-semibold">
                                WildLife
                            </h2>
                        </Link>
                        <p className="mt-2 text-center text-sm text-gray-300">
                            “I’ve Been Killing A Lot Of Animals Because I Just Get So Angry Sometimes.”
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/challenges.jpg"
                            alt="Challenges"
                            className="w-full h-64 object-cover"
                        />
                        <Link href="/pages/challenges">
                            <h2 className="mt-4 text-red-300 text-xl font-semibold">
                                Challenges
                            </h2>
                        </Link>
                        <p className="mt-2 text-center text-sm text-gray-300">
                            “Legend Of The East.”
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-black">
                <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 px-4">
                    {/* Card 7 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/factions.jpg"
                            alt="Factions"
                            className="w-full h-64 object-cover"
                        />
                        <Link href="/pages/factions">
                            <h2 className="mt-4 text-red-300 text-xl font-semibold">
                                Factions
                            </h2>
                        </Link>
                        <p className="mt-2 text-center text-sm text-gray-300">
                            “Forgive Me If I Slip And Stab You In The Face.”
                        </p>
                    </div>

                    {/* Card 8 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/weapons.jpg"
                            alt="Wild Life"
                            className="w-full h-64 object-cover"
                        />
                        <Link href="/pages/weapons">
                            <h2 className="mt-4 text-red-300 text-xl font-semibold">
                                Weapons
                            </h2>
                        </Link>

                        <p className="mt-2 text-center text-sm text-gray-300">
                            “We’re Thieves In A World That Don’t Want Us No More.”
                        </p>
                    </div>

                    {/* Card 9 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/horse.jpg"
                            alt="Van der Linde Gang"
                            className="w-full h-64 object-cover"
                        />
                        <Link href="/pages/mount">
                            <h2 className="mt-4 text-red-300 text-xl font-semibold">
                                Mounts
                            </h2>
                        </Link>
                        <p className="mt-2 text-center text-sm text-gray-300">
                            “That's My Girl”
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}