import { EachRenderer, FactItem } from "@/components";
import { FACT_ITEMS } from "@/constants";
import { FactItemType } from "@/types";
import React from "react";

function ServiceList() {
    return (
        <div className="p-20 mt-20 grid grid-cols-12 gap-5">
            <EachRenderer<FactItemType>
                of={FACT_ITEMS}
                render={(item) => (
                    <div className="col-span-3">
                        <FactItem
                            fact={item}
                        />
                    </div>
                )}
            />
        </div>
    )
}

export { ServiceList }