export const MidSection = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-around p-5 gap-6">
                <div className="h-25 w-50 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transform transition-transform duration-300 ease-in-out hover:scale-110">01</div>
                <div className="h-25 w-50 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transform transition-transform duration-300 ease-in-out hover:scale-110">02</div>
                <div className="h-25 w-50 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transform transition-transform duration-300 ease-in-out hover:scale-110">03</div>
            </div>
        </>
    );
}