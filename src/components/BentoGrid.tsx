import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento transition duration-200 p-4 justify-between flex flex-col space-y-4 glass-panel border border-white/10 hover:border-[#00f5ff]/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.1)]",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10">
                {icon}
                <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-400 text-xs line-clamp-3">
                    {description}
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#00f5ff]/5 opacity-0 group-hover/bento:opacity-100 transition-opacity pointer-events-none" />
        </div>
    );
};
