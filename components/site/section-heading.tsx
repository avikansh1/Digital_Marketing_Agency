export function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
  as: Component = 'h2',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  as?: 'h1' | 'h2';
}) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <Component className="font-heading text-3xl font-bold text-balance sm:text-4xl">
        {title}
      </Component>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
