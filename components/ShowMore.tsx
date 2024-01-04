"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";

import React from "react";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 9;
        const newPathName = updateSearchParams("limit", `${newLimit}`);

        router.push(newPathName);
    };

    return (
        <div className="w-full flex-center gap-5 mt-10 font-semibold">
            {!isNext && (
                <CustomButton
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-blue-600 rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    );
};

export default ShowMore;
