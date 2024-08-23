
type dateProps = {
    date?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function DateElement({date, ...rest}: dateProps) {

    return(
        <div className="flex items-center w-[44px] h-[44px] translucent-white20">
            {date}
            <circle className="rounded-[16px] w-[6px] h-[6px] red-04" />
        </div>
    )
}