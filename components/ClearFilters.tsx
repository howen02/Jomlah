"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ClearFilters = () => {
    const router = useRouter();

    const handleClear = () => {
        router.replace("/", undefined);
    };

    return (
        <button onClick={handleClear} title="Clear Filters" className="clear-filter__btn">
            Clear
        </button>
    );
};

export default ClearFilters;
