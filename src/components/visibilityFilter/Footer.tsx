import React from "react";
import {FilterButton} from "./FilterButton";

import { VisibilityFilter } from "./visibilityFilterSlice";

export const Footer: React.FC = () => {
    return (
        <div>
            <span>Show: </span>
            <FilterButton visibilityFilter={VisibilityFilter.ShowAll} text={"All"} />
            <FilterButton
                visibilityFilter={VisibilityFilter.ShowActive}
                text={"Active"}
            />
            <FilterButton
                visibilityFilter={VisibilityFilter.ShowCompleted}
                text={"Completed"}
            />
        </div>
    );
}
