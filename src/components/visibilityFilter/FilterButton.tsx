import React from "react";

import { setVisibilityFilter, VisibilityFilter } from "./visibilityFilterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";


type TFilterButtonProps = {
    visibilityFilter: VisibilityFilter;
    text: string;
}

export const FilterButton: React.FC<TFilterButtonProps> = ({
    visibilityFilter,
    text
}) => {
    const dispatch = useDispatch();
    const currentVisibilityFilter = useSelector(
        (state: RootState) => state.visibilityFilter
    );
    return (
        <button
            disabled={currentVisibilityFilter === visibilityFilter}
            onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}
        >
            {text}
        </button>
    );
}
