import React, { useEffect, useRef, useCallback } from "react";
import "./ProfileCard.css";

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";

const DEFAULT_INNER_GRADIENT = "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v, p = 3) => parseFloat(v.toFixed(p));
const adjust = (v, a, b, c, d) => round(c + ((d - c) * (v - a)) / (b - a));
const easeInOutCubic = (x) => (x < 0.5 ? 4 * x ** 3 : 1 - Math.pow(-2 * x + 2, 3) / 2);

const ProfileCard = ({
  avatarUrl,
  iconUrl,
  grainUrl,
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  miniAvatarUrl,
  name = "Abhishek",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const rafId = useRef(null);
  const throttleTimeout = useRef(null);

  const updateTransform = useCallback((x, y) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const width = card.clientWidth;
    const height = card.clientHeight;

    const percentX = clamp((100 / width) * x);
    const percentY = clamp((100 / height) * y);

    const centerX = percentX - 50;
    const centerY = percentY - 50;

    const styleVars = {
      "--pointer-x": `${percentX}%`,
      "--pointer-y": `${percentY}%`,
      "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
      "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
      "--pointer-from-center": `${clamp(Math.hypot(centerX, centerY) / 50, 0, 1)}`,
      "--pointer-from-top": `${percentY / 100}`,
      "--pointer-from-left": `${percentX / 100}`,
      "--rotate-x": `${round(-centerX / 5)}deg`,
      "--rotate-y": `${round(centerY / 4)}deg`,
    };

    Object.entries(styleVars).forEach(([k, v]) => wrap.style.setProperty(k, v));
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (throttleTimeout.current) return;

    throttleTimeout.current = setTimeout(() => {
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      updateTransform(e.clientX - rect.left, e.clientY - rect.top);
      throttleTimeout.current = null;
    }, 16); // ~60fps
  }, [updateTransform]);

  const smoothCenter = useCallback((duration = 600) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const startTime = performance.now();
    const startX = wrap.clientWidth - 70;
    const startY = 60;
    const targetX = wrap.clientWidth / 2;
    const targetY = wrap.clientHeight / 2;

    const animate = (time) => {
      const t = clamp((time - startTime) / duration);
      const eased = easeInOutCubic(t);
      const x = adjust(eased, 0, 1, startX, targetX);
      const y = adjust(eased, 0, 1, startY, targetY);
      updateTransform(x, y);
      if (t < 1) rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
  }, [updateTransform]);

  const handlePointerEnter = () => {
    wrapRef.current?.classList.add("active");
    cardRef.current?.classList.add("active");
    if (rafId.current) cancelAnimationFrame(rafId.current);
  };

  const handlePointerLeave = (e) => {
    wrapRef.current?.classList.remove("active");
    cardRef.current?.classList.remove("active");
    smoothCenter(600);
  };

  useEffect(() => {
    if (!enableTilt) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    card.addEventListener("pointerenter", handlePointerEnter);
    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerleave", handlePointerLeave);

    smoothCenter(1000);

    return () => {
      card.removeEventListener("pointerenter", handlePointerEnter);
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [enableTilt, handlePointerMove, smoothCenter]);

  const cardStyle = {
    "--icon": iconUrl ? `url(${iconUrl})` : "none",
    "--grain": grainUrl ? `url(${grainUrl})` : "none",
    "--behind-gradient": showBehindGradient ? (behindGradient ?? DEFAULT_BEHIND_GRADIENT) : "none",
    "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
  };

  return (
    <div ref={wrapRef} className={`pc-card-wrapper ${className}`.trim()} style={cardStyle}>
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <img className="avatar" src={avatarUrl} alt={`${name} avatar`} loading="lazy" />
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <img src={miniAvatarUrl || avatarUrl} alt="mini avatar" loading="lazy" />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>
                <button className="pc-contact-btn" onClick={onContactClick}>{contactText}</button>
              </div>
            )}
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(ProfileCard);
