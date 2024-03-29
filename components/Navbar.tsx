import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <h1 className="text-center text-6xl font-sans font-bold text-blue-800">Jomlah</h1>
                </Link>

                <CustomButton
                    title="Sign In"
                    btnType="button"
                    containerStyles="text-blue-600 round rounded-full bg-white min-w-[130px]"
                    textStyles="font-semibold text-lg"
                />
            </nav>
        </header>
    );
};

export default Navbar;
