"use client";

import { useState, useEffect, useCallback } from "react";

interface TypewriterProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function Typewriter({
  strings,
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseDuration = 2000,
  className = "",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentString = strings[currentIndex];

    if (!isDeleting) {
      setDisplayText(currentString.substring(0, displayText.length + 1));

      if (displayText.length === currentString.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setDisplayText(currentString.substring(0, displayText.length - 1));

      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % strings.length);
        return;
      }
    }
  }, [displayText, currentIndex, isDeleting, strings, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return (
    <span className={className}>
      {displayText}
      <span className="typing-cursor" />
    </span>
  );
}
