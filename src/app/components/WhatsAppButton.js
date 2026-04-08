"use client";

import { useMemo, useState, useEffect } from "react";

const DEFAULT_PHONE = "919360787705";
const DEFAULT_MESSAGE = "Hi Trenquix, I would like to discuss my project.";

function sanitizePhoneNumber(phoneNumber) {
    return (phoneNumber || "").replace(/[^\d]/g, "");
}

export default function WhatsAppButton({
    phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_PHONE,
    message = DEFAULT_MESSAGE,
    label = "Chat with us on WhatsApp",
    placement = "floating",
    pulse = false,
    tooltip = true,
    className = "",
    showDelayMs = 0,
    enableScrollVisibility = false,
    scrollThreshold = 200,
    analyticsEventName,
    analyticsPayload,
    onClick,
}) {
    const [delayReady, setDelayReady] = useState(showDelayMs === 0);
    const [scrollReady, setScrollReady] = useState(() => !enableScrollVisibility);

    const phone = sanitizePhoneNumber(phoneNumber);

    const href = useMemo(() => {
        const text = encodeURIComponent(message);
        return `https://wa.me/${phone}?text=${text}`;
    }, [message, phone]);

    useEffect(() => {
        if (showDelayMs === 0 || delayReady) {
            return;
        }

        const timer = window.setTimeout(() => setDelayReady(true), showDelayMs);
        return () => window.clearTimeout(timer);
    }, [showDelayMs, delayReady]);

    useEffect(() => {
        if (!enableScrollVisibility) {
            return;
        }

        const handleScroll = () => {
            setScrollReady(window.scrollY >= scrollThreshold);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [enableScrollVisibility, scrollThreshold]);

    if (!phone || !(delayReady && scrollReady)) {
        return null;
    }

    const trackClick = () => {
        const eventName = analyticsEventName || `whatsapp_click_${placement}`;
        const payload = {
            placement,
            message,
            phoneNumber: phone,
            ...(analyticsPayload || {}),
        };

        if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", eventName, payload);
        } else {
            console.info("[analytics:fallback]", eventName, payload);
        }

        if (typeof onClick === "function") {
            onClick({ eventName, payload });
        }
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={tooltip ? label : undefined}
            onClick={trackClick}
            className={`wa-button wa-button-floating ${pulse ? "wa-button-pulse" : ""} ${className}`.trim()}
        >
            <span className="wa-button-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="currentColor" role="presentation">
                    <path d="M16.03 3.2C8.98 3.2 3.25 8.93 3.25 15.99c0 2.49.72 4.89 2.08 6.95l-1.35 4.94a.8.8 0 0 0 .98.98l5.08-1.33a12.75 12.75 0 0 0 6 1.5c7.06 0 12.8-5.73 12.8-12.8 0-7.05-5.74-12.79-12.8-12.79Zm0 23.45c-1.93 0-3.82-.52-5.47-1.52a.8.8 0 0 0-.61-.1L7.1 25.78l.77-2.8a.8.8 0 0 0-.1-.68 11.16 11.16 0 0 1-1.73-5.98c0-5.54 4.5-10.05 10.04-10.05 5.54 0 10.06 4.5 10.06 10.05s-4.52 10.05-10.1 10.05Zm5.8-7.5c-.31-.16-1.86-.92-2.15-1.03-.29-.1-.5-.16-.72.16-.2.31-.8 1.03-.97 1.24-.18.2-.36.24-.67.08-.31-.16-1.3-.47-2.48-1.5-.92-.82-1.54-1.82-1.72-2.13-.18-.31-.02-.48.14-.64.14-.13.31-.35.46-.52.16-.18.2-.3.31-.52.1-.2.05-.4-.03-.57-.08-.16-.72-1.75-.98-2.4-.25-.6-.5-.52-.72-.53h-.61c-.2 0-.52.08-.78.36-.27.3-1.03 1-1.03 2.44 0 1.45 1.05 2.85 1.2 3.04.16.2 2.07 3.15 5.01 4.42.7.31 1.25.5 1.67.64.7.22 1.33.2 1.83.12.56-.08 1.86-.75 2.12-1.48.26-.73.26-1.34.18-1.47-.08-.13-.29-.2-.6-.37Z" />
                </svg>
            </span>
            {tooltip ? <span className="wa-button-tooltip">{label}</span> : null}
        </a>
    );
}