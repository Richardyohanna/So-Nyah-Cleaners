
type ButtonProp = {
    onClickAction?: (action: any) => void;
    text: string;
}

const CustomButton = ({onClickAction , text}: ButtonProp)=> {

    return (
        <button onClick={onClickAction} className="bg-[var(--primary)] text-white px-5 py-2 rounded-3xl shadow-xl font-semibold transition-all duration-300 hover:bg-purple-900 hover:scale-105">
            {text}
        </button>
    )
}

export default CustomButton;