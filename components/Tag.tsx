import { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className?: string;
  bg?: string;
  rotate?: number;
  withHole?: boolean;
};

/**
 * The site's signature shape: a die-cut gift/ID tag, the same silhouette
 * whether it's labeling a hygiene item, hanging off a team member, or
 * marking a city on the Research Triangle map. Ties "care package tag"
 * and "hospital wristband" into one visual idea.
 */
export default function Tag({
  children,
  className = "",
  bg = "bg-linen",
  rotate = 0,
  withHole = true,
}: TagProps) {
  return (
    <div
      className={`relative tag-shape ${bg} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {withHole && <span className="tag-hole" aria-hidden="true" />}
      {children}
    </div>
  );
}
