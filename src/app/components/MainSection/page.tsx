'use client';

export default function MainSection() {
    return (
        <>
            <section className="w-screen relative overflow-hidden mx-auto">
                <img
                    src="/mainpic.jpg"
                    alt="Hero Section"
                    className="w-full h-auto object-cover block"
                />
            </section>
            <section className="w-screen relative overflow-hidden mx-auto"
                     style={{
                         background: `
                            linear-gradient(
                                to bottom,
                                rgba(0,0,0,1) 0%,
                                rgba(32,0,0,1) 100%
                            ),
                            url('/grunge-overlay.png')`,
                         backgroundSize: 'cover, cover',
                         backgroundRepeat: 'no-repeat, no-repeat',
                         backgroundPosition: 'center, center',
                     }}
            >
                <p className="text-white text-center max-w-3xl mx-auto">
                    America, 1899.
                    The end of the Wild West era has begun.
                    After a robbery goes badly wrong in the western town of Blackwater,
                    Arthur Morgan and the Van der Linde gang are forced to flee.
                    With federal agents and the best bounty hunters in the nation massing on their heels,
                    the gang must rob, steal and fight their way across the rugged heartland of America
                    in order to survive.
                    As deepening internal divisions threaten to tear the gang apart,
                    Arthur must make a choice between his own ideals and loyalty to the gang who raised him.
                </p>
            </section>
        </>
    );
}
