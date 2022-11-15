/** @jsx jsx */
import { jsx, Link as ThemeUILink } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

function Link({ to, variant = "base", children, ...props }) {
  const sx = {
    variant: `links.${variant}`
  };

  if (to && to.startsWith("http")) {
    const aProps = {
      ...props,
      rel: props.target === "_blank" && "noopener noreferrer",
      sx
    };
    return (
      <a href={to} {...aProps}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <GatsbyLink to={to} {...props} activeClassName="is-active" sx={sx}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <ThemeUILink {...props} sx={sx}>
      {children}
    </ThemeUILink>
  );
}

export default Link;
