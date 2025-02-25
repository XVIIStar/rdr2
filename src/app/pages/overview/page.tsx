'use client';

import React from 'react';

export default function Overview() {
    return (
        <>
            <section className="w-screen relative overflow-hidden mx-auto">
                <img
                    src="/overviewmain.png"
                    alt="Overview Main"
                    className="w-full h-auto object-cover block"
                />
            </section>
            <section className="w-screen relative overflow-hidden mx-auto"
                     style={{
                         background: `
                            linear-gradient(
                                to bottom,
                                rgba(0,0,0,1) 0%,
                                rgba(16,0,0,1) 100%
                            ),
                            url('/grunge-overlay.png')`,
                         backgroundSize: 'cover, cover',
                         backgroundRepeat: 'no-repeat, no-repeat',
                         backgroundPosition: 'center, center',
                     }}>
                <p className="text-white text-center max-w-4xl mx-auto">
                    Red Dead Redemption 2 (stylized as Red Dead Redemption II) is a western-themed action-adventure
                    video game developed and published by Rockstar Games.
                    It is the third entry in the Red Dead series and a prequel to 2010's Red Dead Redemption and was
                    released on October 26th, 2018 on PlayStation 4,
                    Xbox One and on November 5th, 2019 for PC.
                </p>
            </section>
            <section className="w-screen relative overflow-hidden mx-auto p-2 grid grid-cols-2"
                     style={{
                         background: `
                            linear-gradient(
                                rgba(0,0,0,1) 0%,
                                rgba(16,0,0,1) 100%
                            ),
                            url('/grunge-overlay.png')`,
                         backgroundSize: 'cover, cover',
                         backgroundRepeat: 'no-repeat, no-repeat',
                         backgroundPosition: 'center, center',
                     }}>
                <img
                    src="/overviewside1.jpg"
                    alt="Overview 1"
                    className="w-full h-auto object-cover block p-2 m-2"
                />
                <img
                    src="/overviewside2.jpg"
                    alt="Overview 2"
                    className="w-full h-auto object-cover block p-2 m-2"
                />
            </section>
            <section className="w-screen relative overflow-hidden mx-auto"
                     style={{
                         background: `
                            linear-gradient(
                                rgba(0,0,0,1) 0%,
                                rgba(16,0,0,1) 100%
                            ),
                            url('/grunge-overlay.png')`,
                         backgroundSize: 'cover, cover',
                         backgroundRepeat: 'no-repeat, no-repeat',
                         backgroundPosition: 'center, center',
                     }}>
                <p className="text-white text-center max-w-4xl mx-auto">
                    Set in a fictional recreation of the American Old West in 1899,
                    Red Dead Redemption 2 focuses on the life of Arthur Morgan and his position in the notorious Van der
                    Linde gang.
                    The game follows the gang's decline as they are pursued by lawmen,
                    fellow gangs and Pinkerton agents.
                    The narrative revolves around the characters of Dutch van der Linde,
                    John Marston (both of whom appeared in Red Dead Redemption) and Micah Bell in addition to Morgan.

                </p>
            </section>
            <section className="w-[80vw] relative overflow-hidden mx-auto p-2"
                     style={{
                         background: `
                            linear-gradient(
                                rgba(0,0,0,1) 0%,
                                rgba(16,0,0,1) 100%
                            ),
                            url('/grunge-overlay.png')`,
                         backgroundSize: 'cover, cover',
                         backgroundRepeat: 'no-repeat, no-repeat',
                         backgroundPosition: 'center, center',
                     }}>
                <img
                    src="/overviewnature.jpg"
                    alt="Overview Main"
                    className="w-full h-auto object-cover block"
                />
            </section>
            <section className="w-screen relative overflow-hidden mx-auto"
                     style={{
                         background: `
                            linear-gradient(
                                rgba(0,0,0,1) 0%,
                                rgba(16,0,0,1) 100%
                            ),
                            url('/grunge-overlay.png')`,
                         backgroundSize: 'cover, cover',
                         backgroundRepeat: 'no-repeat, no-repeat',
                         backgroundPosition: 'center, center',
                     }}>
                <p className="text-white text-center max-w-4xl mx-auto">
                    Red Dead Redemption 2 is set in an open world consisting of five American regions,
                    which the player can explore as they proceed with the story,
                    and can be played through both third-person and first-person view.
                    As Arthur Morgan, players can interact with the game world in several ways,
                    including story missions, side quests, challenges, randomized events, and hunting.
                    An Honor system, returning from the previous game,
                    changes accordingly to the player's actions towards non-player characters.
                </p>
            </section>
            <section className="w-[80vw] relative overflow-hidden mx-auto p-2"
                     style={{
                         background: `
                            linear-gradient(
                                rgba(0,0,0,1) 0%,
                                rgba(16,0,0,1) 100%
                            ),
                            url('/grunge-overlay.png')`,
                         backgroundSize: 'cover, cover',
                         backgroundRepeat: 'no-repeat, no-repeat',
                         backgroundPosition: 'center, center',
                     }}>
                <img
                    src="/overviewconclusion.jpg"
                    alt="Overview Main"
                    className="w-full h-auto object-cover block"
                />
            </section>
            <section className="w-screen relative overflow-hidden mx-auto"
                     style={{
                         background: `
                            linear-gradient(
                                rgba(0,0,0,1) 0%,
                                rgba(16,0,0,1) 100%
                            ),
                            url('/grunge-overlay.png')`,
                         backgroundSize: 'cover, cover',
                         backgroundRepeat: 'no-repeat, no-repeat',
                         backgroundPosition: 'center, center',
                     }}>
                <p className="text-white text-center max-w-4xl mx-auto">
                    Upon release, Red Dead Redemption 2 received widespread universal acclaim;
                    it was praised for its writing, themes, characterization, open-world design, visuals, realistic
                    elements and attention to detail,
                    though it also received criticism for its control scheme and the effect of realism on the gameplay.
                    A commercial success, Red Dead Redemption 2 had the second-biggest launch in the history of
                    entertainment (behind fellow Rockstar Games title Grand Theft Auto V),
                    generating $725 million in sales from its opening weekend and shipping over 23 million copies in
                    retail.
                </p>
            </section>
        </>
    );
}
