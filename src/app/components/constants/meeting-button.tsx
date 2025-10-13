/* First make sure that you have installed the package */

/* If you are using npm */
// npm install @calcom/embed-react
'use client';
import { getCalApi } from "@calcom/embed-react";
import React, { useEffect } from "react";
export default function ConsultationButton(
    { buttonName, className }: { buttonName: string; className: string }
) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <button
            data-cal-namespace="30min"
            data-cal-link="microbiz/30min"
            data-cal-config={{ "layout": "month_view" }}
            className={className}
        >
            {buttonName}
        </ button>
    )
};