'use client';

export default function InfoSection() {
    return (
        <section className="py-12 bg-black">
            <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 px-4">
                {/* Card 1 */}
                <div className="flex flex-col items-center">
                    <img
                        src="/arthur.jpg"
                        alt="Arthur Morgan"
                        className="w-full object-cover"
                    />
                    <h2 className="mt-4 text-red-300 text-xl font-semibold">
                        Arthur Morgan
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-300">
                        “We're more ghosts than people.”
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center">
                    <img
                        src="/john.jpg"
                        alt="John Marston"
                        className="w-full object-cover"
                    />
                    <h2 className="mt-4 text-red-300 text-xl font-semibold">
                        John Marston
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-300">
                        You can't change, John. I am a thief and a murderer.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center">
                    <img
                        src="/dutch.jpg"
                        alt="Dutch van der Linde"
                        className="w-full object-cover"
                    />
                    <h2 className="mt-4 text-red-300 text-xl font-semibold">
                        Dutch van der Linde
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-300">
                        “I have a plan. You just have to trust me.”
                    </p>
                </div>
            </div>
        </section>
    );
}